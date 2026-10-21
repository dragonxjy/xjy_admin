<div align="center">
  <img src="src/assets/logo.png" width="72" alt="xjy_admin Logo" />
  <h1>xjy_admin</h1>
  <p>轻量、清晰、开箱即用的 Vue 3 后台管理模板</p>
  <p>
    <img src="https://img.shields.io/badge/Vue-3.5.44-41B883" alt="Vue 3.5.44" />
    <img src="https://img.shields.io/badge/Vite-7.3.7-646CFF" alt="Vite 7.3.7" />
    <img src="https://img.shields.io/badge/Element_Plus-2.14.7-409EFF" alt="Element Plus 2.14.7" />
    <img src="https://img.shields.io/badge/TypeScript-5.5.4-3178C6" alt="TypeScript 5.5.4" />
  </p>
  <p>
    <a href="#快速开始">快速开始</a> ·
    <a href="#功能概览">功能概览</a> ·
    <a href="#页面预览">页面预览</a> ·
    <a href="#项目结构">项目结构</a> ·
    <a href="#配置说明">配置说明</a>
  </p>
</div>

基于 Vue 3、Element Plus 和 TypeScript 构建，内置登录、权限菜单、工作台、主题设置及常用组件示例。项目使用 Mock 数据，可独立启动，适合后台页面原型、学习实践和管理系统项目起步。

![浅色工作台：概览统计、访问趋势、技术栈与项目介绍](docs/screenshots/dashboard-light.png)

## 功能概览

| 功能        | 说明                                                       |
| ----------- | ---------------------------------------------------------- |
| 登录与权限  | 管理员、普通用户两种演示账号，按用户权限生成菜单与动态路由 |
| 导航布局    | 侧栏展开与收起、多级菜单、面包屑、页面标签及页面刷新       |
| 工作台      | 欢迎区、概览统计、ECharts 折线图与饼图、技术栈入口         |
| 主题与设置  | 深浅模式、主题色切换，设置抽屉可控制标签栏、Logo 和面包屑       |
| 移动端      | 小屏抽屉导航、单列页面布局及图表、表单的响应式适配         |
| Canvas 案例 | 图片选择、背景配色、文案绘制与图片导出                     |
| 组件示例    | 公共组件展示、消息与通知演示、富文本编辑器                               |
| 基础体验    | 路由加载进度、页面缓存、404 页面                           |

首页统计与图表内容用于界面演示。

## 快速开始

### 环境要求

- Node.js **22.13+（22.x）或 24+**
- pnpm **12.14.0**

版本约束见 [package.json](package.json)，完整依赖版本由 [pnpm-lock.yaml](pnpm-lock.yaml) 固定。

### 安装与启动

在项目根目录执行：

```bash
pnpm install --frozen-lockfile
pnpm dev
```

浏览器访问 <http://localhost:9000>。

### 演示账号

| 角色     | 账号    | 密码     | 可访问内容                                   |
| -------- | ------- | -------- | -------------------------------------------- |
| 管理员   | `admin` | `123456` | 首页、文档、Canvas、组件示例、富文本及多级菜单 |
| 普通用户 | `user`  | `123456` | 首页、文档、富文本编辑器                     |

账号与权限数据位于 [src/mock/index.ts](src/mock/index.ts)。

## 常用命令

| 命令              | 用途                                       |
| ----------------- | ------------------------------------------ |
| `pnpm dev`        | 启动开发服务，默认端口 `9000`              |
| `pnpm type-check` | 检查 TypeScript 源码与 Vue 模板类型        |
| `pnpm lint`       | 检查脚本和 Vue 模板                        |
| `pnpm lint:style` | 检查 CSS、SCSS 与 Vue 样式                 |
| `pnpm build`      | 执行类型检查并生成生产构建                 |
| `pnpm analyze:bundle` | 统计已生成 dist 中 JS、CSS、图片及 gzip 体积 |
| `pnpm check`      | 执行脚本检查、样式检查、类型检查与生产构建 |
| `pnpm preview`    | 本地预览生产构建，默认端口 `4173`          |

## 页面预览

以下截图采集于 **2026-10-21**，来自当前项目的本地生产构建。桌面视口宽度为 `1440px`，移动端视口为 `390 × 844px`；图片保存在 [docs/screenshots](docs/screenshots/)。

### 桌面端

<details>
<summary>登录页面</summary>

欢迎区与登录表单采用双栏布局，保留项目 Logo、插画和演示账号提示。

![桌面端登录页面](docs/screenshots/login-desktop.png)

</details>

<details>
<summary>深色工作台</summary>

深色主题覆盖导航、标签栏、卡片和图表容器。

![深色主题工作台](docs/screenshots/dashboard-dark.png)

</details>

<details>
<summary>项目配置</summary>

通过设置抽屉切换深浅模式、选择主题色，并控制标签栏、侧栏 Logo 和面包屑的显示。

