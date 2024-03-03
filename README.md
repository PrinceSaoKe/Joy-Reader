# 悦读 / Joy Reader

西二在线第四轮考核项目

## 遇到的问题

- 拿到的Token应该存储在哪里
- 页面初始化要执行的逻辑放在onMounted和直接放在`<script>`里有什么区别
- √ 静态文件如logo等应该存放在public文件夹里还是`src/assets/`里，有什么区别
- element-plus的popover如何改变小三角尖的背景色

## 亮点

- 完全使用TypeScript
- 用class结合interface、enum定义数据模型
- 简单封装了接口
- 使用正则表达式剔除文章中的markdown语法生成文章简介，剔除html标签如`<script>`防止XSS攻击
