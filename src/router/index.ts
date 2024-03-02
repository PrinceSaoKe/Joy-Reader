import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', redirect: '/home/hot', component: () => import('@/views/Home/Home.vue'), children: [
      { path: 'hot', component: () => import('@/views/Home/Hot.vue') },
      { path: 'new', component: () => import('@/views/Home/New.vue') },
    ]
  },
  { path: '/edit', component: () => import('@/views/Edit/Edit.vue') },
  { path: '/article/:id', component: () => import('@/views/Article/Article.vue') },
  { path: '/settings', component: () => import('@/views/Settings/Settings.vue') },
  {
    path: '/auth', redirect: '/auth/login', component: () => import('@/views/Auth/Auth.vue'), children: [
      { path: 'login', component: () => import('@/views/Auth/Login.vue') },
      { path: 'register', component: () => import('@/views/Auth/Register.vue') },
    ]
  },
  {
    path: '/my', redirect: '/my/article', component: () => import('@/views/My/My.vue'), children: [
      { path: 'article', component: () => import('@/views/Auth/Login.vue') },
      { path: 'likes', component: () => import('@/views/Auth/Register.vue') },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
