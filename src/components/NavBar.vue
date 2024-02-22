<script setup lang="ts">
import router from '@/router';
import { Right, UserFilled } from '@element-plus/icons-vue';

const toSettings = () => {
  router.push('/settings')
}
</script>

<template>
  <div id="nav_bar">
    <p>LOGO</p>
    <div id="actions">
      <el-popover placement="bottom-start" :width="200" trigger="hover">
        <template #reference>
          <el-icon color="white" class="action"><UserFilled /></el-icon>
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
            <el-button type="primary" @click="toSettings">
              设置
              <el-icon>
                <Right />
              </el-icon>
            </el-button>
          </div>
        </template>
      </el-popover>
      <div class="action">发布文章</div>
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
}

.action {
  margin-left: 30px;
}

p {
  color: white;
  font-weight: bold;
  margin: 0;
}
</style>
