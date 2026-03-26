# 個人形象網站實作計畫

## 目標描述
建立一個現代化、響應式且視覺效果極佳的個人形象網站 (Personal Portfolio Website)。設計將採用「高級感」的美學，包含深色模式、流暢的動畫以及簡潔好用的介面。

## 需要使用者審查
> [!NOTE]
> 依照系統指示，將使用標準 CSS (CSS Modules 或 global CSS) 而非 Tailwind。
> 假設採用深色主題的「Cyberpunk / 現代極簡」美學。

## 預計變更

### 專案結構
- 建立 `src/components` 目錄。
- 建立 `src/sections` 目錄用於放置頁面區塊 (Hero, About 等)。
- 建立 `src/styles` 用於全域樣式。

### 元件設計 `src/components`
#### [NEW] `Navbar.jsx` / `Navbar.css`
- 黏性導航列 (Sticky navigation bar)，包含前往各區塊的連結。
- 玻璃擬態 (Glassmorphism) 效果。
- 包含 GitHub連結：[https://github.com/d11416118-sketch](https://github.com/d11416118-sketch)

#### [NEW] `Footer.jsx` / `Footer.css`
- 簡單的版權宣告與社群連結。
- 再次包含 GitHub連結。

#### [NEW] `Button.jsx` / `Button.css`
- 可重複使用的按鈕元件，包含懸停 (Hover) 效果。

### 區塊設計 `src/sections`
#### [NEW] `Hero.jsx` / `Hero.css`
- 大型歡迎標語。
- 「我是 [角色]」的打字機特效或類似動畫。
- 呼籲行動 (CTA) 按鈕。

#### [NEW] `About.jsx` / `About.css`
- 簡短的個人簡介。
- 技能網格展示 (Skills grid)。

#### [NEW] `Projects.jsx` / `Projects.css`
- 專案卡片網格。
- 每個卡片包含圖片、標題、描述與連結。

#### [NEW] `Contact.jsx` / `Contact.css`
- 簡單的表單 (僅視覺效果或 mailto) 與社群連結。

### 全域樣式 Global Styles
#### [MODIFY] `src/index.css` / `src/App.css`
- 重設預設樣式 (Reset defaults)。
- 定義顏色、字型與間距的 CSS 變數。
- 實作平滑捲動 (Smooth scrolling)。

## 驗證計畫

### 自動化測試
- 執行 `npm run build` 確保專案建置無錯誤。
- 如果有的話，執行 `npm run lint`。

### 人工驗證
- 啟動開發伺服器 (`npm run dev`)。
- 開啟瀏覽器並驗證：
    - 導航連結能否正確捲動至對應區塊。
    - 響應式設計在手機與桌面版是否正常。
    - 懸停狀態 (Hover states) 與動畫是否流暢。
    - 深色模式下是否有視覺瑕疵。
    - **檢查 GitHub 連結是否正確跳轉。**
