<script setup lang="ts">
import { login } from "@/api/api.ts";
import "@/models/base.ts";
import "@/models/user.ts";
import { reactive } from 'vue';

const formData = reactive({
  username: '',
  password: '',
})

const submit = () => {
  login(formData.username, formData.password).then((res) => {
    const baseModel = reactive<BaseModel>({
      code: res.data.base.code,
      message: res.data.base.message,
    })
    if (res.data.data != null) {
      const userData = reactive<UserModel>({
        username: formData.username,
        avatarUrl: res.data.data.avatarUrl,
        token: res.data.data.token,
      })
      console.log(userData)
    }
    alert(baseModel.message)
  })
}
</script>

<template>
  <el-form label-position="top" style="width: 360px">
    <el-form-item label="用户名">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.password" type="password" :show-password="true" />
    </el-form-item>
    <div class="center_btn">
      <el-button @click="submit" color="#AC77E0" :round="true">登录</el-button>
    </div>
  </el-form>
</template>

<style scoped>
.center_btn {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.el-button {
  padding: 10px 50px;
  color: white;
  font-weight: bold;
}
</style>
