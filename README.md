# ResearchIC — 西西弗斯林的个人主页

**Sisyphus Lynn** 的个人主页，展示一个学界遁逃者的"三界"：学术利他、文学利己、设计显影。

网站支持中英文切换，采用三栏布局，底部附联络信息。

---

## 技术栈

| 项目 | 版本 |
|---|---|
| Next.js (App Router) | 16.2.2 |
| React | 19 |
| TypeScript | — |
| Tailwind CSS | v4 |

字体通过 `next/font/google` 加载：
- **Cormorant Garamond** (`font-academic`) — 正文衬线
- **Caveat** (`font-literary`) — 文学风手写
- **IBM Plex Mono** (`font-design`) — 设计等宽
- **Nunito** (`font-rounded`) — 品牌标题（ResearchIC）

---

## 页面结构

### 顶部导航（Header）
固定悬浮栏，包含：
- 品牌名 **ResearchIC**（点击滚动回"关于"板块）
- 导航菜单：关于 / 研究师 / 私小说作者 / 氛围编程者 / 联络
- 中英文语言切换按钮
- 移动端汉堡菜单

---

### 主体三栏

#### 左栏 — 研究师（Researchsmith）`src/components/BookProgress.tsx`

- **关于**：个人简介，"三界"定位（学术利他 / 文学利己 / 设计显影）
- **新书进度**：《Conducting Educational Research with AI》（Routledge）进度条展示
- **公众号精选阅读**：精选文章列表 + 两个微信公众号专辑封面卡片
- **研究辅助服务**：五项服务的可折叠面板（含全部展开 / 全部折叠按钮）

#### 中栏 — 私小说作者（I-novelist）`src/components/INovelPanel.tsx`

- **《生根》连载**：英文书籍介绍、封面、Amazon / Goodreads / 微信购书链接
- **私小说栏目**：阅读私小说（书评）/ 西西的私小说（原创）两张跳转卡片

#### 右栏 — 氛围编程者（Designer）`src/components/DesignPanel.tsx`

- **工具**：Second-Brain、Research Workspace 两款工具介绍（含 GitHub 与预览链接）
- **开发服务**：三项服务的可折叠面板（含全部展开 / 全部折叠按钮）
- **项目历程**：ResearchIC.com（2021–2024）、StartupCan.ch（2019–2020）、Programship.com（2017–2019）

---

### 底部联络（Contact）`src/components/ContactPanel.tsx`

- Email：sisyphuslynn@gmail.com
- 微信：wenrenws
- GitHub：github.com/linsharon
- 公众号：thewriterway

---

## 本地开发

```bash
cd retro-paper-site
npm install
npm run dev
```

访问 `http://localhost:3000`

---

## 目录结构

```
retro-paper-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 根页面（Header + 语言切换 + 布局组合）
│   │   ├── layout.tsx        # 字体注入 + HTML 根结构
│   │   └── globals.css       # 全局样式与 Tailwind 主题变量
│   └── components/
│       ├── MainLayout.tsx    # 三栏网格容器
│       ├── BookProgress.tsx  # 左栏：研究师
│       ├── INovelPanel.tsx   # 中栏：私小说作者
│       ├── DesignPanel.tsx   # 右栏：氛围编程者
│       └── ContactPanel.tsx  # 底部联络
└── public/images/            # 本地图片资源
```

