import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "maoxinhe 的 Wiki",
  description: "个人知识库 / 技术笔记",
  lang: "zh-CN",

  lastUpdated: false,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: []
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maoxinhe' }
    ],

    footer: {
      message: '基于 mzy 构建',
      copyright: 'Copyright © 2026 maoxinhe'
    },

    search: {
      provider: 'local'
    }
  }
})
