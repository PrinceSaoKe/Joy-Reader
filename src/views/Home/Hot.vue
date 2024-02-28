<script setup lang="ts">
import { getHomeList } from "@/api/api";
import { SortType } from "@/constant/enum";
import { BlogModel } from "@/models/blog";
import { onMounted, ref } from "vue";

const dataListRef = ref<BlogModel[]>([])
const currPageRef = ref(1)

const getDataList = async () => {
  const model = await getHomeList(currPageRef.value, SortType.CLICK_NUM)
  dataListRef.value = model.data
}

const onPageChange = (page: number) => {
  currPageRef.value = page
  getDataList()
}

onMounted(() => {
  getDataList()
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
    <el-pagination layout="prev, pager, next, jumper" :total="100" @current-change="onPageChange" />
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
