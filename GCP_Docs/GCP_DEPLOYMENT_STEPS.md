# GCP 網站部署教學 (最終完整版)

## 恭喜！您已經成功啟動了！
從您的截圖來看，網站已經在雲端跑起來了。

**But, 回答您的問題：「電腦可以關嗎？」**
👉 **現在還不行！** 因為您是用「前台」模式跑的，一旦您把那個黑色視窗關掉 (或關電腦)，連線就會斷掉，網站就會掛掉。

我們要加做最後一步：**「讓它在背景執行 (24小時不中斷)」**。

請跟著以下步驟操作：

---

## 步驟四：讓網站永久執行 (使用 PM2)

請回到那個黑色的 SSH 視窗：

1. **停止目前的網站**
   請按鍵盤上的 `Ctrl` + `C` (會看到程式停止，出現輸入游標)。

2. **安裝 PM2 (Process Manager)**
   這是一個可以幫您管網站的小工具，複製執行：
   ```bash
   npm install -g pm2
   ```

3. **使用 PM2 啟動網站**
   複製這行指令執行：
   ```bash
   pm2 start npm --name "my-portfolio" -- run dev -- --host
   ```

4. **確認狀態**
   執行：
   ```bash
   pm2 list
   ```
   如果您看到一個表格，狀態顯示綠色的 `online`，那就成功了！

---

## 加碼教學：讓「方法 B (隧道)」也永久執行

如果您更喜歡方法 B (不用打 IP，有網址)，但想要它**不會斷線**。
我們可以把那個 SSH 指令也交給 PM2 管理！

**1. 建立一個啟動腳本**
複製貼上這行 (這會建立一個檔案)：
```bash
echo "ssh -o ServerAliveInterval=60 -R 80:localhost:5173 nokey@localhost.run -N" > start_tunnel.sh
```

**2. 給予執行權限**
```bash
chmod +x start_tunnel.sh
```

**3. 用 PM2 啟動隧道**
```bash
pm2 start ./start_tunnel.sh --name "tunnel"
```

**4. 查看網址 (這步最重要)**
因為它在背景跑，您看不到網址。請執行：
```bash
pm2 logs tunnel
```
您會看到類似這樣的畫面，裡面就有網址：
`tunneled with tls change: https://xxxxxxx.localhost.run`

(按 `Ctrl` + `C` 可以退出 Log 畫面，但隧道還會繼續跑)

---

## 🎉 完成！現在您可以關電腦了
現在，您有兩個保險：
1. **IP 連線**: http://34.63.246.22:5173 (永遠有效，前提是防火牆有開)
2. **隧道連線**: https://xxxx.localhost.run (只要您沒重開機，通常都很穩)

現在您可以把黑色視窗關掉，甚至把自己的 Windows 電腦關機，網站依然會在 Google 的雲端上繼續跑。

### 常見指令備忘
- **查看狀態**: `pm2 list`
- **停止網站**: `pm2 stop my-portfolio`
- **重新啟動**: `pm2 restart my-portfolio`
- **查看隧道網址**: `pm2 logs tunnel`
