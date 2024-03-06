# 部署網站

可利用第三方服務部署網站，例如 Netlify, Vercel, AWS Amplify Console, Firebase hosting, GitHub Pages 等等

使用 Vercel 部署的步驟如下：

安裝 Vercel CLI

```bash
npm install -g vercel@latest
```

檢查 npm 全域套件的路徑，還有確定 vercel 已安裝

```bash
npm list -g
C:\Users\user\AppData\Roaming\npm
└── vercel@33.5.3
```

* C:\Users\user\AppData\Roaming\npm：全域套件的路徑
* └── vercel@33.5.3：確定有安裝 vercel

把全域套件的路徑加入環境變數，執行 `vercel --version`，出現 Vercel CLI 33.5.3，表示設定成功了

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

第一次執行 `vercel` 會需要登入，完成登入步驟後會詢問

* 是否要部署當前專案
* 是否要連結現有專案
* 如未連結現有專案，會詢問專案名稱為何
* 專案程式碼在哪個資料夾中

如果有 vercel.json 會自動偵測各項設定並列出，在詢問是否要修改這些設定

部署網站

完成後會列出以下訊息

* 已連結到使用者名稱/專案名稱
* 本次部署的相關資訊: 網址
* 本次部署的上線網站: 網址
* 已部署到哪個環境 (開發、測試、正式等等)
* 如果要修改網址或是輸出指令，可前往專案設定頁面

> 下一個筆記：[開發者帳號](/notes/08-developer-account.md)