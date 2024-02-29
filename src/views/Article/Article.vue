<script setup lang="ts">
import { getBlog } from "@/api/api";
import { BlogModel } from "@/models/blog";
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()

const blogRef = ref<BlogModel>()

const getData = async () => {
  blogRef.value = await getBlog(route.params.id as string)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <el-container>
    <el-header>
      {{ blogRef?.title }}
      {{ blogRef?.clicks }}
      {{ blogRef?.createTime }}
      {{ blogRef?.authorName }}
    </el-header>
    <el-main>
      <div v-html="blogRef?.content"></div>
    </el-main>
  </el-container>
</template>
