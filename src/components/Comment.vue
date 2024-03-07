<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';
import { CommentModel } from "@/models/comment";

defineProps<{ data: CommentModel }>()
</script>

<template>
  <div class="container">
    <div>
      <Avatar size="50px" :avatar-url="data.avatarUrl" style="margin-bottom: 10px;"></Avatar>
      {{ data.userName }}
    </div>
    <div class="content">{{ data.content }}</div>
  </div>
  <div style="display: flex;">
    <div style="width: 100px;"></div>
    <div style="width: 100%;">
      <Comment :data="subData" v-for="subData in data.subComments"></Comment>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin: 20px 0;
}

.content {
  background-color: #E3E7FF;
  border-radius: 30px;
  width: 100%;
  padding: 15px;
}
</style>