# 網站內容管理與發布指南 (Content & Deployment Guide)

本指南將回答您關於如何更新內容、上傳作品以及讓所有人看到網站的問題。

## 1. 如何更新內容？

所有內容都是直接寫在程式碼檔案 (`.jsx`) 中的。您可以使用任何文字編輯器 (如 VS Code) 來修改。

### 修改自我介紹 (About)
- **檔案位置**: `src/sections/About.jsx`
- **如何修改**: 找到 `<p>` 標籤內的文字，直接替換成您的自我介紹即可。
- **範例**:
  ```javascript
  <p>
    你好，我是張富翔。我是一名熱愛程式設計的開發者...
    (在這裡貼上您的文字)
  </p>
  ```

### 上傳或新增作品 (Projects)
- **檔案位置**: `src/sections/Projects.jsx`
- **如何修改**: 找到 `projects` 這個變數 (陣列)。複製其中一個 `{...}`區塊並修改內容。
- **範例格式**:
  ```javascript
    {
      title: '作品標題',
      description: '作品介紹...',
      tags: ['技術1', '技術2'],
      link: '作品網址',
      github: '程式碼網址'
    },
  ```

### 修改個人資訊
- **名字**: `src/sections/Hero.jsx`
- **Email**: `src/sections/Contact.jsx`

## 2. 如何讓所有人都能連線？ (部署 Deployment)

目前您的網站只在「本機 (Localhost)」執行，只有您的電腦 (或同個 WiFi 下的裝置) 能看到。要讓全世界都能看到，您需要將網站「部署 (Deploy)」到網路上。

### 推薦方法：使用 Vercel (最簡單、免費)

Vercel 是一個專門用來託管前端網站的服務，與 GitHub 完美整合。

**步驟：**

1. **將程式碼上傳到 GitHub**:
   - 確保您的專案已經 Commit 並 Push 到您的 GitHub Repository (https://github.com/d11416118-sketch 或是新的 repo)。

2. **註冊/登入 Vercel**:
   - 前往 [vercel.com](https://vercel.com/)
   - 使用 **GitHub 帳號** 登入。

3. **匯入專案**:
   - 在 Vercel儀表板點擊 "Add New..." -> "Project"。
   - 選擇您的 GitHub Repository (personal-portfolio)。
   - 點擊 "Import"。

4. **部署**:
   - Vercel 會自動偵測這是 Vite 專案。
   - 直接點擊 "Deploy"。
   - 等待約 1 分鐘，Vercel 會給您一個網址 (例如 `zhang-portfolio.vercel.app`)。
   - **這個網址就是公開的，所有人都能看到！**

## 3. 常見問題

**Q: 我可以直接把文字給你，請你幫我改嗎？**
A: **可以！** 您可以直接在對話框中貼上您的「自我介紹」或「作品列表」，我會直接幫您更新到程式碼中。

**Q: 圖片要放哪裡？**
A: 請將圖片檔案放入 `public` 資料夾中 (例如 `my-photo.jpg`)，然後在程式碼中用 `/my-photo.jpg` 來引用。