![项目配置抽屉](docs/screenshots/settings-desktop.png)

</details>

<details>
<summary>Canvas 图片绘制</summary>

选择图片、背景色并输入文案，即可预览组合效果并导出图片。

![Canvas 案例：图片、背景色与文案绘制](docs/screenshots/canvas-desktop.png)

</details>

<details>
<summary>公共组件展示</summary>

集中展示消息、通知和确认弹窗，并提供富文本编辑入口；点击不同按钮可体验对应的反馈效果。

![公共组件展示与消息演示](docs/screenshots/pagination-desktop.png)

</details>

<details>
<summary>富文本编辑器</summary>

基于 WangEditor，提供内容编辑与常用排版工具。

![富文本编辑器示例](docs/screenshots/editor-desktop.png)

</details>

### 移动端

小于 `640px` 时，侧栏切换为带遮罩的抽屉导航；登录页收为单列，工作台卡片与图表按屏幕宽度重新排列。

<table>
  <thead>
    <tr>
      <th>登录</th>
      <th>工作台</th>
      <th>抽屉导航</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="docs/screenshots/login-mobile.png" width="250" alt="移动端登录页面" /></td>
      <td><img src="docs/screenshots/dashboard-mobile.png" width="250" alt="移动端工作台" /></td>
      <td><img src="docs/screenshots/navigation-mobile.png" width="250" alt="移动端展开导航与二级菜单" /></td>
    </tr>
  </tbody>
</table>

## 技术栈

| 类别       | 技术                     | 当前版本        |
| ---------- | ------------------------ | --------------- |
| 应用与路由 | Vue / Vue Router         | 3.5.44 / 4.6.4  |
| 组件与图标 | Element Plus / Icons Vue | 2.14.7 / 2.3.2  |
| 状态管理   | Pinia                    | 2.3.1           |
| 开发语言   | TypeScript               | 5.5.4           |
| 构建工具   | Vite / Vue 插件          | 7.3.7 / 6.0.10  |
| 原子样式   | UnoCSS                   | 66.11.0         |
| 数据可视化 | ECharts                  | 5.6.0           |
| 富文本     | WangEditor / Vue 适配器  | 5.1.23 / 5.1.12 |
| 请求与模拟 | Axios / MockJS           | 1.20.0 / 1.1.0  |

代码质量工具包括 ESLint、Stylelint、Prettier 和 vue-tsc，具体配置位于项目根目录。

## 项目结构

```text
xjy_admin/
├── docs/
│   ├── screenshots/        # 当前界面截图
│   ├── bundle-analysis.md  # 构建体积前后对比与统计口径
│   └── licenses/           # 第三方资源许可
├── public/                 # 静态资源与加载页
├── scripts/                # 构建产物体积统计
├── src/
│   ├── api/                # 接口与相关类型
│   ├── assets/             # 图片、图标等资源
│   ├── components/         # 公共组件
│   ├── config/             # 站点、界面、动效与动态图标配置
│   ├── mock/               # 演示接口与权限数据
│   ├── router/             # 常量路由与权限路由
│   ├── stores/             # 用户、布局与主题状态
│   ├── styles/             # 全局样式、主题与动效
│   ├── utils/              # 请求、存储等工具
│   ├── views/              # 登录、布局及功能页面
│   ├── permission.ts       # 路由访问控制
│   └── main.ts             # 应用入口
├── .env.development        # 开发环境变量
├── .env.production         # 生产环境变量
├── package.json            # 依赖与脚本
├── pnpm-lock.yaml          # 依赖锁文件
├── uno.config.ts           # UnoCSS 配置
└── vite.config.ts          # 构建与开发代理配置
```

## 配置说明

### 站点与界面

| 配置内容 | 文件与配置对象 |
| --- | --- |
| 项目名称、Logo、页脚、备用头像 | [src/config/setting.ts](src/config/setting.ts) 的 `basic` |
| 界面按钮、默认主题、页面设置、缓存上限、抽屉宽度 | 同文件的 `defaultSettings` |
| 默认主色与预设主题色 | 同文件的 `themeConfig` |
| 路由进度条 | 同文件的 `progressConfig` |
| 布局尺寸、菜单行高、层级缩进、箭头尺寸、动效与浮层层级 | [src/config/public.scss](src/config/public.scss) |
| 菜单与面包屑的动态图标映射 | [src/config/icons.ts](src/config/icons.ts) |
| 浅色 / 深色主题配色 | [src/styles/theme.scss](src/styles/theme.scss) |
| Element Plus Sass 基础配色 | [src/styles/element/index.scss](src/styles/element/index.scss) |

以上配置项均附有注释。`defaultSettings.page` 提供页面设置的初始值，Store 使用它的副本，抽屉中的修改不会反过来覆盖默认配置；主题选择继续保存在本地。

