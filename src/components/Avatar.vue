<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{ size: string }>()

const avatarUrlRef = ref()

onMounted(() => {
  avatarUrlRef.value = localStorage.getItem('avatarUrl')
})
</script>

<template>
  <div class="avatar">
    <el-icon color="white">
      <!-- <UserFilled /> -->
      <img :src="avatarUrlRef" class="avatar" style="object-fit: cover;">
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