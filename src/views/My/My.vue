<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-menu></el-menu>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  margin: 0 50px 20px 50px;
}

.el-header {
  border-radius: 30px 30px 0 0;
  background-color: #626DB7;
}

.el-main {
  border-radius: 0 0 30px 30px;
  background-image: linear-gradient(to right, #E3E7FF, #D4C3F7);
}
</style>