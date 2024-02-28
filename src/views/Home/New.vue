<script setup lang="ts">
import { getHomeList } from "@/api/api";
import { SortType } from "@/constant/enum";
import { BlogModel } from "@/models/blog";
import { onMounted, ref } from "vue";

const dataListRef = ref<BlogModel[]>([])

onMounted(async () => {
  const model = await getHomeList(1, SortType.UPLOAD_TIME)
  dataListRef.value = model.data
})
</script>

<template>
  <div>
    <el-card v-for="data in dataListRef">
      <h1>{{ data.title }}</h1>
      <p>{{ data.desc }}</p>
      <span>热度 {{ data.clicks }}</span>
      <span>{{ data.createTime }}</span>
      <span>{{ data.authorName }}</span>
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

span {
  margin-right: 10px;
}
</style>
