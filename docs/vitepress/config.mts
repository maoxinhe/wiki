import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'maoxinhe 的 Wiki',
  description: '个人知识库',
  lang: 'zh-CN',

  // 关闭 VitePress 默认主题里的无用东西
  lastUpdated: false,
  cleanUrls: true,

  themeConfig: {
    logo: '', // 有图再填
    siteTitle: 'maoxinhe',

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '文章',
          items: []
        }
      ]
    },

    footer: {
      message: 'Released under MIT License.',
      copyright: '© 2026 maoxinhe'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maoxinhe' }
    ]
  }
})
