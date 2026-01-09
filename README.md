# 闪配宝官网

<p align="center">
  <img src="images/spb-logo.png" alt="闪配宝 Logo" width="120">
</p>

<p align="center">
  <strong>⚡ 闪电到账，配你所需</strong><br>
  专业的A股股票配资平台官方网站
</p>

<p align="center">
  <a href="#项目简介">项目简介</a> •
  <a href="#功能特性">功能特性</a> •
  <a href="#页面模块">页面模块</a> •
  <a href="#技术栈">技术栈</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#项目结构">项目结构</a>
</p>

---

## 项目简介

闪配宝官网是一个现代化的单页面应用（SPA），专为闪配宝 A 股配资平台设计。网站采用深色主题风格，橙黄渐变的品牌色彩，具有流畅的动画效果和完善的响应式布局。

### 关于闪配宝

闪配宝是一款专业的 A 股股票配资工具，为投资者提供按日配资服务：

- **杠杆倍数**：5倍 / 8倍 / 10倍 三档可选
- **计息规则**：仅交易日计息，节假日完全免息
- **起投门槛**：零起投，注册送 240 元体验金
- **交易性质**：实盘交易，交割单可查
- **穿仓保护**：穿仓亏损由平台承担
- **运营地点**：中国上海

---

## 功能特性

### 🎨 视觉设计

- **深色主题**：采用深蓝色（#0F172A）为主背景，护眼舒适
- **品牌色彩**：橙色（#F97316）+ 金黄色（#FACC15）渐变
- **现代化卡片**：圆角设计、悬停效果、阴影层次
- **动态背景**：Hero 区域多层径向渐变 + 网格纹理

### 📱 响应式布局

- **桌面端**：完整展示所有模块，多列布局
- **平板端**：自适应列数，保持阅读体验
- **移动端**：单列堆叠，触摸友好，表格横向滚动

### ⚡ 交互动画

| 动画效果 | 描述 |
|---------|------|
| 淡入动画 | 页面元素滚动进入视口时淡入 |
| 浮动动画 | Hero 区手机样机上下浮动 |
| 脉冲光晕 | 重点按钮发光脉冲效果 |
| 数字滚动 | 数据统计区数字从 0 滚动到目标值 |
| 悬停变换 | 卡片悬停时上移 + 边框高亮 |

### 🧮 费用计算器

实时交互式费用计算工具：

- **输入参数**：保证金金额、杠杆倍数、持仓天数、卖出市值
- **计算结果**：配资金额、买入手续费、过夜费、卖出手续费、印花税、总费用
- **实时更新**：输入变化即时重新计算

### ❓ FAQ 系统

- **分类展示**：按"交易相关"、"费用相关"、"账户相关"等分类
- **折叠交互**：点击问题展开/收起答案
- **SEO 优化**：FAQ 结构化数据（Schema.org FAQPage）

### 📊 交易案例

Tab 切换展示 6 种典型交易场景：

1. 体验金首次交易
2. 加仓降低成本
3. 止盈止损自动平仓
4. 周末持仓费用计算
5. 穿仓情况处理
6. 避免强平的操作

---

## 页面模块

网站包含以下完整模块：

| 序号 | 模块名称 | 锚点ID | 描述 |
|-----|---------|--------|------|
| 01 | 顶部导航 | - | 固定导航栏，滚动时毛玻璃背景 |
| 02 | Hero 英雄区 | `#hero` | 首屏展示，品牌标语 + 下载入口 |
| 03 | 数据展示 | - | 累计用户、交易额、运营时间等 |
| 04 | 什么是闪配宝 | `#about` | 产品介绍 + 核心特性卡片 |
| 05 | 核心优势 | - | 六大优势详细说明 |
| 06 | 平台对比 | - | 与传统配资/券商融资对比表 |
| 07 | 产品功能 | `#features` | 交易功能 + 风控工具详解 |
| 08 | 可交易标的 | - | 支持/禁止交易的股票类型 |
| 09 | 费用说明 | `#fees` | 费率表 + 费用计算器 |
| 10 | 持仓规则与风控 | - | 持仓限额、强平线、穿仓处理 |
| 11 | 体验金活动 | `#experience` | 240元体验金规则说明 |
| 12 | 使用流程 | `#guide` | 5步快速上手指南 |
| 12.5 | 交易案例 | `#cases` | 6种场景案例展示 |
| 12.6 | 充值提现 | `#funds` | 资金操作详细流程 |
| 13 | 实盘验证 | - | 交割单查询验证方法 |
| 14 | 安全保障 | - | 安全措施说明 |
| 15 | FAQ | `#faq` | 分类常见问题解答 |
| 16 | 下载区 | `#download` | App 下载入口 |
| 17 | 页脚 | - | 版权信息 + 免责声明 |

