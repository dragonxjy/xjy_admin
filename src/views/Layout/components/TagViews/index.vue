<template>
  <div
    v-show="settingStore.page_setting.isShow_Tagview"
    class="tagView"
  >
    <el-scrollbar>
      <div class="tags animate__animated animate__fadeInDown animate__faster">
        <template v-for="(item, i) in tagViewArr" :key="item.title">
          <el-tag
            :closable="tagViewArr.length !== 1 && i !== 0"
            @close="closeTag(i, item.path)"
            @click="changeTag(item)"
            :class="{ tagItem: true, activeTag: route.path === item.path }"
          >
            <ChromeTabBackground />
            <div class="tagContent">
              <el-icon>
                <HomeFilled v-if="item.path === '/home'" />
                <Document v-else />
              </el-icon>
              <text>{{ item.title }}</text>
            </div>
          </el-tag>
        </template>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/stores/modules/setting"
const settingStore = useSettingStore()
const router = useRouter()
const route = useRoute()
// 黑暗模式
const isDark = computed(() => {
  let dark = false
  if (settingStore.dark) {
    dark = true
  } else {
    dark = false
  }
  return dark
})
interface routeObj {
  path: string
  title: string
  query:any
}
const tagViewArr = ref(<routeObj[]>[
  {
    path: "/home",
    title: "首页",
    query:{}

  },
])

watch(
  () => route.path,
  (newVal) => {
    let rouiteObj = <routeObj>{
      path: route.path,
      title: route.meta.title as string,
      query: route.query,
    }
    // 判断是否路劲相同
    let isInclude = tagViewArr.value.find((item: routeObj) => {
      return item.path === rouiteObj.path
    })
    if (isInclude) return
    tagViewArr.value=[...tagViewArr.value,rouiteObj]
  },
  { immediate: true },
)

// 切换tag
const changeTag = (item:any) => {
  router.push({ path: item.path, query: item.query })
}
// 关闭tag
const closeTag = (i: number, path: string) => {
  if (path === route.path) {
    tagViewArr.value.splice(i, 1)
    router.push({path:tagViewArr.value[tagViewArr.value.length - 1].path,query:tagViewArr.value[tagViewArr.value.length - 1].query})
  } else {
    tagViewArr.value.splice(i, 1)
  }
}
</script>

<style scoped lang="scss">
.tagView {
  z-index: var(--app-z-tabs);
  flex-shrink: 0;
  height: 44px;
  padding: 0 108px 0 16px;
  background: var(--app-surface) !important;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);

  :deep(.el-scrollbar__view) {
    height: 44px;
  }

  .tags {
    display: flex;
    align-items: flex-end;
    width: max-content;
    min-width: 100%;
    height: 44px;
    padding-right: 18px;
  }

  .tagItem {
    position: relative;
    z-index: 1;
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    height: 34px;
    padding: 6px 24px;
    margin-right: -18px;
    overflow: visible;
    font-size: 14px;
    line-height: 22px;
    color: var(--app-text-secondary);
    cursor: pointer;
    background: transparent;
    isolation: isolate;
    border: 0;
    border-radius: 0;

    &::after {
      position: absolute;
      top: 9px;
      right: 7px;
      width: 1px;
      height: 16px;
      content: "";
      background: var(--app-border);
    }

    :deep(.chrome-tab-background) {
      color: transparent;
    }

    &:hover {
      z-index: 9;

      :deep(.chrome-tab-background) {
        color: var(--app-surface-soft);
      }
    }

    .tagContent {
      display: flex;
      gap: 12px;
      align-items: center;

      .el-icon {
        font-size: 16px;
      }

      text {
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    &.activeTag {
      z-index: var(--app-z-tabs);
      color: var(--el-color-primary);

      :deep(.chrome-tab-background) {
        color: var(--app-primary-soft);
      }
    }

    &.activeTag::after,
    &:hover::after {
      opacity: 0;
    }

    :deep(.el-tag__close) {
      width: 16px;
      height: 16px;
      margin-left: 16px;
      color: inherit;

      &:hover {
        color: var(--app-surface);
        background: var(--el-color-primary);
      }
    }
  }
}
</style>
