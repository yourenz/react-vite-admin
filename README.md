# react-vite-admin

## 项目来源

目前使用的大多数后台框架封装都集成了很多东西, 上手难度有点高, 所以自己搞了一个纯净版的

感谢 [anncwb](https://github.com/anncwb) 大佬做的 vite 插件, 帮助我解决了很多问题

[vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression)

[vite-plugin-html](https://github.com/anncwb/vite-plugin-html)

[vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import)

[vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons)

## 项目简介

- 使用 vite 构建(支持 typescript 和 sass/scss/less)
- 使用 typescript 编译
- 使用 eslint + prettier 格式代码规范
- 支持 typescript alias
- 支持 hmr
- antd 按需引入样式
- 提供打包代码 gzip 压缩
- svgIcons 支持
- [less 定制主题](https://ant.design/docs/react/customize-theme-cn)
- React 自动注入, 无需导入

## 安装使用

```
# 安装依赖
pnpm install

# 启动项目
pnpm dev

# 打包代码
pnpm build

# 预览打包项目
pnpm serve
```
