# 快速开始

## 环境要求

- **Node.js** >= 18.0.0
- **npm** / **pnpm** / **yarn** 任一包管理器

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

浏览器打开 `http://localhost:5173` 即可预览。

## 项目结构

```
my-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts    # 站点配置
│   ├── guide/            # 指南文档
│   │   ├── getting-started.md
│   │   └── deployment.md
│   └── index.md          # 首页
├── package.json
└── README.md
```

## 添加新页面

在 `docs/` 下新建 `.md` 文件，然后在 `config.mts` 的 `sidebar` 中注册即可：

```md
<!-- docs/guide/new-page.md -->
# 新页面

这是我的新页面内容。
```

```ts
// docs/.vitepress/config.mts
sidebar: {
  '/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '介绍', link: '/guide/getting-started' },
        { text: '新页面', link: '/guide/new-page' },  // ← 新增
        { text: '部署到 Cloudflare', link: '/guide/deployment' },
      ]
    }
  ]
}
```
