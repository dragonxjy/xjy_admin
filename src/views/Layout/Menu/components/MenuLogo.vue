<template>
  <div
    class="layout_logo"
    :class="{ 'logo-collapsed': settingStore.flag }"
    v-show="settingStore.page_setting.isShow_Logo"
    @click="pushHome"
  >
    <span class="logo-mark"><img :src="basic.logo" alt="" /></span>
    <span class="title">{{ basic.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { basic } from "@/config/setting"
import { useSettingStore } from "@/stores/modules/setting"
import { useRouter } from "vue-router"
const settingStore = useSettingStore()
const router = useRouter()
const pushHome = () => {
  router.push({
    path: "/",
  })
}
</script>

<style scoped lang="scss">
.layout_logo {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  height: $layout-Logo-height;
  overflow: hidden;
  cursor: pointer;

  .logo-mark {
    display: flex;
    flex: 0 0 var(--app-sidebar-collapsed-width);
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  img {
    width: $layout-logo_width;
    height: $layout-logo_height;
    object-fit: contain;
  }

  .title {
    min-width: 0;
    padding-right: 16px;
    overflow: hidden;
    font-size: $layout-title_size;
    font-weight: 600;
    color: var(--el-color-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: opacity var(--app-sidebar-duration) var(--app-sidebar-easing), visibility var(--app-sidebar-duration) var(--app-sidebar-easing);
  }

  &.logo-collapsed .title {
    visibility: hidden;
    opacity: 0;
  }
}
</style>
