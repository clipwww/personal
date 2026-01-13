# Personal Portfolio

[![VitePress](https://img.shields.io/badge/VitePress-2.0.0--alpha.15-646CFF?logo=vite&logoColor=white)](https://vitepress.dev/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-000000?logo=bun&logoColor=white)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

個人作品集網站，使用 VitePress 建構，展示個人履歷、專案作品與技術經歷。

🌐 **Live Demo**: [https://clipwww.github.io/personal/](https://clipwww.github.io/personal/)

## ✨ 功能特色

- 📄 **履歷展示** - 完整的工作經歷、技能與學歷資訊
- 🚀 **專案作品** - Side Projects 展示與技術說明
- 🖼️ **圖片輪播** - 整合 vue-easy-lightbox 的圖片展示功能
- 📊 **Mermaid 圖表** - 支援流程圖與架構圖
- 🌙 **主題切換** - 支援亮色/暗色模式
- 📱 **響應式設計** - 適配各種裝置尺寸

## 🛠️ 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | [VitePress](https://vitepress.dev/) |
| 執行環境 | [Bun](https://bun.sh/) |
| 圖片展示 | [vue-easy-lightbox](https://github.com/XiongAmao/vue-easy-lightbox) |
| 圖表 | [Mermaid](https://mermaid.js.org/) |
| 部署 | GitHub Pages + GitHub Actions |

## 📦 安裝

確保已安裝 [Bun](https://bun.sh/)，然後執行：

```bash
bun install
```

## 🚀 開發

啟動本地開發伺服器：

```bash
bun docs:dev
```

開發伺服器預設運行於 `http://localhost:5173/personal/`

## 🏗️ 建構

建構靜態網站：

```bash
bun docs:build
```

建構產物位於 `docs/.vitepress/dist` 目錄。

## 👀 預覽

預覽建構結果：

```bash
bun docs:preview
```

## 📁 專案結構

```
personal/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts        # VitePress 設定檔
│   │   ├── theme/           # 自訂主題
│   │   └── dist/            # 建構產物
│   ├── index.md             # 首頁
│   ├── RESUME.md            # 履歷頁面
│   ├── side-projects.md     # Side Projects 頁面
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

## 🚢 部署

本專案使用 GitHub Actions 自動部署至 GitHub Pages。

當推送至 `main` 分支時，會自動觸發建構與部署流程。

### 手動部署

```bash
# 建構
bun docs:build

# 部署產物位於 docs/.vitepress/dist
```

## 📝 License

MIT License © 2024-present [David Jian](https://github.com/clipwww)
