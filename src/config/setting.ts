import logo from "@/assets/logo.png"

/** 站点信息：登录页、导航、页脚和浏览器标题共用。 */
export const basic = {
  // 项目 Logo，使用本地资源以便随构建发布。
  logo,
  // 项目名称，也是浏览器标题的前缀。
  title: "xjy_admin",
  // 登录页与后台布局底部的版权文案。
  footer: "Copyright © xjy_admin",
  // 用户头像加载失败时使用的备用图片。
  fallbackAvatar:
    "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
}

/** 界面默认值；页面设置修改的是 Store 中的副本。 */
export const defaultSettings = {
  // 显示全屏按钮。
  isFullScreen: true,
  // 显示项目配置按钮。
  isSet: true,
  // 显示页面刷新按钮。
  isShowRefresh: true,
  // 显示导航展开 / 收起按钮，不影响面包屑的独立开关。
  isShowMenuToggle: true,
  // 显示太阳 / 月亮主题切换按钮。
  isShowThemeSwitch: true,
  // 显示后台布局底部的版权信息。
  isShowFooter: true,
  // 是否默认收起桌面导航；移动端复用该状态控制抽屉开关。
  sidebarCollapsed: false,
  // 本地没有保存主题时是否默认使用深色主题。
  dark: false,
  // 启用 Vue 页面淡入过渡；时长在 public.scss 中统一设置。
  routeTransition: true,
  // 同时缓存的页面数，避免长期切换页面无限增加缓存。
  pageCacheLimit: 20,
  // 设置抽屉宽度（px），窄屏仍受响应式样式约束。
  settingsWidth: 300,
  // 页面设置的初始值，供设置抽屉切换。
  page: {
    // 显示已访问页面的标签栏。
    isShow_Tagview: true,
    // 显示导航顶部的 Logo 和项目名称。
    isShow_Logo: true,
    // 显示当前页面的面包屑。
    isShow_Bread: true,
  },
}

/** 项目主题色，设置面板与图表共用；用户选择会保存在本地。 */
export const themeConfig = {
  // 默认主题色；本地没有有效颜色时使用此蓝色。
  primaryColor: "#409eff",
  // 设置面板提供的快捷主题色，可按项目需求增减。
  colors: [
    { name: "蓝色", value: "#409eff" },
    { name: "青色", value: "#14b8a6" },
    { name: "紫色", value: "#8b5cf6" },
    { name: "玫红", value: "#ec4899" },
    { name: "橙色", value: "#f97316" },
    { name: "绿色", value: "#22c55e" },
  ],
}

/** 路由顶部加载进度条的配置。 */
export const progressConfig = {
  // 进度变化的缓动方式。
  easing: "ease",
  // 单次进度动画时长（ms），独立于界面主题过渡。
  speed: 300,
  // 是否显示进度条旁边的加载圆圈。
  showSpinner: false,
  // 自动递增进度的间隔（ms）。
  trickleSpeed: 200,
  // 进度条开始时的最小进度，范围为 0～1。
  minimum: 0.3,
  // 挂载进度条的容器选择器。
  parent: "body",
}
