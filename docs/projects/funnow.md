# FunNow

FunNow 是即時預訂平台，我在 2022/03 - 2023/03 期間擔任 Frontend Engineer，負責維護與開發店家端後台管理系統。

---

## FunNow Manager 商家後台管理系統

> 接手後與後端同事協作維護，並開發新功能

**專案連結:** [https://boss.myfunnow.com/](https://boss.myfunnow.com/)

### 技術棧

`Vue.js@2.7` `Vue-Router` `Vuetify` `Vite` `TypeScript` `Pinia` `Axios` `Jest` `Vue-i18n` `WindiCSS` `VueUse` `ESLint`

### 主要貢獻

- 從 Vue/cli 遷移至 Vite，大幅提升專案啟動與熱重載速度
- 導入 TypeScript，提升開發體驗（精準自動補全、重構安全），並強化程式碼可讀性與可維護性（明確型別定義）
- 依前端團隊共識，逐步以 Vue Composition API 改寫，並以 Pinia 取代 Vuex
- 與設計師協作重構 Date/Time/DateRange Picker

### 組件開發

重構並優化多個時間選擇器組件：

<ImageCarousel 
  title="日期時間選擇器組件"
  :images="[
    { src: 'https://hackmd.io/_uploads/HJrtQ2k4We.png', alt: 'DateRange Picker' },
    { src: 'https://hackmd.io/_uploads/S1Qs73JVbe.png', alt: 'Date Picker' },
    { src: 'https://hackmd.io/_uploads/rJ1Tmh1NWx.png', alt: 'DateTime Picker' },
    { src: 'https://hackmd.io/_uploads/BJ9TX31Vbe.png', alt: 'Time Picker' }
  ]"
/>


#### DEMO

https://clipwww.github.io/date-picker-demo/
<iframe src="https://clipwww.github.io/date-picker-demo/" width="100%" height="900" style="border:1px solid #eee; border-radius: 8px;"></iframe>