<script setup lang="ts">
</script>

<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" default-active="/home/hot" background-color="#626DB7" :ellipsis="false" :router="true"
        active-text-color="#E3E7FF" text-color="#A3AAD6">
        <div style="width: 30px;"></div>
        <el-menu-item index="/home/hot">热榜</el-menu-item>
        <el-menu-item index="/home/new">最新</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  margin: 0 50px 0 50px;
  background-color: #C9C3EF;
  border-radius: 20px 20px 0 0;
}

.el-header {
  padding: 0;
}

.el-menu {
  border-radius: 20px 20px 0 0;
}

.el-menu-item {
  font-size: 20px;
}

.el-main{
  padding: 10px 20px;
}
</style>
