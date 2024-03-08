<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';
import router from '@/router';
import { Right } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';

const usernameRef = ref()

onMounted(() => {
  usernameRef.value = localStorage.getItem('username')
})
</script>

<template>
  <div id="popover">
    <Avatar size="70px" style="margin: 0 auto;"></Avatar>
    <p>{{ usernameRef }}</p>
    <el-button @click="router.push('/my')">
      个人中心
      <el-icon>
        <Right />
      </el-icon>
    </el-button>
    <div style="height: 10px;"></div>
    <el-button @click="router.push('/auth')">
      切换账号
      <el-icon>
        <Right />
      </el-icon>
    </el-button>
    <div style="height: 10px;"></div>
    <el-button @click="router.push('/settings')">
      设置
      <el-icon>
        <Right />
      </el-icon>
    </el-button>
  </div>
</template>

<style scoped>
#popover {
  text-align: center;
  padding: 12px;
}

p {
  color: #3A4276;
  font-size: 20px;
  margin: 10px 0;
}

.el-button {
  width: 150px;
  margin: 0 auto;
}
</style>
