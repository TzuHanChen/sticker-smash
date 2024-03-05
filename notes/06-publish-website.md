# 發布網站

編輯 app.json，調整網站輸出格式

```json
{
  "expo": {
    "web": {
      "output": "single",
      "bundler": "metro"
    }
  }
}
```

output 有三種選項

* single : 預設選項，輸出 SPA，index.html 不會有內容
* server : 建立 client 和 server 資料夾，client 檔案是獨立 html 檔案，server 檔案是獨立 js 檔案、用來部署到自訂 Node.js 伺服器
* static : 為每個路徑輸出獨立 html 檔案

建立靜態打包檔案

```bash
npx expo export -p web
```

產出的檔案會在 dist 資料夾中

啟動本地預覽用伺服器

```bash
# single output
npx serve dist --single

# server output
# 需要自訂伺服器

# static output
npx serve dist
```

部署到第三方服務，可用 Netlify, Vercel, AWS Amplify Console, Firebase hosting, GitHub Pages 等等

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

> 下一個筆記：[發布應用程式](/notes/07-publish-app.md)