<script setup lang="ts">
defineProps<{ size: number }>()
</script>

<template>
  <div class="avatar">
    <el-icon color="white" :size="size">
      <!-- <UserFilled /> -->
      <img src="/avatar.jpg" class="avatar">
    </el-icon>
  </div>
</template>

<style scoped>
.avatar {
  background-color: #E3E7FF;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>