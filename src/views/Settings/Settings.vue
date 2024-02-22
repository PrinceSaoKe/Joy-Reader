<script setup lang="ts">
import { login } from "@/api/api.ts";
import { reactive } from 'vue';

const formData = reactive({
  username: '',
  password: '',
  password2: '',
})

const submit = () => {
  if (formData.password != formData.password2) {
    alert('两次密码不一致')
    return
  }
  login(formData.username, formData.password)
}
</script>

<template>
  <div id="main">
    <div id="container">
      <el-row justify="space-evenly" style="width: 100%;">
        <el-col :span="8" class="center"><img src="@/assets/logo.png" width="360px" height="480px"></el-col>
        <el-col :span="8" class="center">
          <el-form label-position="top" style="width: 360px">
            <el-form-item label="修改昵称">
              <el-input v-model="formData.username" />
            </el-form-item>
            <el-form-item label="修改密码">
              <el-input v-model="formData.password" type="password" :show-password="true" />
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="formData.password2" type="password" :show-password="true" />
            </el-form-item>
            <div class="center">
              <el-button @click="submit">确认并保存</el-button>
            </div>
          </el-form></el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
#main {
  display: flex;
  justify-content: center;
}

#container {
  width: 1080px;
  height: 500px;
  display: flex;
  background-color: #C9C3EF;
  padding: 30px;
  border-radius: 30px;
  justify-content: space-around;
}

.center {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
