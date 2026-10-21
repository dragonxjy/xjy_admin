import {
  DArrowRight,
  Document,
  EditPen,
  Grid,
  HomeFilled,
  Menu,
  Monitor,
  Operation,
} from "@element-plus/icons-vue"
import type { Component } from "vue"

/** 动态菜单无法由模板静态分析；只保留路由实际使用的图标，不全局注册。 */
export const menuIcons: Record<string, Component> = {
  // 首页。
  HomeFilled,
  // 文档。
  Document,
  // Canvas 案例。
  EditPen,
  // 封装组件分组。
  Menu,
  // 公共组件示例。
  Grid,
  // 富文本编辑器。
  Monitor,
  // 多级菜单分组。
  Operation,
  // 多级菜单子项。
  DArrowRight,
}

/** 菜单和面包屑共用；未配置或不存在的图标不渲染。 */
export const resolveMenuIcon = (name: unknown) =>
  typeof name === "string" && Object.hasOwn(menuIcons, name)
    ? menuIcons[name]
    : undefined