---

## 技术栈

### 核心技术

| 技术 | 版本/说明 | 用途 |
|------|----------|------|
| HTML5 | - | 语义化页面结构 |
| CSS3 | - | 样式、动画、响应式布局 |
| Tailwind CSS | 本地化部署 | 原子化 CSS 框架 |
| JavaScript | ES6+ | 交互逻辑，无框架依赖 |

### 字体方案

使用 **Noto Sans SC**（思源黑体）本地化部署：

- 格式：woff2（高压缩率）
- 字重：400 / 500 / 700 / 900
- 子集：中文简体 + 拉丁字符
- 加载策略：`font-display: swap`（优化 LCP）

### SEO 优化

- **Meta 标签**：title、description、keywords、canonical
- **Open Graph**：og:title、og:description、og:image
- **Twitter Card**：summary_large_image
- **结构化数据**：
  - Organization（组织信息）
  - FAQPage（常见问题）
  - SoftwareApplication（App 信息）
  - BreadcrumbList（面包屑导航）
- **站点文件**：robots.txt、sitemap.xml

---

## 快速开始

### 方式一：直接打开

由于是纯静态网站，可以直接在浏览器中打开 `index.html` 文件：

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 方式二：使用本地服务器

推荐使用本地服务器以获得更好的开发体验：

```bash
# 使用 Python 3
python -m http.server 8080

# 使用 Python 2
python -m SimpleHTTPServer 8080

# 使用 Node.js（需安装 serve）
npx serve

# 使用 PHP
php -S localhost:8080
```

然后访问 `http://localhost:8080`

### 方式三：VS Code / Cursor Live Server

1. 安装 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

---

## 项目结构

```
spb_onepage/
├── index.html              # 主页面（约3200行）
├── css/
│   ├── styles.css          # 自定义样式（606行）
│   │   ├── 字体定义         # @font-face 声明
│   │   ├── CSS 变量         # 主题色定义
│   │   ├── 基础样式         # 重置 + 全局样式
│   │   ├── 动画定义         # @keyframes
│   │   ├── 组件样式         # 导航、按钮、卡片等
│   │   └── 响应式           # 移动端适配
│   └── tailwind.js         # Tailwind CSS 运行时
├── js/
│   └── script.js           # 交互脚本（294行）
│       ├── 导航栏滚动       # 背景切换效果
│       ├── 移动端菜单       # 汉堡菜单控制
│       ├── 费用计算器       # 实时费用计算
│       ├── FAQ 折叠         # 问答展开收起
│       ├── Tab 切换         # 案例/FAQ分类
│       ├── 平滑滚动         # 锚点导航
│       ├── 滚动动画         # IntersectionObserver
│       ├── 数字滚动         # 计数器动画
│       └── 返回顶部         # 动态显隐按钮
├── fonts/                  # 字体文件目录
│   └── *.woff2             # Noto Sans SC 子集（918个文件）
├── images/
│   ├── spb-logo.png        # 网站 Logo
│   └── index_ui.jpg        # App 界面截图
├── robots.txt              # 搜索引擎爬虫规则
├── sitemap.xml             # XML 站点地图
└── README.md               # 项目说明文档
```

---

## 自定义配置

### 修改主题色

编辑 `css/styles.css` 中的 CSS 变量：

```css
:root {
    --flash-orange: #F97316;  /* 主色调 - 橙色 */
    --energy-yellow: #FACC15; /* 强调色 - 金黄色 */
    --dark-blue: #0F172A;     /* 背景深色 */
    --slate-dark: #1E293B;    /* 卡片背景 */
    --slate-mid: #334155;     /* 边框/分隔线 */
}
```

同时更新 `index.html` 中的 Tailwind 配置：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'flash-orange': '#F97316',
                'energy-yellow': '#FACC15',
                'dark-blue': '#0F172A',
                'slate-dark': '#1E293B',
                'slate-mid': '#334155',
            }
        }
    }
}
```

### 修改费用参数

编辑 `js/script.js` 中的 `calculateFees()` 函数：

```javascript
// 买入手续费 (万10)
const buyFee = totalAmount * 0.001;

