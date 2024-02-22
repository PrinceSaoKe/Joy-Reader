import ElementPlus from 'element-plus'
import { zhCn } from 'element-plus/es/locales.mjs'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
