<template>
  <div class="bread_crumbs">
    <div class="toggle" @click="changeFlag">
      <el-icon size="16">
        <component :is="settingStore.flag ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <el-breadcrumb
      separator="/"
      v-show="settingStore.page_setting.isShow_Bread"
    >
      <el-breadcrumb-item
        v-for="item in route.matched"
        :to="{ path: item.path }"
        v-show="item.meta.title"
        class="animate__animated animate__fadeInRight animate__faster"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/stores/modules/setting"
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()

const settingStore = useSettingStore()
// 切换
const changeFlag = () => {
  settingStore.changeFlag()
}
</script>

<style scoped lang="scss">
.bread_crumbs {
  display: flex;
  align-items: center;
  height: $layout-header_height;
  .toggle {
    height: 100%;
    display: flex;
    align-items: center;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-breadcrumb {
    margin-left: 10px;
    font-size: 12px;
  }
}
</style>
