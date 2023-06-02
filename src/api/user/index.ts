//统一管理我们项目用户相关接口

import request from '@/utils/request'

// 统一管理接口

enum API {
  TEST = '/hello',
}

// 对外暴露请求函数
export const test = () => request.get(API.TEST)
