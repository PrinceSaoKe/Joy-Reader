<script setup lang="ts">
import router from '@/router';
import { Right, Upload } from '@element-plus/icons-vue';
</script>

<template>
  <div id="nav_bar">
    <p @click="router.push('/')">LOGO</p>
    <div id="actions">
      <el-popover placement="bottom-start" :width="200" trigger="hover">
        <template #reference>
          <div class="action avatar">
            <el-icon color="white">
              <!-- <UserFilled /> -->
              <img src="/avatar.jpg" class="avatar">
            </el-icon>
          </div>
        </template>
        <template #default>
          <div>
            <img src="@/assets/logo.png" width="64px" height="64px">
            <p>用户id</p>
            <el-button type="primary">
              个人中心
              <el-icon>
                <Right />
              </el-icon>
            </el-button>
            <el-button type="primary" @click="router.push('/settings')">
              设置
              <el-icon>
                <Right />
              </el-icon>
            </el-button>
          </div>
        </template>
      </el-popover>
      <el-button class="action" :icon="Upload" @click="router.push('/edit')" color="#E3E7FF">发布文章</el-button>
    </div>
  </div>
</template>

<style scoped>
#nav_bar {
  display: flex;
  justify-content: space-between;
  background-color: #626DB7;
  height: 80%;
  padding: 0 100px;
  align-items: center;
}

#actions {
  display: flex;
  align-items: center;
}

.action {
  margin-left: 30px;
}

p {
  color: white;
  font-weight: bold;
  margin: 0;
}

.avatar {
  background-color: #E3E7FF;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}

#actions .el-button {
  color: #3A4276;
}
</style>
