<script setup lang="ts">
import { login } from "@/api/api.ts";
import Button from '@/components/Button.vue';
import { LoginModel } from "@/models/login";
import router from '@/router';
import { reactive } from 'vue';

const formData = reactive({
  username: '',
  password: '',
})

const submit = async () => {
  const model: LoginModel = await login(formData.username, formData.password)
  alert(model.base.message)
  if (model.base.code == 200) router.push('/')
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
      <Button :onClick="submit" text="登录"></Button>
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
