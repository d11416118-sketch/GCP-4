# 個人形象網站 - 專案導覽 (Project Walkthrough)

這份文件說明如何啟動與使用您剛建立的個人形象網站。

## 專案功能
- **現代化設計**: 採用 Cyberpunk / 極簡深色風格，具備高級感。
- **React + Vite**: 高效能的前端架構。
- **響應式排版**: 完美支援手機與桌面版。
- **動態效果**: 使用 `framer-motion` 製作流暢的進場與轉場動畫。
- **GitHub 整合**: Navbar 與 Footer 皆包含您的 GitHub 連結。

## 如何啟動專案 (How to Run)

1. **開啟終端機 (Terminal)**
   請確保您位於專案目錄中：
   ```bash
   cd c:\Users\fsc28\Desktop\GCP-4\personal-portfolio
   ```

2. **安裝依賴 (Install Dependencies)**
   (如果您尚未安裝，請執行此指令，但我已經幫您安裝好了)
   ```bash
   npm install
   ```

3. **啟動開發伺服器 (Start Dev Server)**
   執行以下指令來預覽網站：
   ```bash
   npm run dev
   ```
   終端機將會顯示一個網址 (通常是 `http://localhost:5173`)，按住 `Ctrl` 並點擊該連結即可在瀏覽器中開啟。

## 專案結構導覽
- **`src/components`**: 包含 `Navbar` (導航列) 與 `Footer` (頁尾)。
- **`src/sections`**: 包含主要頁面區塊：
    - `Hero.jsx`: 首頁視覺大圖與歡迎標語。
    - `About.jsx`: 關於我與技能展示。
    - `Projects.jsx`: 專案作品集。
    - `Contact.jsx`: 聯絡表單介面。
- **`src/index.css`**: 定義了全域變數 (顏色、字型) 與基礎樣式。

## 修改與客製化
- 若要修改 **GitHub 連結**，請編輯 `src/components/Navbar.jsx` 與 `src/components/Footer.jsx`。
- 若要更新 **專案內容**，請編輯 `src/sections/Projects.jsx` 中的 `projects` 陣列。
- 若要修改 **技能列表**，請編輯 `src/sections/About.jsx` 中的 `skills` 陣列。

## GCP 部署總結 (Deployment Summary)

您的網站已成功部署至 Google Cloud Platform (GCP)。

### 部署資訊
- **外部連線網址**: `http://34.63.246.22:5173` (請以您的 GCP 外部 IP 為準)
- **伺服器狀態**: 使用 `PM2` 在背景執行，即使關閉 SSH 或電腦也能持續運作。
- **維護指令**:
  - 查看狀態: `pm2 list`
  - 停止網站: `pm2 stop my-portfolio`
  - 重新啟動: `pm2 restart my-portfolio`

### 詳細部署教學
請參考專案目錄下的 `GCP_DEPLOYMENT_STEPS.md` 文件，內含完整圖文教學與故障排除指南。

### 進階：HTTPS 網域設定
若您已完成網域升級，您的網站也可以透過以下網址連線：
- **安全網址**: `https://fsc-portfolio.duckdns.org`
- **詳細教學**: 請參考 `GCP_DOMAIN_SETUP.md`。
