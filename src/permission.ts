//路由鉴权
import nprogress from "./utils/nprogress"
import { basic } from "./config/setting"
import router from "@/router"
import piniaStore from "./stores/index"
import { useUserStore } from "@/stores/modules/user"
import { GETTOKEN } from "./utils/local"
import { message } from "./Hooks/element"
import { nextTick } from "vue"
// 在路由守卫内部获取store实例
let userStore: ReturnType<typeof useUserStore>
//全局前置守卫
router.beforeEach(async (to, from, next) => {
  userStore = useUserStore()
  nprogress.start()
  document.title = `${basic.title}-${to.meta.title}`
  //用户信息
  const userInfo = userStore.userinfo
  if (GETTOKEN()) {
    if (to.path !== "/login") {
      //判断有没有用户信息
      if (Object.keys(userInfo).length === 0) {
        try {
          await userStore.getUserInfo(GETTOKEN()!)
          next({ ...to })
        } catch (error: any) {
          message("error", error.message)
          await userStore.loginOut()
          next({ path: "/login", query: { url: to.path } })
        }
      } else {
        next()
      }
    } else {
      next({ path: "/" })
    }
  } else {
    if (to.path !== "/login") {
      next({ path: "/login", query: { url: to.path } })
    } else {
      next()
    }
  }
})

//全局后置守卫
router.afterEach((to, from, next) => {
  nprogress.done()
})
