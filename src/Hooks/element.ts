import { ElMessage, ElMessageBox, ElNotification } from "element-plus"
import type {
  ElMessageBoxOptions,
  MessageType,
  NotificationType,
} from "element-plus"
// 提示
export const message = (type: MessageType, message: string) => {
  ElMessage({
    message,
    type,
    plain: true,
    duration: 1000,
  })
}
// 通知
export const notification = (
  title: string,
  message: string,
  type: NotificationType,
) => {
  ElNotification({
    title,
    message,
    type,
    duration: 1000,
    showClose: false,
  })
}
// 确认弹窗
export const messageBox = async (
  title: string,
  content: string,
  type: ElMessageBoxOptions["type"],
) => {
  await ElMessageBox.confirm(content, title, {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type,
  })
}