// 过夜费 (万19/天)
const interest = totalAmount * 0.0019 * days;

// 卖出手续费 (万10)
const sellFee = sellValue * 0.001;

// 印花税 (万5)
const tax = sellValue * 0.0005;
```

### 修改下载链接

在 `index.html` 中搜索 `https://bmdyk.cn/` 替换为实际下载地址。

---

## 浏览器支持

| 浏览器 | 最低版本 | 说明 |
|--------|---------|------|
| Chrome | 88+ | 完全支持 |
| Firefox | 85+ | 完全支持 |
| Safari | 14+ | 完全支持 |
| Edge | 88+ | 完全支持 |
| IE | ❌ | 不支持 |

### 关键特性依赖

- CSS Grid / Flexbox
- CSS Custom Properties
- IntersectionObserver API
- ES6+ 语法

---

## 部署说明

本项目为纯静态网站，可部署到任意静态托管服务：

### GitHub Pages

```bash
# 推送到 gh-pages 分支
git checkout -b gh-pages
git push origin gh-pages
```

然后在仓库 Settings → Pages 中启用。

### Vercel / Netlify

1. 连接 GitHub 仓库
2. 自动检测为静态站点
3. 无需构建命令，直接部署

### 云存储托管

| 平台 | 操作 |
|------|------|
| 阿里云 OSS | 上传文件 → 开启静态网站托管 → 绑定域名 |
| 腾讯云 COS | 上传文件 → 开启静态网站 → 配置 HTTPS |
| 七牛云 | 上传文件 → 绑定域名 → 配置 CDN |

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name shanpeibao.com;
    root /var/www/spb_onepage;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 字体文件缓存
    location ~* \.(woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 图片缓存
    location ~* \.(jpg|jpeg|png|gif|ico)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

---

## 性能优化

### 已实施优化

- ✅ 字体子集化（918个 woff2 文件按需加载）
- ✅ 图片懒加载（`loading="lazy"`）
- ✅ CSS/JS 内联减少请求
- ✅ 字体 `font-display: swap` 避免 FOIT
- ✅ 关键渲染路径优化

### 建议优化

- 使用 CDN 加速静态资源
- 开启 Gzip/Brotli 压缩
- 配置 HTTP/2
- 添加 Service Worker 实现离线缓存

---

## 开发指南

### 添加新模块

1. 在 `index.html` 中添加 `<section>` 结构
2. 使用 Tailwind 类名进行样式定义
3. 如需自定义样式，在 `css/styles.css` 中添加
4. 如需交互，在 `js/script.js` 中添加逻辑

### 代码规范

- HTML：语义化标签，合理缩进
- CSS：遵循 BEM 命名或 Tailwind 原子类
- JS：使用 ES6+ 语法，注释清晰

### 调试工具

```javascript
// 开启调试日志
console.log('闪配宝官网脚本加载完成 ⚡');

// 设备检测
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
    if (/android/.test(userAgent)) return 'android';
    return 'desktop';
}
```

---

## 常见问题

### Q: 字体文件很多，会影响加载速度吗？

A: 不会。字体采用 Unicode Range 子集化技术，浏览器只会下载页面实际使用的字符对应的字体文件。

### Q: 为什么使用本地化的 Tailwind？

A: 避免 CDN 依赖，提高国内访问速度，同时支持离线访问。

### Q: 如何修改 FAQ 内容？

A: 在 `index.html` 中搜索 `faq-item`，按照现有结构修改或添加新问题。同时更新 `<head>` 中的 FAQPage 结构化数据。

---

## 更新日志

### v1.0.0 (2026-01)

- 🎉 首次发布
- ✨ 完整的产品介绍页面
- ✨ 费用计算器功能
- ✨ 交易案例展示
- ✨ FAQ 分类系统
- ✨ 响应式设计
- ✨ SEO 优化

---

## 许可证

© 2020-2026 闪配宝 版权所有

本项目代码仅供学习参考，未经授权禁止商业使用。

---

## 联系方式

- **官网**：[shanpeibao.net](https://shanpeibao.net)
- **下载**：[bmdyk.cn](https://bmdyk.cn)

---

<p align="center">
  <sub>⚡ 闪配宝 - 闪电到账，配你所需</sub>
</p>