统一过渡时长在 `src/config/public.scss` 的 `$motion-duration` 中设置，默认 `300ms`，并输出为 `--app-motion-duration`。页面、标签和面包屑使用 Vue `Transition` / `TransitionGroup` 淡入，刷新图标使用带 `key` 的 Vue 过渡；桌面侧栏保留 Element Plus 原生展开与收起动画。设置抽屉的层级由 `$z-settings` 控制，高于导航与菜单弹层。

### 侧栏与主题色

侧栏样式在 `src/config/public.scss` 中调整，桌面导航和移动端抽屉共用同一组配置：

| 配置项 | 作用 | 当前值 |
| --- | --- | --- |
| `$layout-sidebar-width` / `$layout-sidebar-collapsed-width` | 展开 / 收起宽度 | `260px` / `64px` |
| `$layout-menu-item-height` | 菜单每一行的高度 | `42px` |
| `$layout-menu-level-indent` | 下一级相对上一级增加的缩进 | `18px` |
| `$layout-menu-base-padding` | 第一级菜单左侧内边距 | `14px` |
| `$layout-menu-icon-size` / `$layout-menu-icon-gap` | 左侧图标大小 / 与文字间距 | `20px` / `8px` |
| `$layout-menu-arrow-size` / `$layout-menu-arrow-offset` | 右侧箭头大小 / 右侧距离 | `11px` / `12px` |

`src/config/setting.ts` 的 `themeConfig.primaryColor` 默认是蓝色 `#409eff`，`themeConfig.colors` 定义设置面板中的快捷颜色。设置面板同时支持自定义颜色和恢复默认；用户选择保存在本地，菜单、按钮和页面装饰随主题色更新。首页图表保留原有蓝绿折线与五色饼图配色。

### 组件自动导入

公共组件放入 `src/components/` 或 `src/**/components/` 后可在模板中直接使用。Element Plus 组件、API 和对应 Sass 样式按需导入，富文本的 `Editor`、`Toolbar` 也由解析器处理，无需在入口注册。

静态 Element Plus 图标使用 `<ElIconSetting />`、`<ElIconRefresh />` 等名称，由现有解析器自动导入。菜单与面包屑通过字符串读取路由图标，需在 `src/config/icons.ts` 中保留相应的具名映射；这些图标不再全量注册到应用。

`src/types/auto-imports.d.ts`、`src/types/components.d.ts` 和 ESLint 的自动导入声明由插件生成。登录背景、工作台插画、404 插画和导航页签背景直接在各自页面中使用。页面导航通过 `useRouter()` / `useRoute()` 访问路由。

### 消息提示样式

消息提示继续通过 [src/Hooks/element.ts](src/Hooks/element.ts) 的 `message` 方法调用，卡片样式统一放在 [src/styles/message.scss](src/styles/message.scss)。消息底色、文字和边框随深浅主题切换，浅色模式为白底，深色模式为深色底，使用 `9px` 圆角，以不同图标及图标颜色区分成功、警告、错误和普通信息。长文本可自动换行并适配窄屏。显示时长等默认行为保留在原方法内。

### 菜单与权限

路由定义位于 [src/router/route.ts](src/router/route.ts)，通过 `meta.title`、`meta.icon` 和 `meta.isShow` 配置菜单名称、图标及显示状态。权限菜单由用户信息与动态路由配置共同生成，入口见 [src/permission.ts](src/permission.ts) 和 [src/stores/modules/user.ts](src/stores/modules/user.ts)。

### Mock 与接口

当前在 [src/main.ts](src/main.ts) 中加载 Mock 数据，登录和用户信息接口定义于 [src/mock/index.ts](src/mock/index.ts)，请求封装位于 [src/utils/request.ts](src/utils/request.ts)。

- `VITE_BASE_URL`：接口请求前缀，默认 `/api`。
- `VITE_URL`：开发代理的目标地址，在 [vite.config.ts](vite.config.ts) 中使用。

接入后端时，根据实际服务调整 Mock 入口、环境变量及接口返回结构；生产环境的接口转发由部署服务器配置。演示 Mock 使用 `/api` 前缀。

## 构建与部署

```bash
# 完成检查并生成生产构建
pnpm check

# 本地预览 dist
pnpm preview
```

构建产物输出到 `dist/`。项目使用 Hash 路由，静态部署时上传 `dist/` 内的完整文件，并保留资源目录结构。

## 构建体积

通过 `pnpm build` 生成生产产物后，执行：

```bash
pnpm analyze:bundle
# 如需完整字节数与文件明细
pnpm analyze:bundle --json
```

本次优化将全部 JS/CSS 产物从 **3.39 MB 减少至 2.36 MB**，约减少 **30.39%**；含图片等资源的完整 `dist` 从 **8.09 MB 减少至 7.06 MB**。统计包含所有懒加载页面，详细口径与前后数据见 [构建体积分析](docs/bundle-analysis.md)。

## 许可证

项目采用 [Mulan PSL v2](LICENSE)。随附资源的独立许可保存在 [docs/licenses](docs/licenses/)。
