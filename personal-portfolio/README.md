# 個人形象網站 (Personal Portfolio)

這是一個使用 React + Vite 建置的現代化個人形象網站。

## ✨ 特色
- **極速效能**: 基於 Vite 構建，秒級啟動。
- **現代設計**: 採用 Cyberpunk / 現代極簡深色風格。
- **響應式排版**: 完美支援手機、平板與桌面電腦。
- **動畫效果**: 使用 `framer-motion` 打造流暢的互動體驗。

## 🛠️ 技術架構 (Technical Architecture)

本專案採用現代化的前後端分離架構與雲端部署方案。

### 🎨 前端 (Frontend)
- **核心框架**: React 19
- **建置工具**: Vite (秒級啟動)
- **樣式系統**: CSS Modules / Vanilla CSS (Cyberpunk 風格)
- **動畫互動**: Framer Motion
- **圖示庫**: Lucide React

### ☁️ 雲端與部署 (Infrastructure)
- **雲端平台**: Google Cloud Platform (GCP) Compute Engine
- **作業系統**: Linux (Debian/Ubuntu)
- **伺服器**: Nginx (反向代理 / Reverse Proxy)
- **進程管理**: PM2 (確保網站 24/7 背景執行)
- **網域服務**: DuckDNS (動態 DNS 解析)
- **資安加密**: Let's Encrypt SSL 憑證 (HTTPS 安全連線)

## 🚀 快速開始

### 1. 安裝依賴
在專案目錄下執行：
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
啟動後，開啟瀏覽器訪問 `http://localhost:5173`。

### 3. 建置生產版本
```bash
npm run build
```

## 📂 專案結構
- `src/components`: 共用元件 (Navbar, Footer)
- `src/sections`: 頁面各區塊 (Hero, About, Projects, Contact)
- `src/index.css`: 全域樣式設定

## 🔗 連結
- GitHub: [https://github.com/d11416118-sketch](https://github.com/d11416118-sketch)
