<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{ size: string, avatarUrl?: string }>()

const avatarUrlRef = ref()

onMounted(() => {
  avatarUrlRef.value = localStorage.getItem('avatarUrl') ?? 'http://west2-work4-pany0593.oss-cn-shenzhen.aliyuncs.com/avatar/default-avatar.png'
})
</script>

<template>
  <div class="avatar">
    <el-icon color="white">
      <img :src="avatarUrl ?? avatarUrlRef" class="avatar" style="object-fit: cover;">
    </el-icon>
  </div>
</template>

<style scoped>
.avatar {
  background-color: #E3E7FF;
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>