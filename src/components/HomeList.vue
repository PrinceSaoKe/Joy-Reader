<script setup lang="ts">
import { BlogModel } from '@/models/blog';
import router from '@/router';

defineProps<{ dataList: BlogModel[] }>()
</script>

<template>
  <el-card v-for="data in dataList" body-style="padding: 15px" @click="router.push(`/article/${data.blogId}`)">
    <h1>{{ data.title }}</h1>
    <p>{{ data.desc }}</p>
    <span>热度 {{ data.clicks }}</span>
    <span>{{ data.createTime }}</span>
    <span>{{ data.authorName }}</span>
  </el-card>
</template>

<style scoped>
.el-card {
  margin: 15px 0;
  background-color: #E3E7FF;
}

span {
  margin-right: 10px;
}

h1 {
  margin: 0;
}

p {
  margin: 14px 0;
}
</style>