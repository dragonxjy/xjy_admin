import { useSettingStore } from "@/stores/modules/setting"

export const toggleDark = () => {
  useSettingStore().changeDark()
}
