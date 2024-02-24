<script setup lang="ts">
import { ref } from "vue";

const dataListRef = ref([
  { title: 'Java', desc: 'Java预览', hot: 30, uploadTime: '2024-01-24', author: '作者' },
  { title: 'Python', desc: 'Python预览', hot: 30, uploadTime: '2024-01-24', author: '作者' },
  { title: 'C++', desc: 'C++预览', hot: 30, uploadTime: '2024-01-24', author: '作者' },
  { title: 'JavaScript', desc: 'JavaScript预览', hot: 30, uploadTime: '2024-01-24', author: '作者' },
  { title: 'Kotlin', desc: 'Kotlin预览', hot: 30, uploadTime: '2024-01-24', author: '作者' },
  { title: 'C#', desc: 'C#预览', hot: 30, uploadTime: '2024-01-24', author: '作者' },
])
</script>

<template>
  <div>
    <el-card v-for="data in dataListRef">
      <h1>{{ data.title }}</h1>
      <p>{{ data.desc }}</p>
      <span>热度 {{ data.hot }}</span>
      <span>{{ data.uploadTime }}</span>
      <span>{{ data.author }}</span>
    </el-card>
  </div>
</template>

<style scoped>
.el-card {
  margin: 10px 0 10px 0;
  background-color: #E3E7FF;
}

h1 {
  margin: 0;
}

span{
  margin-right: 10px;
}
</style>
