<script setup lang="ts">
</script>

<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" default-active="/home/hot" background-color="#626DB7" :ellipsis="false" :router="true">
        <el-menu-item index="/home/hot">热榜</el-menu-item>
        <el-menu-item index="/home/new">最新</el-menu-item>
      </el-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-header>
  </el-container>
</template>

<style scoped>
.el-container {
  margin: 0 50px 0 50px;
}
</style>
