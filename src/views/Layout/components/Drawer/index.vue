<template>
  <!-- 设置 -->
  <el-drawer :show-close="false" :size="defaultSettings.settingsWidth" append-to-body modal-class="settings-overlay">
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
        <div class="theme-color-setting">
          <div class="theme-color-heading">
            <span>主题色</span>
            <el-button text size="small" @click="settingStore.changePrimaryColor(themeConfig.primaryColor)">
              恢复默认
            </el-button>
          </div>
          <div class="theme-color-presets" aria-label="预设主题色">
            <button
              v-for="color in themeConfig.colors"
              :key="color.value"
              type="button"
              class="theme-color-swatch"
              :style="{ backgroundColor: color.value }"
              :aria-label="`切换为${color.name}主题`"
              :aria-pressed="settingStore.primaryColor === color.value"
              :title="color.name"
              @click="settingStore.changePrimaryColor(color.value)"
            >
              <ElIconCheck v-if="settingStore.primaryColor === color.value" />
            </button>
          </div>
          <label class="custom-theme-color">
            <span>自定义颜色</span>
            <input
              type="color"
              aria-label="自定义主题色"
              :value="settingStore.primaryColor"
              @input="settingStore.changePrimaryColor(($event.target as HTMLInputElement).value)"
            />
          </label>
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
import { defaultSettings, themeConfig } from "@/config/setting"
import { toggleDark } from "@/utils/changeDark"
const settingStore = useSettingStore()
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


  .theme-color-setting {
    margin-bottom: 28px;
  }

  .theme-color-heading,
  .custom-theme-color {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: var(--app-text-secondary);
  }

  .theme-color-presets {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin: 12px 0 16px;
  }

  .theme-color-swatch {
    display: grid;
    flex: 0 1 30px;
    place-items: center;
    width: 30px;
    height: 30px;
    padding: 5px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    border: 0;
    border-radius: 6px;

    &[aria-pressed="true"] {
      outline: 2px solid var(--el-color-primary);
      outline-offset: 3px;
    }
  }

  .custom-theme-color input {
    width: 32px;
    height: 28px;
    padding: 2px;
    cursor: pointer;
    background: var(--app-surface);
    border: 1px solid var(--app-border);
    border-radius: 6px;
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
