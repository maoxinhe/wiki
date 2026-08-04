# 部署到 Cloudflare Pages

只需 5 分钟，将你的 VitePress 文档站部署到 Cloudflare Pages。

## 方式一：Git 集成（推荐）

### 1. 推送到 GitHub

```bash
git init
git add .
git commit -m "init docs"
git remote add origin https://github.com/你的用户名/my-docs.git
git push -u origin main
```

### 2. 在 Cloudflare 中连接仓库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** → **Create application** → **Pages**
3. 点击 **Connect to Git**
4. 选择你的 `my-docs` 仓库

### 3. 填写构建设置

| 配置项 | 填写值 |
|--------|--------|
| **Framework preset** | `VitePress` |
| **Build command** | `npm run docs:build` |
| **Build output directory** | `docs/.vitepress/dist` |
| **Node version** | `22` |
| **Root directory** | `/` |

### 4. 点击 Deploy 🎉

之后每次 `git push` 到 `main` 分支，都会**自动构建并部署**。

---

## 方式二：Wrangler CLI 手动部署

适合不想绑定 Git 的场景。

```bash
# 安装依赖
npm install

# 登录 Cloudflare
npx wrangler login

# 构建
npm run docs:build

# 部署
npx wrangler pages deploy docs/.vitepress/dist --project-name my-docs
```

---

## 常见问题

### 构建失败：找不到模块

✅ 检查 `package.json` 中是否包含 `vitepress` 依赖  
✅ 确认 Node 版本 >= 18

### 页面 404

✅ 检查 `Build output directory` 是否填的是 `docs/.vitepress/dist`  
✅ 确认构建命令执行成功，没有报错

### 自定义域名

在 Cloudflare Pages 项目设置中添加自定义域名即可，免费支持 HTTPS。
