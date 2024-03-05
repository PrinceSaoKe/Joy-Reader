import { SortType } from "@/constant/enum";
import { BaseModel } from "@/models/base.ts";
import { BlogModel } from "@/models/blog";
import { CommentListModel } from "@/models/comment_list";
import { HomeListModel } from "@/models/home_list";
import { LoginModel } from "@/models/login";
import { MyListModel } from "@/models/my_list";
import { UploadBlogModel } from "@/models/upload_blog";
import { UserModel } from "@/models/user";
import axios from "axios";

const api = axios.create({
  // baseURL: '/127.0.0.1:8080',
  baseURL: '/api',
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
const getUserUrl = '/user/get_user'
const updateAvatarUrl = '/user/update_avatar'
const updateUsernameUrl = '/user/update_name'
const updatePasswordUrl = '/user/update_password'
const uploadBlogUrl = '/article/upload'
const getHomeListUrl = '/article/get_list'
const getBlogUrl = '/article/get_article'
const getUserBlogListUrl = '/user/get_user_article'
const getUserLikesListUrl = '/user/get_user_likes'
const likeBlogUrl = '/article/like'
const commentBlogUrl = '/comment'
const likeCommentUrl = '/comment/like'
const getCommentUrl = '/comment'

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

  if (res.data.data?.token != null) localStorage.setItem('token', res.data.data?.token)
  setToken()
  await getUser().then(() => location.reload())

  return model
}

/// 查询用户信息
export const getUser = async (): Promise<UserModel> => {
  const res = await api.get(getUserUrl)
  const model: UserModel = new UserModel(res.data)

  // 将用户信息存储到本地
  localStorage.setItem('userId', model.data.userId)
  localStorage.setItem('username', model.data.username)
  localStorage.setItem('avatarUrl', model.data.avatarUrl)

  console.log('----- 查询用户信息响应 -----', model)
  return model
}

/// 修改用户名
export const updateUsername = async (newUsername: string): Promise<BaseModel> => {
  const res = await api.putForm(updateUsernameUrl, { 'newName': newUsername })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 修改用户名响应 -----', model)

  await getUser().then(() => location.reload())

  return model
}

/// 修改密码
export const updatePassword = async (newPassword: string): Promise<BaseModel> => {
  const res = await api.putForm(updatePasswordUrl, { 'newPassword': newPassword })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 修改密码响应 -----', model)

  await getUser().then(() => location.reload())

  return model
}

/// 修改头像
export const updateAvatar = async (file: File): Promise<BaseModel> => {
  const res = await api.postForm(updateAvatarUrl, { 'file': file })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 上传头像响应 -----', model)

  await getUser().then(() => location.reload())

  return model
}

/// 发布文章
export const uploadBlog = async (title: string, desc: string, content: string): Promise<UploadBlogModel> => {
  const res = await api.postForm(uploadBlogUrl, { 'title': title, 'desc': desc, 'content': content })
  const model: UploadBlogModel = new UploadBlogModel(res.data)
  console.log('----- 发布文章响应 -----', model)
  return model
}

/// 查询首页文章列表
export const getHomeList = async (page: number, sort: SortType): Promise<HomeListModel> => {
  const params = { 'page': page, 'sort': sort }
  const res = await api.get(getHomeListUrl, { params })
  const model: HomeListModel = new HomeListModel(res.data)
  console.log('----- 查询文章列表响应 -----', res)
  return model
}

/// 查询文章详情
export const getBlog = async (articleId: string): Promise<BlogModel> => {
  const params = { 'articleId': articleId }
  const res = await api.get(getBlogUrl, { params })
  const model: BlogModel = new BlogModel(res.data.data)
  console.log('----- 查询文章详情响应 -----', model)
  return model
}

/// 查询用户发布的文章列表
export const getUserBlogList = async (): Promise<MyListModel> => {
  const res = await api.get(getUserBlogListUrl)
  const model: MyListModel = new MyListModel(res.data)
  console.log('----- 查询用户发布的文章列表详情响应 -----', model)
  return model
}

/// 查询用户点赞的文章列表（WIP）
export const getUserLikesList = async (): Promise<MyListModel> => {
  const res = await api.get(getUserLikesListUrl)
  const model: MyListModel = new MyListModel(res.data)
  console.log('----- 查询用户点赞的文章列表详情响应 -----', model)
  return model
}

/// 点赞文章
export const likeBlog = async (blogId: string): Promise<BaseModel> => {
  const res = await api.postForm(likeBlogUrl, { 'articleId': blogId })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 点赞文章响应 -----', model)
  return model
}

/// 评论文章
export const commentBlog = async (fatherId: string, content: string, level: number): Promise<BaseModel> => {
  const res = await api.postForm(commentBlogUrl, { 'fatherId': fatherId, 'content': content, level: level })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 评论响应 -----', model)
  return model
}

/// 点赞评论
export const likeComment = async (commentId: string): Promise<BaseModel> => {
  const res = await api.postForm(likeCommentUrl, { 'commentId': commentId })
  const model: BaseModel = new BaseModel(res.data)
  console.log('----- 点赞评论响应 -----', model)
  return model
}

/// 查询评论
export const getComment = async (articleId: string): Promise<CommentListModel> => {
  const params = { 'articleId': articleId }
  const res = await api.get(getCommentUrl, { params })
  const model: CommentListModel = new CommentListModel(res.data)
  console.log('----- 查询评论响应 -----', model)
  return model
}
