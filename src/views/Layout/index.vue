<template>
  <div class="layout">
    <div
      id="main-navigation"
      class="layout-menu"
      :class="{
        'layout-min-menu': flag,
        bgMenuClassDark: dark,
      }"
    >
      <!-- 标题与logo -->
      <MenuLogo />
      <el-menu
        class="desktop-menu"
        popper-class="collapsed-navigation-popup"
        router
        :default-active="route.path"
        :collapse="flag"
        :collapse-transition="true"
        active-text-color="var(--el-color-primary)"
      >
        <MenuItem :menuRouteList="routerMenuList" />
      </el-menu>
    </div>
    <div class="mobile-navigation" :class="{ 'is-open': flag }">
      <button
        type="button"
        class="mobile-menu-mask"
        aria-label="关闭导航菜单"
        :tabindex="flag ? 0 : -1"
        @click="settingStore.changeFlag"
      ></button>
      <aside id="mobile-main-navigation" class="mobile-menu-panel" :inert="!flag" aria-label="主导航">
        <MenuLogo />
        <el-menu
          router
          :default-active="route.path"
          :collapse="false"
          active-text-color="var(--el-color-primary)"
          @select="settingStore.changeFlag"
        >
          <MenuItem :menuRouteList="routerMenuList" />
        </el-menu>
      </aside>
    </div>
    <!-- 主体 -->
    <div
      class="layout-main"
      :class="{
        'layout-max-main': flag,
      }"
    >
      <!-- 头部 -->
      <div class="layout-header">
        <Header />
      </div>
      <!-- 导航栏 -->
      <TagViews />
      <!-- 主体部分 -->
      <div class="main-content">
        <router-view v-if="isflag" v-slot="{ Component }">
          <Transition
            name="app-fade"
            :css="defaultSettings.routeTransition"
            mode="out-in"
          >
            <KeepAlive :max="defaultSettings.pageCacheLimit">
              <component :is="Component" :key="route.path" />
            </KeepAlive>
          </Transition>
        </router-view>
      </div>
      <footer v-if="defaultSettings.isShowFooter" class="layout-footer">{{ basic.footer }}</footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { basic, defaultSettings } from "@/config/setting"
import { useSettingStore } from "@/stores/modules/setting"
import { useUserStore } from "@/stores/modules/user"

import { storeToRefs } from "pinia"
const route = useRoute()
const settingStore = useSettingStore()
const userStore = useUserStore()
const { routerMenuList } = storeToRefs(userStore)
const { flag, dark } = storeToRefs(settingStore)
let isflag = ref(true)
// 刷新
watch(
  () => settingStore.flush,
  () => {
    //让组件销毁
    isflag.value = false
    nextTick(() => {
      isflag.value = true
    })
  },
)
</script>

<style scoped lang="scss">
@use "./index";
</style>
