<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';
import AvatarPopover from '@/components/AvatarPopover.vue';
import router from '@/router';
import { Upload } from '@element-plus/icons-vue';
</script>

<template>
  <div id="nav_bar">
    <img src="/logo.png" width="86.16px" height="44.4px" @click="router.push('/')" />
    <div id="actions">
      <el-popover placement="bottom-start" :width="200" trigger="hover">
        <template #reference>
          <Avatar size="30px"></Avatar>
        </template>
        <template #default>
          <AvatarPopover></AvatarPopover>
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
  height: 100%;
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

#actions .el-button {
  color: #3A4276;
}
</style>
