# 照片裝飾 StickerSmash

> 本專案是跟著 Expo 官方教學逐步實作後，再調整一些樣式和功能，最後產出靜態檔案並部署

參考資料：[Expo Documentation](https://docs.expo.dev/)

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
npx expo

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

### 創造第一個應用程式 Create your first app

建立專案，下載圖片素材，安裝網站所需套件

啟動開發用伺服器，在電腦上開啟網站，在 Android 手機上開啟應用程式

### 建立一個螢幕畫面 Build a screen

用 React Native 的 StyleSheet, View, Image, Pressable, Text 建立一個畫面，再加入圖示

### 使用圖片選擇器 Use an image picker

## 自己調整過的部分

## 檔案結構、設定檔