<script setup lang="ts">
import { getUserBlogList, getUserLikesList } from '@/api/api';
import Avatar from '@/components/Avatar.vue';
import HomeList from "@/components/HomeList.vue";
import { BlogModel } from '@/models/blog';
import { onMounted, ref } from "vue";

const usernameRef = ref()
const pageIndexRef = ref(0)
const dataListRef = ref<BlogModel[]>([])

const loadPage = async (pageIndex: number) => {
  if (pageIndexRef.value == pageIndex) return

  pageIndexRef.value = pageIndex

  if (pageIndexRef.value == 0) dataListRef.value = (await getUserBlogList()).data
  else if (pageIndexRef.value == 1) dataListRef.value = (await getUserLikesList()).data
}

onMounted(() => {
  usernameRef.value = localStorage.getItem('username')
})
</script>

<template>
  <el-container>
    <el-header>
      <Avatar size="100px"></Avatar>
      <div style="width: 30px;"></div>
      <div>
        <h1>{{ usernameRef }}</h1>
        <p>加入于：{{ }}</p>
      </div>
    </el-header>
    <el-main>
      <el-menu mode="horizontal" background-color="transparent" text-color="#626DB7" active-text-color="#3A4276"
        default-active="/my/article">
        <el-menu-item index="/my/article" @click="loadPage(0)">我的作品</el-menu-item>
        <el-menu-item index="/my/likes" @click="loadPage(1)">我的点赞</el-menu-item>
      </el-menu>
      <HomeList :dataList="dataListRef"></HomeList>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  margin: 0 50px 20px 50px;
}

.el-header {
  border-radius: 30px 30px 0 0;
  background-color: #626DB7;
  height: 140px;
  align-items: center;
  display: flex;
  padding: 0 60px;
}

.el-main {
  border-radius: 0 0 30px 30px;
  background-image: linear-gradient(to right, #E3E7FF, #D4C3F7);
}

h1 {
  color: white;
  font-size: 28px;
  margin: 20px 0;
}

p {
  color: white;
}

.el-menu {
  justify-content: center;
  font-weight: bold;
}
</style>