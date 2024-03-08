# 關鍵概念

Expo

> 一個開源專案，提供開發者各種建立與維護 React Native 應用程式的工具。所有 Expo 開源工具都是免費使用，並採用 MIT License。

Expo app

> 簡稱有用到任何 Expo 工具的 React Native 應用程式

Expo Application Services (EAS)

> 一套代管服務，可和 Expo 與 React Native 專案一起使用，輸出、上架、更新應用程式，流程自動化，團隊合作等等。收費方案有免費、計量付費、訂閱制。

如果使用 Expo 開源工具，是否有必要使用 EAS ?

> 不必，Expo 專案本質上只是一個 React Native 應用程式，也可以用 Fastlane 或其他工具去輸出和更新。大部分 EAS 服務也可以在自己的基礎建設中執行。使用 EAS 服務可節省準備基礎建設的時間和資源，而且 EAS 有提供各項服務之間的整合。

Expo Go

> 一個手機應用程式，免費、開源的沙盒環境，可在 Android 和 iOS 的實體裝置或模擬器上執行，用於學習與實驗 React Native 專案開發，即時預覽執行結果。

Snack

> 一個網頁版 IDE，可以管理檔案、撰寫程式碼、即時預覽執行結果。

> Expo Go 和 Snack 並不是用於開發正式版應用程式，它們適合用於開始一個專案或是打造原型。

Development build (開發版建置)

> 應用程式的除錯版本，包含 `expo-dev-client` 函式庫。協助開發者快速迭代，提供比 Expo Go 更有彈性、更可靠、更完整的開發環境。可安裝任何原生函式庫、調整原生專案的設定。可以用本地或 EAS Build 雲端產生開發版建置。

Android 和 iOS 原生專案

> 行動平台的 React Native 應用程式包含兩個互相連結的部分
>
> > JavaScript：包含 React 元件，也就是應用程式的運作邏輯
>
> > 原生專案：Android 和 Xcode 專案，捆綁 JavaScript，渲染原生元件，提供存取特定平台功能的方法，整合已安裝的原生函式庫。應用程式設定，包括名稱、圖示、所需權限、相關網域、有支援的螢幕方向等等，是在原生專案中設定。

> 用 `npx create-expo-app` 初始化應用程式的時候，不會有 android 或 ios 資料夾。可以用 `npx expo prebuild` 初始化原生專案，並套用 Expo 應用程式設定 (app.json/app.config.js)。如果採用雲端開發流程，可能永遠不需要執行 prebuild 指令，或是在自己的電腦上安裝 Android Studio 或 Xcode。

Continuous Native Generation (CNG)

> 一個建置 Expo 應用程式的處理程序，原生專案根據 app.json 和 package.json 產生，類似 mode_modules 根據 package.json 產生。

> 可以把原生專案的資料夾 (android 和 ios) 加入 .gitignore，隨時可以刪除原生專案，有需要的時候用 `npx expo prebuild` 根據 Expo 應用程式設定重新產生。如果採用雲端開發流程，可能永遠不需要在自己的電腦上執行 prebuild 指令。使用 CNG 可以讓更新 React Native 版本變得更簡單，可以簡化維護工作、設置複雜的功能。

何時需要執行 prebuild 指令？

> 在 Expo 應用程式設定（app.json/app.config.js）加入新的原生函式庫之後，可執行 `npx expo prebuild --clean` 以重新產生原生專案的資料夾

雲端與本地開發流程

> 兩者在開發階段是相同的，差異是在如何產出。每次建置都可以選擇要用哪一種。

> 雲端

> 本地

> 下一個筆記：[環境準備](/notes/01-environment.md)