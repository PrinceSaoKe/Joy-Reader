import axios from "axios";

export const api = axios.create({
  baseURL: '/api',
  // baseURL: 'http://4bg8a4.natappfree.cc',
  // baseURL: 'http://127.0.0.1:8080',
  // baseURL: 'http://47.113.231.146:8080',
  // baseURL: 'http://127.0.0.1:4523/m1/4033216-0-default',
  timeout: 5000,  // 设置超时时间
})

const registerUrl = '/user/register'
const loginUrl = '/user/login'

/// 注册
export const register = async (username: string, password: string) => {
  const res = api.postForm(registerUrl, { 'username': username, 'password': password })
  console.log('----- 注册响应 -----')
  console.log(res)
  return res
}

/// 登录
export const login = async (username: string, password: string) => {
  const res = api.postForm(loginUrl, { 'username': username, 'password': password })
  console.log('----- 登录响应 -----')
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
