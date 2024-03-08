# 輸出網站

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

* single：預設選項，輸出 SPA，index.html 不會有內容
* server：建立 client 和 server 資料夾，client 檔案是獨立 html 檔案，server 檔案是獨立 js 檔案、用來部署到自訂 Node.js 伺服器
* static：為每個路徑輸出獨立 html 檔案

建立靜態打包檔案

```bash
npx expo export --platform web
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

> 下一個筆記：[部署網站](/notes/07-deploy-website.md)