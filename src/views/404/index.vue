<template>
  <main class="exception-page" aria-label="页面不存在">
    <span class="noPage">404</span>
    <NotFoundIllustration />
    <el-button type="primary" @click="goBack">返回主页</el-button>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
const goBack = () => {
  // 回到首页
  router.push("/home")
}
</script>

<style scoped lang="scss">
.exception-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-height: 520px;
  padding: 24px;
  overflow: hidden;
  background: var(--app-bg);
}

.noPage {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
</style>
