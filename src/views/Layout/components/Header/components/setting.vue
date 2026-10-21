<template>
  <div class="setting">
    <button class="refresh" type="button" aria-label="刷新当前页面" title="刷新当前页面" @click="refresh" v-if="defaultSettings.isShowMenu">
      <div ref="refreshRef" class="refreshContent"><el-icon :size="20"><Refresh /></el-icon></div>
    </button>
    <button class="tab-full-screen" type="button" aria-label="全屏预览" title="全屏预览" @click="toggle" v-show="defaultSettings.isFullScreen">
      <img src="../../../../../assets/config/fullScreen.svg" alt="" v-show="!isFullscreen" />
      <img src="../../../../../assets/config/nofullScreen.svg" alt="" v-show="isFullscreen" />
    </button>
    <button class="full_Screen" type="button" aria-label="切换全屏" title="切换全屏" @click="toggle" v-show="defaultSettings.isFullScreen">
      <img src="../../../../../assets/config/fullScreen.svg" alt="" v-show="!isFullscreen" />
      <img src="../../../../../assets/config/nofullScreen.svg" alt="" v-show="isFullscreen" />
    </button>
    <button class="topic" type="button" aria-label="切换亮色或暗色主题" title="主题模式" @click="toggleDark">
      <img src="../../../../../assets/config/dayTime.svg" alt="" v-show="!settingStore.dark" />
      <img src="../../../../../assets/config/blackSky.svg" alt="" v-show="settingStore.dark" />
    </button>
    <button class="set" type="button" aria-label="主题配置" title="主题配置" @click="set" v-show="defaultSettings.isSet">
      <el-icon :size="20"><Setting /></el-icon>
    </button>
    <div class="setting-user">
      <el-dropdown trigger="click">
        <button class="user" type="button" aria-label="用户菜单">
          <el-avatar :size="24" :src="userStore.userinfo.avatar" @error="() => true">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="" />
          </el-avatar>
          <span class="nickname">{{ userStore.userinfo.username }}</span>
        </button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goUrl"><el-icon><Link /></el-icon>项目地址</el-dropdown-item>
            <el-dropdown-item @click="loginOut"><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <Drawer v-model="drawerShow" />
  </div>
</template>

<script setup lang="ts">
import { defaultSettings } from "@/config/setting"
import { useFullscreen } from "@vueuse/core"
import { useSettingStore } from "@/stores/modules/setting"
import { useUserStore } from "@/stores/modules/user"
import { toggleDark } from "@/utils/changeDark"
import { messageBox } from "@/Hooks/element"
const { isFullscreen, toggle } = useFullscreen()
const settingStore = useSettingStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

// 刷新
const refreshRef = ref<HTMLDivElement | null>(null)
const refresh = () => {
  settingStore.changeFlush()
  const element = refreshRef.value
  if (!element) return
  // 添加类
  element.classList.add("animate__animated", "animate__rotateIn")
  // 等动画结束，移除类及本次监听
  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove("animate__animated", "animate__rotateIn")
    },
    { once: true },
  )
}
// 退出登录
const loginOut = async () => {
  try {
    await messageBox("提示", "您确定要退出登录吗？", "primary")
  } catch {
    return
  }
  userStore.loginOut()
  router.push({
    path: "/login",
    query: {
      url: route.path,
    },
  })
}
const goUrl = () => {
  window.open("https://gitee.com/dragon-xjy/xjy_admin")
}
// 设置
const drawerShow = ref(false)
const set = () => {
  drawerShow.value = true
}
</script>

<style scoped lang="scss">
.setting {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: $layout-header_height;

  button {
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

  .refresh,
  .tab-full-screen {
    position: fixed;
    top: 60px;
    z-index: 25;
  }

  .refresh {
    right: 56px;
  }

  .tab-full-screen {
    right: 12px;
  }

  .topic > img,
  .full_Screen > img,
  .tab-full-screen > img {
    width: 20px;
    height: 20px;
  }

  .refreshContent {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .setting-user {
    cursor: pointer;
  }

  .user {
    gap: 8px;
    width: auto;
    padding: 0 12px;

    .el-avatar {
      flex-shrink: 0;
    }

    .nickname {
      max-width: 110px;
      overflow: hidden;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: var(--app-text);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

@media (width < 640px) {
  .setting {
    .full_Screen {
      display: none;
    }

    .user .nickname {
      max-width: 72px;
    }
  }
}
</style>
