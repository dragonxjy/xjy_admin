<template>
  <div class="wang_edit" :class="{ dark: useSetting.dark }">
    <Toolbar
      id="toolbar-container"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="default"
    />
    <Editor
      id="editor-container"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/stores/modules/setting"
import "@wangeditor/editor/dist/css/style.css" // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue"
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
const useSetting = useSettingStore()
const props = withDefaults(
  defineProps<{
    height: string
  }>(),
  {
    height: "560px",
  },
)

const valueHtml = defineModel()
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const toolbarConfig = {}
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    uploadImage: {
      // 自定义图片上传
      async customUpload(file: any, insertFn: any) {
        console.log(file, insertFn)
        // 调用后端接口，上传图片
        // 拿到上传路劲插入编辑器
        // insertFn(url)
      },
    },
  },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style scoped lang="scss">
.wang_edit {
  overflow: hidden;
  background: var(--app-surface);
  border: 1px solid var(--app-border);
  border-radius: var(--app-radius);
  box-shadow: var(--app-shadow);

  --w-e-textarea-bg-color: var(--app-surface);
  --w-e-textarea-color: var(--app-text);
  --w-e-toolbar-bg-color: var(--app-surface);
  --w-e-toolbar-color: var(--app-text-secondary);
  --w-e-toolbar-border-color: var(--app-border);
  --w-e-toolbar-active-color: var(--el-color-primary);
  --w-e-toolbar-active-bg-color: var(--app-primary-soft);
  --w-e-toolbar-disabled-color: var(--app-text-muted);
  --w-e-modal-button-bg-color: var(--app-surface-soft);
  --w-e-modal-button-border-color: var(--app-border);
  --w-e-textarea-border-color: var(--app-border);
  --w-e-textarea-slight-bg-color: var(--app-surface-soft);
  --w-e-textarea-slight-color: var(--app-text-secondary);
  --w-e-textarea-selected-border-color: var(--el-color-primary);

  #toolbar-container {
    border-bottom: 1px solid var(--app-border);
  }

  #editor-container {
    height: v-bind("props.height") !important;
    min-height: 320px;
    overflow: hidden;
  }
}
</style>
