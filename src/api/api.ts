import { SortType } from "@/constant/enum";
import { BaseModel } from "@/models/base.ts";
import { HomeListModel } from "@/models/home_list";
import { LoginModel } from "@/models/login";
import { UploadBlogModel } from "@/models/upload_blog";
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
const uploadBlogUrl = '/article/upload'
const getHomeListUrl = '/article/get_list'

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

/// 修改密码
export const updatePassword = async (newPassword: string): Promise<BaseModel> => {
  const res = await api.putForm(updatePasswordUrl, { 'newPassword': newPassword })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 修改密码响应 -----', model)
  return model
}

/// 修改头像(WIP)
export const updateAvatar = async (file: File) => {
  const res = api.postForm(updateAvatarUrl, { 'file': file })
  console.log('----- 上传头像响应 -----')
  console.log(res)
  return res
}

/// 发布文章
export const uploadBlog = async (title: string, desc: string, content: string): Promise<UploadBlogModel> => {
  const res = await api.postForm(uploadBlogUrl, { 'title': title, 'desc': desc, 'content': content })
  const model: UploadBlogModel = new UploadBlogModel(res.data)
  console.log('----- 发布文章响应 -----', model)
  return model
}

/// 查询文章列表
export const getHomeList = async (page: number, sort: SortType): Promise<HomeListModel> => {
  const params = { 'page': page, 'sort': sort }
  const res = await api.get(getHomeListUrl, { params })
  const model: HomeListModel = new HomeListModel(res.data)
  console.log('----- 查询文章列表响应 -----', model)
  return model
}

// /// 修改待办
// export const updateTodo = async (todoId, userId, finished = true) => {
//   const res = api.put(updateTodoUrl + '/' + todoId, { 'userId': userId, 'status': finished ? 1 : 0 })
//   console.log('----- 修改响应 -----')
//   console.log(res)
//   return res
// }
