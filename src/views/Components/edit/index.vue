<template>
  <div class="app-container">
    <Editor
      id="tinymce"
      v-model="tinymceHtml"
      :init="init"
      v-if="isTinymce"
    ></Editor>
  </div>
</template>
<script setup>
/**
 * @安装两个 pnpm install tinymce@^7
 *       pnpm install --save "@tinymce/tinymce-vue@^4"
 */
/**
 * @官方文档 https://www.tiny.cloud/docs/tinymce/latest/getting-started/
 */
import { computed, nextTick, ref, watch } from "vue"
import { useSettingStore } from "@/stores/modules/setting"
import tinymce from "tinymce/tinymce"
import Editor from "@tinymce/tinymce-vue" // 引入组
import "tinymce/themes/silver/theme"
import "tinymce/icons/default/icons"
import "tinymce/models/dom" // 一定要引入
import "tinymce/themes/silver" // 界面UI主题
import "tinymce/plugins/image"
import "tinymce/plugins/table"
import "tinymce/plugins/codesample" //代码示例
import "tinymce/plugins/autoresize" // 自动调整编辑器大小
import "tinymce/plugins/quickbars" // 光标处快捷提示
import "tinymce/plugins/nonbreaking" //插入不间断空格
import "tinymce/plugins/searchreplace" //查找替换
import "tinymce/plugins/lists" // 列表插件
import "tinymce/plugins/wordcount" // 文字计数
import "tinymce/plugins/preview" // 预览
import "tinymce/plugins/emoticons" // emoji表情
import "tinymce/plugins/emoticons/js/emojis.js" //必须引入这个文件才有表情图库
import "tinymce/plugins/code" // 编辑源码
import "tinymce/plugins/nonbreaking" //插入不间断空格
import "tinymce/plugins/insertdatetime" //插入日期时间
import "tinymce/plugins/importcss" //引入自定义样式的css文件
import "tinymce/plugins/accordion" // 可折叠数据手风琴模式
import "tinymce/plugins/anchor" //锚点
import "tinymce/plugins/fullscreen" //全屏
import "tinymce/plugins/link" // 链接插件
import "tinymce/plugins/advlist" //高级列表
import "tinymce/plugins/autolink" //自动链接
import "tinymce/plugins/directionality" //文字方向
import "tinymce/plugins/visualblocks" //显示元素范围
import "tinymce/plugins/visualchars" //显示不可见字符
import "tinymce/plugins/charmap" // 特殊符号
const useSetting = useSettingStore()
// 以上所有的样式在 node_modules 下面 tinymce 里面的 plugins 都能找到。
const tinymceHtml = ref("请输入内容......")

const init = computed(() => {
  return {
    //初始化数据
    language_url: "/langs/zh_CN.js", // 引入语言包（该语言包在public下，注意文件名称）
    language: "zh_CN", // 这里名称根据 zh-Hans.js 里面写的名称而定
    skin_url: `${useSetting.dark ? "/skins/ui/oxide-dark" : "/skins/ui/oxide"}`, // 这里引入的样式
    height: 650, // 限制高度
    plugins: "link lists image code table wordcount", // 富文本插件
    // 工具栏  toolbar: false, 隐藏工具栏
    toolbar:
      "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
    branding: false, // //是否禁用“Powered by TinyMCE”
    menubar: true, //顶部菜单栏显示
    inline: false, //开启内联模式
    promotion: false, //去掉 upgrade
    paste_convert_word_fake_lists: false, // 插入word文档需要该属性
    content_css: `${
      useSetting.dark
        ? "/skins/content/dark/content.css"
        : "/skins/content/default/content.css"
    }`, //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
    // 取消图片资源路径转换
    convert_urls: false,
    // table边框位0是否展示网格线
    visual: false,
    // 超链接默认打开方式
    link_default_target: "_blank",
    link_context_toolbar: true,
    // 默认快捷菜单
    quickbars_insert_toolbar: "image codesample table",
    // 选中图片的快捷提示
    quickbars_image_toolbar:
      "alignleft aligncenter alignright | rotateleft rotateright | imageoptions",
    editimage_toolbar:
      "rotateleft rotateright | flipv fliph | editimage imageoptions",
    // 文字样式
    font_family_formats:
      "Arial=arial,helvetica,sans-serif; 宋体=SimSun; 微软雅黑=Microsoft Yahei; Impact=impact,chicago;", //字体
    font_size_formats: "11px 12px 14px 16px 18px 24px 36px 48px 64px 72px", //文字大小
    image_caption: true,
    editimage_cors_hosts: ["picsum.photos"],
    noneditable_class: "mceNonEditable",
    toolbar_mode: "wrap", // 工具栏模式 floating / sliding / scrolling / wrap
    // 默认样式
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:12px }p {margin:3px; line-height:24px;}",
    image_advtab: true,
    importcss_append: true,
    paste_webkit_styles: "all",
    paste_merge_formats: true,
    nonbreaking_force_tab: false,
    paste_auto_cleanup_on_paste: false,
    file_picker_types: "file",
    // 选中文字的快捷提示
    quickbars_selection_toolbar:
      "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
    // 编辑器高度自适应
    autoresize_bottom_margin: 20,

    images_upload_handler: (blobInfo, success, failure) => {
      // 文件对象上传到服务器
      console.log(blobInfo.blob())
    },
  }
})

const isTinymce = ref(true)
watch(
  () => useSetting.dark,
  (newVal) => {
    const instance = tinymce.get("tinymce")
    instance?.destroy()
    isTinymce.value = false
    nextTick(() => {
      isTinymce.value = true
    })
  },
)
/**
 * @功能
 */
// 编辑器赋值
// setTimeout(() => {
//   tinymce.activeEditor.setContent("123");
// }, 1000);
// 获取内容
// tinymce.activeEditor.getContent()
</script>
