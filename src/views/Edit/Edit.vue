<script setup lang="ts">
import { uploadBlog } from '@/api/api';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import { ref, watch } from 'vue';

const titleRef = ref('')
const descRef = ref('')
const mdRef = ref('# Hello World!')
const mdToHtmlRef = ref('')

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    }
  })
)

watch(mdRef, async () => {
  mdToHtmlRef.value = await marked.parse(mdRef.value, { async: false })
})

/// 剔除文章中的markdown语法符号，剔除所有html标签
const removeHTML = (htmlStr: string): string => {
  // 定义script的正则表达式，去除js可以防止注入
  const scriptRegex: RegExp = new RegExp('<script[^>]*?>[\\s\\S]*?<\\/script>', 'gm')

  // 定义style的正则表达式，去除style样式，防止css代码过多时只截取到css样式代码
  const styleRegex: RegExp = new RegExp('<style[^>]*?>[\\s\\S]*?<\\/style>', 'gm')

  // 定义HTML标签的正则表达式，去除标签，只提取文字内容
  const htmlRegex: RegExp = new RegExp('<[^>]+>', 'gm')

  // 定义空格,回车,换行符,制表符
  const spaceRegex: RegExp = new RegExp('\\s*|\t|\r|\n', 'gm')

  // 过滤script标签
  htmlStr = htmlStr.replace(scriptRegex, "");
  // 过滤style标签
  htmlStr = htmlStr.replace(styleRegex, "");
  // 过滤html标签
  htmlStr = htmlStr.replace(htmlRegex, "");
  // 过滤空格等
  htmlStr = htmlStr.replace(spaceRegex, " ");

  return htmlStr.trim(); // 返回文本字符串
}

const submit = async () => {
  descRef.value = removeHTML(mdToHtmlRef.value).substring(0, 100)
  const model = await uploadBlog(titleRef.value, descRef.value, mdToHtmlRef.value)
  alert(model.base.message)
  // console.log(titleRef.value, descRef.value, mdToHtmlRef.value)
}
</script>

<template>
  <el-container>
    <el-header>
      编辑标题
      <el-input v-model="titleRef" placeholder="请输入标题"></el-input>
    </el-header>
    <el-main>
      <div>
        <div class="text_area">
          <h1>编辑</h1>
          <div class="divider"></div>
          <el-input v-model="mdRef" type="textarea" :rows="15" resize="none"></el-input>
        </div>
        <div class="text_area">
          <h1>预览</h1>
          <div class="divider"></div>
          <div v-html="mdToHtmlRef" id="preview"></div>
        </div>
      </div>
      <div class="center"><el-button @click="submit">发布</el-button></div>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  margin: 0 50px 40px 50px;
}

.el-header {
  height: 150px;
  background-color: #C9C3EF;
  color: #3A4276;
  font-weight: bold;
  font-size: 24px;
  padding: 20px 40px;
  border-radius: 20px 20px 0 0;
}

.el-input {
  margin-top: 20px;
  height: 50px;
}

.el-main {
  background-color: #E3E7FF;
  border-radius: 0 0 20px 20px;
  padding: 20px 40px;
}

.el-main>div {
  display: flex;
  justify-content: space-between;
}

.text_area {
  background-color: white;
  width: 570px;
  height: 380px;
  border-radius: 16px;
  display: block;
  padding: 20px;
}

.text_area .el-input {
  width: 560px;
  height: 330px;
  margin: 5px 0 0 0;
}

#preview {
  max-width: 560px;
  max-height: 330px;
}

.el-button {
  margin: 0 auto;
}

h1 {
  margin: 0;
  color: #3A4276;
}

.divider {
  height: 3px;
  width: 50px;
  background-color: #3A4276;
  margin: 10px 0;
}

.el-button {
  margin: 18px auto 0 auto;
  width: 100px;
  background-color: #C9C3EF;
  color: #626DB7;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
