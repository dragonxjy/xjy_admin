<template>
  <!-- 中文 -->
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from "element-plus/es/locale/lang/zh-cn"
import { useSettingStore } from "@/stores/modules/setting"
const settings = useSettingStore()
watchEffect(() => {
  document.documentElement.classList.toggle("dark", settings.dark)
  document.documentElement.style.setProperty("--app-primary-color", settings.primaryColor)
})
</script>
<style></style>
