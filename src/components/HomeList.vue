<script setup lang="ts">
import { BlogModel } from '@/models/blog';
import router from '@/router';

defineProps<{ dataList: BlogModel[] }>()
</script>

<template>
  <el-card v-for="data in dataList" body-style="padding: 15px" @click="router.push(`/article/${data.blogId}`)">
    <h1>{{ data.title }}</h1>
    <p>{{ data.desc }}</p>
    <span style="display: flex; align-items: center;">
      <Icon name="hot_black" size="20px" style="margin-right: 5px;"></Icon>
      热度
      {{ data.clicks }}
      <Icon name="time_black" size="20px" style="margin: 0 5px 0 20px;"></Icon>
      {{ data.createTime }}
      <span style="margin-left: auto; width: 100px; align-items: center; display: flex;">
        <Icon name="user" size="20px" style="margin-right: 5px;"></Icon>
        {{ data.authorName }}
      </span>
    </span>
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