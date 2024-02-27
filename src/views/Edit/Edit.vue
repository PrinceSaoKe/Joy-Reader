<script setup lang="ts">
import { uploadBlog } from "@/api/api.ts";
import { marked } from 'marked';
import { ref, watch } from 'vue';

const mdRef = ref('# Hello World!')
const mdToHtml = ref('<h1>Hello World!</h1>')

watch(mdRef, async () => {
  mdToHtml.value = await marked.parse(mdRef.value, { async: false })
})

const submit = async () => {
  console.log(mdToHtml.value)
  const model = await uploadBlog('这是标题', '这是描述', '这是内容')
  alert(model.base.message)
}
</script>

<template>
  <textarea v-model="mdRef"></textarea>
  <div v-html="mdToHtml"></div>
  <button @click="submit"></button>
</template>