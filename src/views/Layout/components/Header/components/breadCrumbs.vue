<template>
  <div class="bread_crumbs" v-if="defaultSettings.isShowMenu">
    <button
      class="toggle"
      type="button"
      aria-label="展开或收起导航菜单"
      aria-controls="main-navigation mobile-main-navigation"
      :aria-pressed="settingStore.flag"
      @click="changeFlag"
    >
      <el-icon size="20">
        <component :is="settingStore.flag ? 'Expand' : 'Fold'" />
      </el-icon>
    </button>
    <el-breadcrumb
      separator="/"
      v-show="settingStore.page_setting.isShow_Bread"
    >
      <el-breadcrumb-item
        v-for="(item, i) in routeComputed"
        :key="i"
        :to="{ path: item.path }"
        v-show="item.meta.title"
        class="animate__animated animate__fadeIn"
      >
        <span class="breadcrumb-content">
          <el-icon v-if="item.meta.icon">
            <component :is="item.meta.icon" />
          </el-icon>
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/stores/modules/setting"
import { defaultSettings } from "@/config/setting"
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

  return breadcrumbRoute
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

@media (width < 640px) {
  .bread_crumbs .el-breadcrumb {
    display: none;
  }
}
</style>
