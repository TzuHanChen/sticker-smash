# 部署網站

可利用第三方服務部署網站，例如 Netlify, Vercel, AWS Amplify Console, Firebase hosting, GitHub Pages 等等

使用 Vercel 部署的步驟如下：

安裝 Vercel CLI

```bash
npm install -g vercel@latest
```

新增 vercel.json，處理 SPA 的重新導向設定

```json
{
  "buildCommand": "expo export -p web",
  "outputDirectory": "dist",
  "devCommand": "expo",
  "cleanUrls": true,
  "framework": null,
  "rewrites": [
    {
      "source": "/:path*",
      "destination": "/"
    }
  ]
}
```

部署網站

```bash
vercel
```

> 下一個筆記：[輸出開發版應用程式](/notes/08-development-build.md)