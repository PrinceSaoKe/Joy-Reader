import Icon from '@/components/Icon.vue'
import ElementPlus from 'element-plus'
import { zhCn } from 'element-plus/es/locales.mjs'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.component('Icon', Icon)
app.mount('#app')
