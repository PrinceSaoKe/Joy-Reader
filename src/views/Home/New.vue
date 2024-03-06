<script setup lang="ts">
import { getHomeList } from "@/api/api";
import HomeList from "@/components/HomeList.vue";
import { SortType } from "@/constant/enum";
import { BlogModel } from "@/models/blog";
import { onMounted, ref } from "vue";

const dataListRef = ref<BlogModel[]>([])
const currPageRef = ref(1)
const totalPageRef = ref<number>(0)

const getDataList = async () => {
  const model = await getHomeList(currPageRef.value, SortType.UPLOAD_TIME)
  dataListRef.value = model.data
  totalPageRef.value = model.totalPages
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
    <HomeList :dataList="dataListRef"></HomeList>
    <div class="bottom_center">
      <el-pagination layout="prev, pager, next, jumper" :total="totalPageRef" @current-change="onPageChange"
        background />
    </div>
  </div>
</template>

<style scoped>
.bottom_center {
  position: fixed;
  bottom: 20px;
  left: 50%;
  /* 往左移动自身宽度的一半 */
  transform: translateX(-50%);
}
</style>
