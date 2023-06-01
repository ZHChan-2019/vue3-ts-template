'feat',//新特性、新功能
'fix',//修改 bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动

# 提交 demo

`git commit -m 'feat: addSomething'`

# 新建 release 分支

`git checkout -b release`

# 安装 element plus

`pnpm i element-plus`

# element-plus 国际化

安装上 element-plus 国际化后发现打包不了，是因为 ts 不能识别这个文件`element-plus/dist/locale/zh-cn.mjs`
所以需要加上忽略类型的检测

```typescript
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
```

# 环境变量的配置

chore: 环境变量的配置
