import { GETCOLOR, GETDARK, SETCOLOR, SETDARK } from "@/utils/local"
import { defaultSettings, themeConfig } from "@/config/setting"
import { isThemeColor } from "@/utils/theme"
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useSettingStore = defineStore(
  "setting",
  () => {
    /***
     * @刷新
     */
    const flush = ref(false)
    const changeFlush = () => {
      flush.value = !flush.value
    }
    /***
     * @侧边栏的折叠
     */
    const flag = ref(defaultSettings.sidebarCollapsed)
    const changeFlag = () => {
      flag.value = !flag.value
    }
    /**
     * @主题相关
     */
    const dark = ref(GETDARK())
    const changeDark = () => {
      dark.value = !dark.value
      SETDARK(dark.value)
    }
    // 主色独立于深浅模式保存，切换模式时保留用户选择。
    const savedColor = GETCOLOR()
    const primaryColor = ref(
      isThemeColor(savedColor) ? savedColor.toLowerCase() : themeConfig.primaryColor,
    )
    const changePrimaryColor = (color: string | null) => {
      if (!isThemeColor(color)) return
      primaryColor.value = color.toLowerCase()
      SETCOLOR(primaryColor.value)
    }
    /**
     * @页面设置
     */
    const page_setting = reactive({ ...defaultSettings.page })

    return {
      flag,
      dark,
      primaryColor,
      flush,
      page_setting,
      changeFlag,
      changeFlush,
      changeDark,
      changePrimaryColor,
    }
  },
)
