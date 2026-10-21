<template>
  <div class="component-showcase">


    <div class="showcase-grid">
      <el-card class="demo-card message-demo">
        <template #header><h2>消息提示</h2></template>
        <p>不同状态使用对应的图标与颜色，提示会自动关闭。</p>
        <div class="demo-actions">
          <el-button type="success" plain @click="message('success', '保存成功，最新配置已生效')">成功提示</el-button>
          <el-button type="warning" plain @click="message('warning', '请检查填写内容后再继续操作')">警告提示</el-button>
          <el-button type="danger" plain @click="message('error', '提交失败，请稍后重试')">错误提示</el-button>
          <el-button type="info" plain @click="message('info', '这是一条普通消息，欢迎体验公共组件')">普通提示</el-button>
          <el-button plain @click="message('info', '这是一条较长的提示消息：页面内容已更新，你可以继续浏览。窄屏下文本会自动换行，保持完整、清晰的阅读体验。')">长文本提示</el-button>
        </div>
      </el-card>

      <el-card class="demo-card">
        <template #header><h2>通知提醒</h2></template>
        <p>适合展示带标题的任务结果和操作提醒。</p>
        <div class="demo-actions">
          <el-button type="primary" plain @click="notification('任务已完成', '本次操作已处理完成，可以继续下一步。', 'success')">成功通知</el-button>
          <el-button plain @click="notification('待办提醒', '你有一项新的待办，请及时查看。', 'info')">普通通知</el-button>
        </div>
      </el-card>

      <el-card class="demo-card">
        <template #header><h2>确认弹窗</h2></template>
        <p>体验确认与取消操作，这里的演示不会修改业务数据。</p>
        <div class="demo-actions">
          <el-button type="primary" @click="confirmDemo">打开确认弹窗</el-button>
        </div>
      </el-card>

      <el-card class="demo-card editor-entry">
        <template #header><h2>富文本编辑</h2></template>
        <el-icon class="editor-entry-icon"><ElIconEditPen /></el-icon>
        <p>在独立示例中体验文本输入、排版和内容编辑。</p>
        <el-button type="primary" plain @click="router.push('/components/edit')">打开富文本示例</el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { message, messageBox, notification } from "@/Hooks/element"

const router = useRouter()
const confirmDemo = async () => {
  try {
    await messageBox("操作确认", "是否继续本次演示操作？", "warning")
    message("success", "已确认本次演示操作")
  } catch (action) {
    if (action === "cancel" || action === "close") {
      message("info", "已取消操作")
    }
  }
}
</script>

<style scoped lang="scss">
.component-showcase {
  display: grid;
  gap: var(--app-gap);
  min-width: 0;

  h1,
  h2,
  p {
    margin: 0;
  }

  h1 {
    margin: 8px 0;
    font-size: 22px;
    font-weight: 600;
    color: var(--app-text);
  }

  h2 {
    font-size: 15px;
    font-weight: 600;
    color: var(--app-text);
  }

  p {
    font-size: 13px;
    line-height: 1.8;
    color: var(--app-text-muted);
  }
}

.showcase-intro :deep(.el-card__body) {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}

.showcase-kicker {
  font-size: 11px;
  font-weight: 600;
  color: var(--el-color-primary);
  letter-spacing: 2px;
}

.intro-icon {
  flex-shrink: 0;
  padding: 16px;
  font-size: 64px;
  color: var(--el-color-primary);
  background: var(--app-primary-soft);
  border-radius: 18px;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--app-gap);
}

.demo-card {
  min-width: 0;

  :deep(.el-card__header) {
    padding: 18px 24px;
    border-color: var(--app-border);
  }
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;

  .el-button + .el-button {
    margin-left: 0;
  }
}

.editor-entry-icon {
  margin-bottom: 12px;
  font-size: 32px;
  color: var(--el-color-primary);
}

.editor-entry p {
  margin-bottom: 20px;
}

@media (width < $layout-mobile-breakpoint) {
  .showcase-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .component-showcase h1 {
    font-size: 18px;
  }

  .intro-icon {
    padding: 10px;
    font-size: 44px;
    border-radius: 12px;
  }
}
</style>
