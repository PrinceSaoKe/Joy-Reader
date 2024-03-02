<script setup lang="ts">
defineProps<{ size: string }>()
</script>

<template>
  <div class="avatar">
    <el-icon color="white">
      <!-- <UserFilled /> -->
      <img src="/avatar.jpg" class="avatar">
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