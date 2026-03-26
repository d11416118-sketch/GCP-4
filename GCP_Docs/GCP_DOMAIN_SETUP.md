# GCP 免費網域與 HTTPS 設定教學 (Free Domain & SSL Guide)

這份教學將一步一步帶您將 IP 網址 (`http://34.63.xx:5173`) 升級為 **HTTPS 網域** (例如 `https://fsc-portfolio.duckdns.org`)。

我們會使用 **DuckDNS** (免費網域) + **Nginx** (網頁伺服器) + **Certbot** (免費 SSL 證書) 來達成。

---

## 網域升級流程總結

### 第一階段：申請免費網域 (DuckDNS)
1. 前往 DuckDNS 官網並登入。
2. 新增一個網域 (例如 `fsc-portfolio`)。
3. **⚠️ 關鍵步驟**: 務必將 `current ip` 更新為您的 **GCP 外部 IP** (`34.63.246.22`)。
   (如果它是 203.x.x.x 那是您家裡的 IP，會導致後續 Certbot 失敗)

### 第二階段：GCP 防火牆開通
1. 進入 GCP 控制台 > VPC 網路 > 防火牆。
2. 建立新規則 `allow-http-https`。
3. 開通 Port: `80` (HTTP) 與 `443` (HTTPS)。

### 第三階段：修正 Vite 設定 (Blocked Request 問題)
因為 Vite 預設會擋住不明來源的網址連線，我們必須將新網域加入白名單。

1. 在本機編輯 `vite.config.js`：
   ```javascript
   export default defineConfig({
     plugins: [react()],
     server: {
       allowedHosts: [
         'fsc-portfolio.duckdns.org',  // 您的網域
         'localhost'
       ]
     }
   })
   ```
2. 將修改推送上雲端 (`git push` -> `git pull`)。

### 第四階段：伺服器配置 (Nginx + Certbot)
回到 GCP 黑色視窗執行：

1. **安裝 Nginx**:
   `sudo apt install nginx -y`

2. **設定轉發**:
   建立其設定檔，將 `duckdns.org` 的流量轉給 `localhost:5173`。

3. **申請 SSL (綠色鎖頭)**:
   執行 `sudo certbot --nginx`。
   - 輸入 Email。
   - 同意條款。
   - 選擇網域。

---

## 🎉 完成狀態

當您看到 Certbot 顯示 `Congratulations!`，即代表成功。

- **正式網址**: `https://fsc-portfolio.duckdns.org`
- **後台指令**:
  - 重啟網站: `pm2 restart my-portfolio`
  - 重啟 Nginx: `sudo systemctl restart nginx`
