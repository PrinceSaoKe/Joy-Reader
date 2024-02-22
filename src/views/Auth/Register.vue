<script setup lang="ts">
import { reactive } from 'vue';
import { register } from "@/api/api.ts";
import "@/models/base.ts";

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
  register(formData.username, formData.password).then((res) => {
    const baseModel = reactive<BaseModel>({
      code: res.data.base.code,
      message: res.data.base.message,
    })
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
    <el-form-item label="确认密码">
      <el-input v-model="formData.password2" type="password" :show-password="true" />
    </el-form-item>
    <el-button @click="submit">登录</el-button>
  </el-form>
</template>
