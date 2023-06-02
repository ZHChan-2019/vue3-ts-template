import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Element Plus 提供了全局配置国际化的配置
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//svg 入口文件导入
import 'virtual:svg-icons-register'

// 通过app.use方法安装自定义插件
import gloablComponent from '@/index.ts'

// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(gloablComponent)

//引入模板的全局样式
import '@/styles/index.scss'

// 将应用挂载到挂载点上
app.mount('#app')
