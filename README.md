# 悦读 / Joy Reader

西二在线第四轮考核项目

## 遇到的问题

- 页面初始化要执行的逻辑放在onMounted和直接放在`<script>`里有什么区别
- markdown渲染代码块不换行，无高亮
- 自己封装的组件无法显示innerText，无法使用@click

## 亮点

- 完全使用TypeScript
- 用class结合interface、enum定义数据模型
- 简单封装了接口
- 使用正则表达式剔除文章中的markdown语法生成文章简介，剔除html标签如`<script>`防止XSS攻击
- 使用拦截器实现Token过期跳转登录页面

## 预览

!(主页)[./preview/home.png]
!(登录)[./preview/auth.png]
!(编辑)[./preview/edit.png]
!(个人中心)[./preview/my.png]
!(设置)[./preview/settings.png]