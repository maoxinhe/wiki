import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的文档站",
  description: "基于 VitePress + Cloudflare Pages 搭建的文档站",
  lang: "zh-CN",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '介绍', link: '/guide/getting-started' },
            { text: '部署到 Cloudflare', link: '/guide/deployment' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maoxinhe' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 maoxinhe'
    },

    search: {
      provider: 'local'
    }
  }
})
