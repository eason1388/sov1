# 隨緣堂｜GitHub Pages 商業等級網站

這是一個可直接部署到 **GitHub Pages** 的完整靜態網站，已包含：

- 首頁品牌形象與 CTA
- 修行養氣頁
- 服務項目頁（收驚、祭改、家宅淨化、祈福）
- 符咒小百科
- 長文專欄頁
- 關於我們
- 預約諮詢表單頁
- 隱私與免責頁
- 404 頁
- SEO 基本 Meta 與 Open Graph 圖
- 響應式手機版選單
- 每日法語隨機功能

## 檔案結構

```text
suiyuantang-commercial-site/
├── index.html
├── practice.html
├── services.html
├── talisman.html
├── articles.html
├── about.html
├── contact.html
├── privacy.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
└── assets/
    ├── css/styles.css
    ├── js/site.js
    └── img/
```

## 如何部署到 GitHub Pages

1. 在 GitHub 建立一個新的 **Public repository**
2. 把本專案所有檔案上傳到 repo 根目錄
3. 到 **Settings → Pages**
4. `Build and deployment` 選擇：
   - Source：**Deploy from a branch**
   - Branch：**main** / **root**
5. 儲存後等待 1–3 分鐘
6. 網址通常會是：

```text
https://你的帳號.github.io/你的-repo-名稱/
```

---

## 上線前請務必修改

### 1) 聯絡資訊
請搜尋以下字樣並替換成你的真實資料：

- `hello@example.com`
- `0900-000-000`
- `@your-line-id`
- `{請自行填寫}`

### 2) GitHub Pages 網址
請把以下檔案中的網址改成你的實際網址：

- `index.html` 內的 JSON-LD `url`
- `sitemap.xml`

---

## 如何讓表單真正能收件

目前 `contact.html` 的表單已完成前端版，但還沒有串接收件服務。

### 方法 A：Formspree（最簡單）
1. 到 https://formspree.io 建立表單
2. 取得 endpoint，例如：

```text
https://formspree.io/f/xxxxabcd
```

3. 打開 `contact.html`
4. 找到：

```html
<form id="consult-form" class="consult-form" data-formspree-endpoint="">
```

5. 改成：

```html
<form id="consult-form" class="consult-form" data-formspree-endpoint="https://formspree.io/f/xxxxabcd">
```

完成後，GitHub Pages 也能直接送出表單。

### 方法 B：Google Forms
你也可以把表單改成連到 Google Forms，但要另外處理欄位對應。

---

## 建議你接著做的商業化設定

- 綁定自訂網域（例如 `www.xxx.com`）
- 安裝 Google Analytics 4
- 安裝 Google Search Console
- 持續新增文章頁，佈局搜尋關鍵字：
  - 收驚
  - 祭改
  - 家宅淨化
  - 符咒原理
  - 道家修行
  - 靜坐養氣

---

## 注意事項

本網站內容屬民俗文化、能量調理與心靈支持資訊，**不可取代醫療、心理、法律或財務專業建議**。若要對外營運，建議同步建立：

- 真實服務條款
- 退款／改期政策
- 更完整的隱私政策
- 真實案例授權規範

---

## 版權與客製

你可以自由修改文案、圖片、顏色、服務項目與頁面名稱，作為自己的品牌官網使用。
