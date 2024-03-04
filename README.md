# 照片裝飾 StickerSmash

> 本專案是跟著 [Expo 官方教學](https://docs.expo.dev/tutorial/introduction/)逐步實作後，再調整一些樣式和功能，最後產出靜態檔案並部署

## 環境準備

電腦：

* 必要：Node.js 長期支援版本、Git
* 推薦：Yarn, Visual Studio Code, Expo Tools 延伸模組

手機：Expo Go 應用程式

## 指令

```bash
# 建立名為 my-app 的專案
npx create-expo-app my-app

# 列出範例專案的清單
npx create-expo-app --template
```

```bash
# 安裝網站所需套件
npx expo install react-dom react-native-web @expo/metro-runtime
```

```bash
# 啟動開發用伺服器
npx expo start

# 列出 Expo CLI 的可用指令清單
npx expo --help
```

## 打開應用程式

啟動開發用伺服器之後

* 在終端機按下 w 鍵，可以打開本地網站

* 如果有 Android 手機，打開 Expo Go，掃描終端機的 QRCode，可以開啟應用程式
* 如果有 iOS 手機，打開相機，掃描終端機的 QRCode，可以開啟應用程式

* 如果有 Android 模擬器，在終端機按下 a 鍵，可以在 Android 模擬器中開啟應用程式
* 如果有 iOS 模擬器，在終端機按下 i 鍵，可以在 iOS 模擬器中開啟應用程式

* Android Studio 有 Android 模擬器
* XCode 有 iOS 模擬器

## 官方教學的實作項目

### 介紹 Introduction

說明這個專案會有哪些內容，可以在實作過程中學到 Expo 的基礎

完成的應用程式可以選擇照片、新增貼紙、保存整個畫面到裝置中

### 創造第一個應用程式 Create your first app

建立專案，下載圖片素材，安裝網站所需套件

啟動開發用伺服器，在電腦上開啟網站，在 Android 手機上開啟應用程式

### 建立一個螢幕畫面 Build a screen

用 StyleSheet, View, Image, Pressable, Text 建立一個畫面，再加入圖示

### 使用圖片選擇器 Use an image picker

用 expo-image-picker 存取裝置的媒體庫

使用者有兩個按鈕可以按，一個是選擇自己的圖片，另一個是選擇預設圖片

如果使用者取消選取圖片，則顯示未選取通知

### 創造一個彈出視窗 Create a modal

使用者選好圖片之後，兩個按鈕換成三個按鈕，分別是重置、新增貼紙、保存

用 Modal 製作一個彈出視窗，按下新增貼紙按鈕就會開啟這個彈出視窗，按下關閉按鈕就關閉

在彈出視窗中，用 FlatList 列出所有貼紙，使用者選擇貼紙後，圖片上面就會有貼紙

### 增加手勢 Add gestures

用 react-native-gesture-handler 偵測手勢、用 react-native-reanimated 改變貼紙的尺寸和位置

使用者點擊貼紙兩次就會放大，拖曳貼紙就可以移動

### 截圖 Take a screenshot

用 react-native-view-sho 截圖，用 expo-media-library 存取行動裝置的媒體庫

先取得存取媒體庫的許可，再設定要截圖的區塊 (圖片和貼紙的上層 View)

使用者按下保存按鈕之後，截圖、保存到媒體庫、顯示成功通知

### 處理平台差異 Handle platform differences

用 Platform 偵測平台，如果是 web 就用 dom-to-image 截圖、用 `<a>` 下載圖片

### 調整狀態列、載入畫面、應用程式圖示 Configure status bar, splash screen and app icon

因為應用程式的背景色是深色，狀態列改成淺色

設定載入畫面的圖片和背景顏色，再設定應用程式圖示的圖片

### 繼續學習 Learn more

參考資料總整理：

* [React](https://react.dev/learn), [React Native](https://reactnative.dev/), [Expo](https://expo.dev/)
* [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/), [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
* [React Native Directory](https://reactnative.directory/), [React Native Express](https://www.reactnative.express/)

## 自己調整過的部分

所有英文字串都加上中文

圖片和按鈕區域

* 原本：螢幕高度少於 600px 時會重疊
* 現在：從上到下排列、超過螢幕高度時可以上下捲動

按下重置按鈕

* 原本：顯示選擇圖片的按鈕
* 現在：也會切換回預設圖片、清除目前的貼紙

點擊貼紙兩次

* 原本：可以放大
* 現在：再點擊貼紙兩次可以縮小

選擇貼紙後，顯示提示訊息＂拖曳貼紙可移動，點擊貼紙兩次可縮放＂

選擇圖片按鈕區域和功能按鈕區域，高度改成一樣的

新增顏色再引用到各元件中

```js
export default {
    "dark-gray": "#25292E",
    "light-gray": "#464C55",
    "white": "#FFF",
    "yellow": "#ffd33D"
}
```

用 state 紀錄按下與放開按鈕的 id，切換按鈕的背景色

移除手機上不支援的 `<br />`

## 發布網站

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

部署到第三方服務，可用 Netlify, Vercel, AWS Amplify Console, Firebase hosting, GitHub Pages

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

## 發布應用程式