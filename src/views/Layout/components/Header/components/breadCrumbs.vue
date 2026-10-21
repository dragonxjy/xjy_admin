<template>
  <div class="bread_crumbs">
    <button
      v-if="defaultSettings.isShowMenuToggle"
      class="toggle"
      type="button"
      aria-label="展开或收起导航菜单"
      aria-controls="main-navigation mobile-main-navigation"
      :aria-pressed="settingStore.flag"
      @click="changeFlag"
    >
      <el-icon size="20">
        <ElIconExpand v-if="settingStore.flag" />
        <ElIconFold v-else />
      </el-icon>
    </button>
    <el-breadcrumb
      separator="/"
      v-show="settingStore.page_setting.isShow_Bread"
    >
      <TransitionGroup name="app-fade" appear>
        <el-breadcrumb-item
          v-for="item in routeComputed"
          :key="item.path"
          :to="{ path: item.path }"
        >
          <span class="breadcrumb-content">
            <el-icon v-if="item.meta.icon">
              <component :is="resolveMenuIcon(item.meta.icon)" />
            </el-icon>
            {{ item.meta.title }}
          </span>
        </el-breadcrumb-item>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { useSettingStore } from "@/stores/modules/setting"
import { defaultSettings } from "@/config/setting"
import { resolveMenuIcon } from "@/config/icons"
import { constRouter } from "@/router/route"
const route = useRoute()
const router = useRouter()

const settingStore = useSettingStore()
// 切换
const changeFlag = () => {
  settingStore.changeFlag()
}
// 计算面包屑
const routeComputed = computed(() => {
  let isHasHome = route.matched.find((route) => {
    return route.path === "/"
  })
  let breadcrumbRoute = [] as any
  if (isHasHome) {
    breadcrumbRoute = route.matched
  } else {
    let homeArr = constRouter.find((route) => {
      return route.path === "/"
    })?.children
    breadcrumbRoute = homeArr!.concat(route.matched as any)
  }

  return breadcrumbRoute.filter((item) => item.meta?.title)
})
</script>

<style scoped lang="scss">
.bread_crumbs {
  display: flex;
  align-items: center;
  height: $layout-header_height;

  .toggle {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 36px;
    padding: 0;
    color: var(--app-text-secondary);
    cursor: pointer;
    background: transparent;
    border: 0;
    border-radius: 3px;

    &:hover {
      background: var(--app-surface-soft);
    }
  }

  .el-breadcrumb {
    margin-left: 12px;
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
  }

  .breadcrumb-content {
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: var(--app-text-secondary);

    .el-icon {
      font-size: 20px;
    }
  }
}

@media (width < $layout-mobile-breakpoint) {
  .bread_crumbs .el-breadcrumb {
    display: none;
  }
}
</style>
