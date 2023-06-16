# 安装步骤
1  yarn create @vitejs/app my-vue-app-ts --template vue-ts
2  yarn add vue-router@4
3 yarn add vant@3

配置vite-plugin-style-import ,在vite.config.ts中引入并添加

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ]
})

```
4 yarn add amfe-flexible
配置amfe-flexible,在跟目录的index.html入口文件中添加
```
 <meta name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <script src="./node_modules/amfe-flexible/index.js"></script>
```
5 yarn add postcss postcss-pxtorem -D
配置postcss-pxtorem,在跟目录新建postcss.config.js文件
```
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```