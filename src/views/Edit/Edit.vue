<script setup lang="ts">
import { uploadBlog } from "@/api/api.ts";
import { marked } from 'marked';
import { ref, watch } from 'vue';

const title = ref('请输入标题')
const desc = ref('请输入简介')
const mdRef = ref('# Hello World!')
const mdToHtml = ref('<h1>Hello World!</h1>')

watch(mdRef, async () => {
  mdToHtml.value = await marked.parse(mdRef.value, { async: false })
})

const submit = async () => {
  console.log(mdToHtml.value)
  const model = await uploadBlog(title.value, desc.value, mdToHtml.value)
  alert(model.base.message)
}
</script>

<template>
  <el-container>
    <el-header>
      编辑标题
      <el-input></el-input>
    </el-header>
    <el-main>
      <div>
        <div class="text_area">
          <h1>编辑</h1>
          <div class="divider"></div>
          <textarea v-model="mdRef"></textarea>
        </div>
        <div class="text_area">
          <h1>预览</h1>
          <div class="divider"></div>
          <div v-html="mdToHtml"></div>
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
