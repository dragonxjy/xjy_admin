<template>
  <!-- 设置 -->
  <el-drawer :show-close="false" size="300" append-to-body modal-class="settings-overlay">
    <template #header>
      <div
        :class="{ blackTitle: settingStore.dark, title: !settingStore.dark }"
      >
        项目配置
      </div>
    </template>
    <div class="config">
      <!-- 主题设置 -->
      <div class="topic">
        <div :class="{ blackTip: settingStore.dark, tip: !settingStore.dark }">
          <text>主题设置</text>
        </div>
        <!-- 切换主题 -->
        <div class="changeTopic">
          <div class="topicChange" :class="{ darkBg: settingStore.dark }">
            <div
              class="topicItemLight"
              :class="{ avtiveTopicItemLight: !settingStore.dark }"
              @click="toggleDark"
            >
              <img src="../../../../assets/config/dayTime.svg" alt="" />
            </div>
            <div
              class="topicItemDark"
              :class="{ avtiveTopicItemDark: settingStore.dark }"
              @click="toggleDark"
            >
              <img src="../../../../assets/config/blackSky.svg" alt="" />
            </div>
          </div>
        </div>
        <!-- 界面设置 -->
        <div :class="{ blackTip: settingStore.dark, tip: !settingStore.dark }">
          <text>页面设置</text>
        </div>
        <div class="set">
          <div class="set_item">
            <text>开启 Tags-View</text>
            <el-switch v-model="settingStore.page_setting.isShow_Tagview" />
          </div>
          <div class="set_item">
            <text>侧边栏 Logo</text>
            <el-switch v-model="settingStore.page_setting.isShow_Logo" />
          </div>
          <div class="set_item">
            <text>展示面包屑</text>
            <el-switch v-model="settingStore.page_setting.isShow_Bread" />
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/stores/modules/setting"
import { GETDARK } from "@/utils/local"
import { toggleDark } from "@/utils/changeDark"
const settingStore = useSettingStore()
// const props = defineProps<{
//   drawerShow: boolean
// }>()
// const emit = defineEmits<{
//   changeDrawer: [val: boolean]
// }>()
// const drawerShowa = computed({
//   get() {
//     return props.drawerShow
//   },
//   set(newVal) {
//     emit("changeDrawer", newVal)
//   },
// })
// const model = defineModel("drawerShow", { default: false })
</script>

<style scoped lang="scss">
.title,
.blackTitle {
  font-size: 16px;
  font-weight: 600;
  color: var(--app-text);
}

.config {
  .tip,
  .blackTip {
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 8px 0 20px;
    font-size: 13px;
    font-weight: 500;
    color: var(--app-text-secondary);

    &::before,
    &::after {
      flex: 1;
      height: 1px;
      content: "";
      background: var(--app-border);
    }
  }

  .changeTopic {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }

  .topicChange {
    display: flex;
    gap: 4px;
    width: 180px;
    padding: 4px;
    background: var(--app-surface-soft);
    border: 1px solid var(--app-border);
    border-radius: var(--app-radius);
  }

  .topicItemLight,
  .topicItemDark {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 34px;
    cursor: pointer;
    border-radius: 6px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .avtiveTopicItemLight,
  .avtiveTopicItemDark {
    background: var(--app-surface);
    box-shadow: var(--app-shadow);
  }

  .set_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 48px;
    font-size: 13px;
    color: var(--app-text-secondary);
    border-bottom: 1px solid var(--app-border);
  }
}
</style>
