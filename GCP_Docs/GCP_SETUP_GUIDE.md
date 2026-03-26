# GCP 雲端主機配置建議與教學 (GCP Setup Guide)

雖然您的網站是一個靜態的 React 網站，但為了讓您可以持續開發與展示，以下提供針對 Google Cloud Platform (GCP) Compute Engine 的配置建議。

## 1. 虛擬機器規格建議 (Machine Configuration)

對於這個個人形象網站，您的資源需求非常低。

### 推薦方案：e2-micro (最省錢/免費層級)
如果您的帳號符合 GCP 免費方案資格，這是最佳選擇。
- **系列 (Series)**: E2
- **機器類型 (Machine Type)**: `e2-micro` (2 vCPU, 1 GB 記憶體)
- **區域 (Region)**: `us-west1`, `us-central1`, 或 `us-east1` (僅這些區域有免費額度，若不在意幾塊錢美金，選 `asia-east1` 台灣會快很多)
- **已開機磁碟 (Boot Disk)**:
  - **作業系統**: Ubuntu
  - **版本**: Ubuntu 22.04 LTS (x86/64)
  - **大小**: 10 GB (標準永久磁碟)

### 效能方案：e2-small (建議)
如果您擔心 `npm run build` 時記憶體不足 (1GB 比較緊繃)，或是想要開發時順暢一點。
- **機器類型**: `e2-small` (2 vCPU, 2 GB 記憶體)
- **費用**: 每月約 $14 USD (若主機設在台灣)，如果不開整個月會更便宜。

---

## 2. 防火牆設定 (Firewall Rules)

為了讓外部網路能連到您的網站，您必須開啟防火牆。

1. 在 GCP 控制台搜尋 **"VPC 網路"** -> **"防火牆"**。
2. 點選 **"建立防火牆規則"**。
3. **名稱**: `allow-portfolio` (自訂)
4. **目標**: `網路中的所有執行個體`
5. **來源 IPv4 範圍**: `0.0.0.0/0` (表示允許全世界連線)
6. **通訊協定和埠**:
   - 勾選 `tcp`，並輸入: `5173` (開發伺服器預設埠)
   - 如果您之後會用正規方式部署 (Nginx)，請加開 `80` 與 `443`。

---

## 3. 在 GCP 機器上的操作步驟

開好機器後，使用 SSH 連進去，執行以下指令：

```bash
# 1. 更新系統
sudo apt update && sudo apt upgrade -y

# 2. 安裝 Node.js (使用 NVM 安裝最新版)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
node -v  # 檢查是否安裝成功

# 3. 從 GitHub 下載您的程式碼
git clone https://github.com/d11416118-sketch/personal-portfolio.git
cd personal-portfolio

# 4. 安裝依賴
npm install

# 5. 啟動網站 (要加上 --host 才能讓外面連進來)
# 這裡建議使用 pm2 來讓它在背景執行，不然您關掉 SSH 網站就掛了
npm install -g pm2
pm2 start npm --name "portfolio" -- run dev -- --host

# 6. 檢查狀態
pm2 status
```

> **小技巧**: 如果您只是短暫展示，直接跑 `npm run dev -- --host` 即可，不用裝 PM2。

---

## 4. 替代方案 (更推薦)

如果您只是要放靜態網頁，其實**不需要開 VM (虛擬機器)**。
使用 **Firebase Hosting** (Google 的產品) 是最好的選擇：
- **費用**: 免費 (Spark Plan)
- **速度**: 全球 CDN 加速
- **維護**: 不需要管 Linux 更新、防火牆設定
- **指令**:
  1. `npm install -g firebase-tools`
  2. `firebase login`
  3. `firebase init`
  4. `npm run build`
  5. `firebase deploy`
