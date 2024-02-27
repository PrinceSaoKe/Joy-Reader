<script setup lang="ts">
import { register } from "@/api/api.ts";
import Button from '@/components/Button.vue';
import { BaseModel } from "@/models/base.ts";
import { reactive } from 'vue';

const formData = reactive({
  username: '',
  password: '',
  password2: '',
})

const submit = async () => {
  if (formData.password != formData.password2) {
    alert('两次密码不一致')
    return
  }
  const model: BaseModel = await register(formData.username, formData.password)
  alert(model.message)
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
    <div class="center_btn">
      <Button :onClick="submit" text="注册"></Button>
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
</style>
