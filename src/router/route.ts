/***
 * @常量路由
 */
export const constRouter = [
  {
    path: "/login",
    meta: { title: "登录", icon: "", isShow: false },
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/",
    redirect: "home",
    meta: { title: "", icon: "", isShow: false },
    component: () => import("@/views/Layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "首页", icon: "HomeFilled", isShow: true },
        component: () => import("@/views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "home",
    meta: { title: "", icon: "", isShow: false },
    component: () => import("@/views/Layout/index.vue"),
    children: [
      {
        path: "/document",
        name: "document",
        meta: { title: "文档", icon: "Document", isShow: true },
        component: () => import("@/views/Document/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    meta: { title: "404", isShow: false },
    component: () => import("@/views/404/index.vue"),
  },
]
/****
 * @异步路由也叫权限路由
 */
export const asyncRouter = [
  {
    path: "/components",
    name: "components",
    redirect: "/components/pagination",
    meta: { title: "封装组件", icon: "Menu", isShow: false },
    component: () => import("@/views/Layout/index.vue"),
    children: [
      {
        path: "/components/pagination",
        name: "pagination",
        meta: { title: "分页器 ", icon: "MoreFilled", isShow: true },
        component: () => import("@/views/Components/pagination/index.vue"),
      },
      {
        path: "/components/edit",
        name: "edit",
        meta: { title: "富文本编辑器 ", icon: "Monitor", isShow: true },
        component: () => import("@/views/Components/edit/index.vue"),
      },
    ],
  },
]
/***
 * @任意路由
 */
export const anyRouter = [
  //任意路由
  {
    path: "/:pathMatch(.*)*",
    // name: 'Any',
    meta: { title: "任意路由", isShow: false },
    redirect: "/404",
  },
]
