//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouter } from "./routes";

// 创建路由器
let router = createRouter({
  history: createWebHashHistory(),
  // 路由模式hash
  routes: constantRouter,
  //滚动行为
  scrollBehavior (to, from, savedPosition) {
    return {
        top:0,
        left:0
    }
  }
})

export default router
