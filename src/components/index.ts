import SvgIcon from "./SvgIcon/index.vue"
import LayoutMenu from "./LayoutMenu/index.vue"
import tagViews from "./TagViews/index.vue"
import Drawer from "./Drawer/index.vue"
// element-plus组件
import Pagination from "./ElementPlus_components/el-pagination/index.vue"

// element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
const componentsVue: any = {
  SvgIcon,
  LayoutMenu,
  tagViews,
  Drawer,
  Pagination,
}

export default {
  install: (app: any) => {
    Object.keys(componentsVue).forEach((component) => {
      app.component(component, componentsVue[component])
    })
    // 全局注册图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
