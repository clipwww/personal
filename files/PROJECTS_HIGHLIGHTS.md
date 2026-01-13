# 專案經歷精華

## 核心能力總結
擁有多年全端開發經驗，專精於 **Vue.js / Nuxt.js** 生態系與 **Node.js** 後端服務。擅長從無到有建置高流量官方網站、複雜後台管理系統與第三方整合 SDK。具備 **SSR 效能優化**、**金流支付串接**（Apple/Google Pay, Stripe, TapPay）、**系統架構現代化**（Vue2 to 3, TS 導入, Vite 遷移）以及**可觀測性建設**（Logging, Monitoring）的實戰經驗。

---

## 工作時期專案成就

### RE 紅包 / RE·X 點數魔術師 (2017 – 至今)
**角色：全端工程師 / 核心開發**
在此時期負責 B2C 官網、B2B 店家系統、Web SDK 及多項微服務開發，推動技術堆疊從傳統 Vue2/Express 演進至 Vue3/TypeScript/Bun。

*   **高流量官網效能優化**：
    *   基於 Nuxt.js (SSR) 實作 **LRU Cache** 與 **Lazy Hydration**，大幅提升首屏載入速度。
    *   建構 **Bot 偵測**與**裝置指紋 (Fingerprint)** 機制，並針對不同流量來源進行差異化處理。
    *   重構日誌系統（Winston → Pino），提升 2-3 倍效能並整合 Google Cloud Logging。
*   **支付與第三方整合**：
    *   開發 **Web SDK** 供外部廠商與 LINE LIFF 接入，支援 **Apple Pay / Google Pay** 及 **TapPay / Stripe** 等多國金流。
    *   因應 PCI DSS 規範，封裝嵌入式信用卡支付組件，確保交易安全與合規。
*   **系統架構與內部工具**：
    *   開發 POS 核心服務與簽到服務，採用 **TypeScript + Redis + MySQL** 架構，提供高併發下的穩定服務。
    *   引入 **Bun + Nuxt 4** 建置內部金流處置工具，利用 AI Agent 生成 UI 與流程，提升開發效率。
    *   封裝多個共用 Vue 組件（Vue-demi 支援 Vue 2/3）發佈至私有 npm，降低跨專案維護成本。

### FunNow
**角色：前端工程師 (協作)**
接手商家後台管理系統 (FunNow Manager)，專注於開發體驗改善與架構現代化。

*   **現代化工程建設**：
    *   主導專案從 Vue CLI 遷移至 **Vite**，顯著提升冷啟動與熱重載速度。
    *   全面導入 **TypeScript**，建立明確型別定義，提升程式碼可讀性與重構安全性。
*   **狀態管理與重構**：
    *   配合團隊策略，逐步將 Vuex 遷移至 **Pinia**，並採用 **Composition API** 重寫核心邏輯。
    *   重構複雜的 Date/Time Picker 組件，優化商家操作體驗。

### 蝦米智慧媒體 Whats Media
**角色：全端工程師 (.NET MVC + Vue)**
負責多家大型百貨與連鎖品牌官網開發，包含統一時代百貨、環球購物中心、麗寶 Outlet 等。

*   **CMS 與會員系統整合**：
    *   從無到有建置多租戶後台管理系統，支援樓層、櫃位、商品管理。
    *   串接 SOAP API 整合百貨既有會員系統（CRM），實作 SSO 登入與點數查詢。
*   **O2O 服務整合**：
    *   實作線上餐廳訂位（Inline App 串接）與美容服務預約系統（Fullcalendar.js）。
    *   開發電子看板內容，整合 AccuWeather 與航班資訊 API。

### SOHO 接案經歷
**角色：獨立開發 / 與設計師協作**
承接行銷活動網站與互動遊戲開發，強調短週期交付與高互動性。

*   **互動行銷應用**：
    *   **GoShare 台南**：基於 Leaflet 開發客製化手繪地圖，結合 Instagram 爬蟲與黑名單過濾機制。
    *   **格上租車**：使用 **PixiJS** 開發物理拋物線射擊遊戲，並建置後台管理玩家數據。

---

## 技術棧總覽

| 領域 | 關鍵技術 |
| :--- | :--- |
| **Frontend** | **Vue.js (2/3)**, **Nuxt.js (2/4)**, **TypeScript**, Vite, TailwindCSS, Pinia, VueUse, PixiJS |
| **Backend** | **Node.js**, **Express.js**, **Bun**, Koa.js, RESTful API |
| **Database** | MySQL, Redis, MongoDB |
| **DevOps / Tools** | Docker, Google Cloud Platform (Logging), Git, ESLint, Zod/Yup |
| **Payments** | Stripe, TapPay, NewebPay, Apple Pay, Google Pay |
