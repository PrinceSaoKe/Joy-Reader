<script setup lang="ts">
import { marked } from 'marked';
import { ref, watch } from 'vue';

const mdRef = ref('# Hello World!')
const mdToHtml = ref('<h1>Hello World!</h1>')

watch(mdRef, async () => {
  mdToHtml.value = await marked.parse(mdRef.value, { async: false })
})
</script>

<template>
  <textarea v-model="mdRef"></textarea>
  <div v-html="mdToHtml"></div>
</template>