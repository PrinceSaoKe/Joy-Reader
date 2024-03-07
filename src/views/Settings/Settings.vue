<script setup lang="ts">
import { updateAvatar, updatePassword, updateUsername } from "@/api/api.ts";
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import router from "@/router";
import { reactive } from 'vue';

const formData = reactive({
  username: '',
  password: '',
  password2: '',
})

const submit = async () => {
  if (formData.username != '') {
    const model = await updateUsername(formData.username)
    alert(model.message)
  }
  if (formData.password != '' || formData.password2 != '') {
    if (formData.password != formData.password2) {
      alert('两次密码不一致')
      return
    }
    const model = await updatePassword(formData.password)
    alert(model.message)
    if (model.code == 0) router.push('/auth')
  }
}

const submitAvatar = async () => {
  const fileInput = document.querySelector('#avatarInput') as HTMLInputElement
  console.log(fileInput?.files![0])
  const model = await updateAvatar(fileInput?.files![0])
  alert(model.message)
}
</script>

<template>
  <div id="container">
    <div>
      <Avatar size="360px"></Avatar>
      <div class="center">
        <div id="avatar_btn"><input type="file" id="avatarInput" @change="submitAvatar">更换<br>头像</div>
      </div>
    </div>
    <div id="divider"></div>
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
        <Button :onClick="submit" text="确认并保存"></Button>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
#container {
  width: 1080px;
  height: 600px;
  display: flex;
  background-color: #C9C3EF;
  border-radius: 30px;
  justify-content: space-evenly;
  align-items: center;
}

.center {
  align-items: center;
  display: flex;
  justify-content: center;
}

#divider {
  background-color: #626DB7;
  width: 2px;
  height: 500px;
}

.el-button {
  padding: 10px 50px;
  color: white;
  font-weight: bold;
}

#avatar_btn {
  background-image: linear-gradient(to bottom, #AC77E0, #4E5AA9);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

input {
  position: absolute;
  width: 80px;
  height: 80px;
  outline: none;
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  border-radius: 50%;
}
</style>
