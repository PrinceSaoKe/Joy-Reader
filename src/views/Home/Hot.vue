<script setup lang="ts">
import { ref } from "vue";

const dataListRef = ref(['Android教程', 'Vue3教程'])
</script>

<template>
  <div>
    <el-card v-for="data in dataListRef">{{ data }}</el-card>
  </div>
</template>

<style scoped>
.el-card {
  margin: 10px 0 10px 0;
  background-color: #E3E7FF;
}
</style>
