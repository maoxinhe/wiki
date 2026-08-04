# 我的文档站

基于 [VitePress](https://vitepress.dev/) + [Cloudflare Pages](https://pages.cloudflare.com/) 搭建的文档站点。

## 快速开始

```bash
npm install
npm run docs:dev
```

## 部署

推送到 GitHub 后，在 Cloudflare Pages 中连接仓库，构建设置：

- **Build command**: `npm run docs:build`
- **Build output directory**: `docs/.vitepress/dist`
- **Node version**: `22`

详见 `docs/guide/deployment.md`。
