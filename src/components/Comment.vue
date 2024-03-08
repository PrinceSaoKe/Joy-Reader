<script setup lang="ts">
import { commentBlog } from '@/api/api';
import Avatar from '@/components/Avatar.vue';
import { CommentModel } from "@/models/comment";
import { ref } from "vue";

defineProps<{ data: CommentModel }>()

const commentRef = ref('')
const dialogVisible = ref(false)

const reload = () => {
  location.reload()
}
</script>

<template>
  <div class="container">
    <div>
      <Avatar size="50px" :avatar-url="data.avatarUrl" style="margin-bottom: 10px;"></Avatar>
      {{ data.userName }}
    </div>
    <div style="width: 20px;"></div>
    <div class="content">{{ data.content }}</div>
    <div style="width: 20px;"></div>
    <el-button @click="dialogVisible = true">评论</el-button>
  </div>
  <div style="display: flex;">
    <div style="width: 100px;"></div>
    <div style="width: 100%;">
      <Comment :data="subData" v-for="subData in data.subComments"></Comment>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" title="评论" width="500">
    <el-input v-model="commentRef"></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="commentBlog(data.commentId, commentRef, 2).then(reload)">
          评论
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.container {
  display: flex;
  margin: 20px 0;
  align-items: center;
}

.content {
  background-color: #E3E7FF;
  border-radius: 30px;
  width: 100%;
  padding: 15px;
}
</style>