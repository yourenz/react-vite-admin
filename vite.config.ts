import reactRefresh from '@vitejs/plugin-react-refresh'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import path from 'path'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { injectHtml, minifyHtml } from 'vite-plugin-html'
import styleImport from 'vite-plugin-style-import'
import viteSvgIcons from 'vite-plugin-svg-icons'

import { basename } from './src/utils/config'

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/style/antd-variables.less'), 'utf8'))

export default defineConfig({
  base: `/${basename}/`,
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `../antd/es/${name}/style/index`
          },
        },
      ],
    }),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: basename,
      },
    }),
    // gizp
    viteCompression(),
    // br
    viteCompression({
      ext: '.br',
      algorithm: 'brotliCompress',
    }),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
