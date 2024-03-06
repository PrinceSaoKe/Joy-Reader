<script setup lang="ts">
import { getBlog, getComment } from "@/api/api";
import Avatar from '@/components/Avatar.vue';
import Comment from "@/components/Comment.vue";
import { BlogModel } from "@/models/blog";
import { CommentModel } from "@/models/comment";
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()

const blogRef = ref<BlogModel>()
const commentListRef = ref<CommentModel[]>()
const commentRef = ref('')

const getData = async () => {
  blogRef.value = await getBlog(route.params.id as string)
  commentListRef.value = (await getComment(route.params.id as string)).data
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <div id="blog_area">
      <div id="blog_header">
        <h1>{{ blogRef?.title }}</h1>
        <span>{{ blogRef?.clicks }}</span>
        <span>{{ blogRef?.createTime }}</span>
        <span>
          {{ blogRef?.authorName }}
          <Avatar id="author_avatar" size="30px"></Avatar>
        </span>
      </div>
      <div id="blog_main">
        <div v-html="blogRef?.content"></div>
      </div>
    </div>
    <div id="comment_area">
      <h2>评论区</h2>
      <el-input v-model="commentRef" type="textarea" :rows="5" resize="none" placeholder="在此输入评论..."></el-input>
      <div style="height: 10px;"></div>
      <Comment :data="comment" v-for="comment in commentListRef"></Comment>
    </div>
    <div style="height: 30px;"></div>
  </div>
</template>

<style scoped>
#blog_area {
  margin: 0 50px 40px 50px;
}

#blog_header {
  background-color: #C9C3EF;
  border-radius: 30px 30px 0 0;
  padding: 20px 35px 25px 35px;
}

#blog_header span {
  display: inline-block;
}

#blog_header span:last-child {
  float: right;
  display: flex;
  align-items: center;
}

#author_avatar {
  margin-left: 10px;
}

#blog_main {
  background-color: #E3E7FF;
  padding: 20px 35px;
  border-radius: 0 0 30px 30px;
}

h1 {
  margin: 15px 0;
}

#comment_area {
  border-radius: 30px;
  background-color: #C9C3EF;
  margin: 0 50px 0 50px;
  padding: 20px 35px;
}

.el-input {
  border-radius: 30px;
}
</style>
