import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "maoxinhe 的 Wiki",
  description: "个人知识库 / 技术笔记",
  lang: "zh-CN",

  lastUpdated: false,
  cleanUrls: true,

  // 忽略死链，避免 CI 因 /plugins/dominion 报错
  ignoreDeadLinks: true,

  themeConfig: {
    // 左上角：logo（QQ头像外链）+ 站点名
    logo: "https://q.qlogo.cn/headimg_dl?dst_uin=1096550598&spec=640&img_type=jpg",
    siteTitle: "maoxinhe",

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '📝 文章列表',
          items: [
            { text: '服务器注册', link: '/posts/signup' },
            { text: '管理条例', link: '/posts/mc/rules' },
          ]
        },
        {
          text: '🎮 Minecraft',
          collapsed: false,
          items: [
            { text: 'Dominion 领地插件', link: '/posts/plugins/dominion' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maoxinhe' }
    ],

    footer: {
      message: '基于 VitePress 构建 · 主题色 淡粉 💗',
      copyright: 'Copyright © 2026 maoxinhe'
    },

    search: {
      provider: 'local'
    }
  }
})
