import { BaseModel } from "@/models/base.ts";
import { LoginModel } from "@/models/login";
import axios from "axios";

const api = axios.create({
  baseURL: '/api',
  // baseURL: 'http://127.0.0.1:8080',
  // baseURL: 'http://47.113.231.146:8080',
  // baseURL: 'http://127.0.0.1:4523/m1/4033216-0-default',
  timeout: 5000,  // 设置超时时间
})

/// 设置Token
export const setToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return
  if (token == api.defaults.headers.common['Authorization']) return
  api.defaults.headers.common['Authorization'] = token
  console.log('----- Token已更新 -----')
}

setToken()

const registerUrl = '/user/register'
const loginUrl = '/user/login'
const updateAvatarUrl = '/user/update_avatar'
const updateUsernameUrl = '/user/update_name'
const updatePasswordUrl = '/user/update_password'

/// 注册
export const register = async (username: string, password: string): Promise<BaseModel> => {
  const res = await api.postForm(registerUrl, { 'username': username, 'password': password })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 注册响应 -----', model)
  return model
}

/// 登录
export const login = async (username: string, password: string): Promise<LoginModel> => {
  const res = await api.postForm(loginUrl, { 'username': username, 'password': password })
  const model: LoginModel = new LoginModel(res.data)
  console.log('----- 登录响应 -----', model)

  if (model.data.username != null) localStorage.setItem('username', model.data.username)
  if (res.data.data?.token != null) localStorage.setItem('token', res.data.data?.token)
  setToken()

  return model
}

/// 修改用户名
export const updateUsername = async (newUsername: string): Promise<BaseModel> => {
  const res = await api.putForm(updateUsernameUrl, { 'newName': newUsername })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 修改用户名响应 -----', model)
  return model
}

/// 修改头像
export const updateAvatar = async (file: File) => {
  const res = api.postForm(updateAvatarUrl, { 'file': file })
  console.log('----- 上传头像响应 -----')
  console.log(res)
  return res
}

// /// 查询待办
// export const readTodo = async (userId, readFinished = false) => {
//   const res = api.get(readTodoUrl, { 'userId': userId, 'status': readFinished ? 1 : 0 })
//   console.log('----- 查询响应 -----')
//   console.log(res)
//   return res
// }

// /// 修改待办
// export const updateTodo = async (todoId, userId, finished = true) => {
//   const res = api.put(updateTodoUrl + '/' + todoId, { 'userId': userId, 'status': finished ? 1 : 0 })
//   console.log('----- 修改响应 -----')
//   console.log(res)
//   return res
// }

// /// 删除待办
// export const deleteTodo = async (todoId, userId) => {
//   const res = api.put(deleteTodoUrl + '/' + todoId, { 'userId': userId })
//   console.log('----- 删除响应 -----')
//   console.log(res)
//   return res
// }
