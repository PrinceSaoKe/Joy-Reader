<script setup lang="ts">
defineProps<{ onClick: Function, text: string }>()
</script>

<template>
  <el-button @click="onClick">{{ text }}</el-button>
</template>

<style scoped>
.el-button {
  padding: 10px 50px;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  background-image: linear-gradient(to bottom, #AC77E0, #4E5AA9);
}
</style>