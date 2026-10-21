<template>
  <div class="login">
    <SoybeanWave class="login-wave" />
    <div class="form">
      <section class="login-story" aria-label="欢迎使用">
        <p class="story-kicker">YOUR DAILY WORKSPACE</p>
        <h2>有条不紊，<br />从容开始。</h2>
        <p class="story-description">连接每一份灵感，<br />让今天的工作更进一步。</p>
        <div class="story-orbit" aria-hidden="true"></div>
        <img class="story-illustration" src="../../assets/image/login/people.svg" alt="" />
        <span class="story-note">轻盈 · 有序 · 高效</span>
      </section>
      <div class="content">
        <header class="name">
          <img :src="basic.logo" alt="" />
          <h1>{{ basic.title }}</h1>
        </header>
        <main class="login-main">
          <h2>欢迎回来</h2>
          <p class="login-description">登录账号，开启今天的工作。</p>
          <el-form ref="loginFormRef" :model="loginParams" :rules="rules" class="login-form" label-position="top">
            <el-form-item prop="username" label="用户名">
              <el-input placeholder="请输入用户名" v-model="loginParams.username" aria-label="用户名" autocomplete="username" />
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input placeholder="请输入密码" v-model="loginParams.password" type="password" show-password aria-label="密码" autocomplete="current-password" />
            </el-form-item>
            <el-form-item class="submit-item">
              <el-button class="loginBtn" @click="login" type="primary">登 录</el-button>
            </el-form-item>
          </el-form>
          <el-divider>演示账号</el-divider>
          <div class="account_info">
            <div class="account-card admin">
              <div class="tip">管理员</div>
              <div class="accountNum"><span>账号：admin</span><span>密码：123456</span></div>
            </div>
            <div class="account-card user">
              <div class="tip">普通用户</div>
              <div class="accountNum"><span>账号：user</span><span>密码：123456</span></div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="login-footer">Copyright © {{ basic.title }}</footer>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormItemRule, FormRules } from "element-plus"
import { message } from "@/Hooks/element"
import { basic } from "../../config/setting"
import { useUserStore } from "@/stores/modules/user"
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const loginFormRef = ref<FormInstance>()
const loginParams = reactive({
  username: "admin",
  password: 123456,
})
const validateUser: FormItemRule["validator"] = (_rule, value, callback) => {
  if (String(value ?? "").length < 4) {
    callback(new Error("用户名至少需要4位"))
  } else {
    callback()
  }
}
const validatePass: FormItemRule["validator"] = (_rule, value, callback) => {
  if (String(value ?? "").length < 6) {
    callback(new Error("密码至少需要6位"))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<typeof loginParams>>({
  username: [
    { required: true, validator: validateUser, trigger: "change" },
  ],
  password: [
    { required: true, validator: validatePass, trigger: "change" },
  ],
})
const login = async () => {
  if (!loginFormRef.value) return
  const valid = await loginFormRef.value.validate().catch(() => false)
  if (!valid) return

  try {
    await userStore.loginUp({ ...loginParams, password: Number(loginParams.password) })
    const redirect = route.query.url
    await router.push({ path: typeof redirect === "string" ? redirect : "/home" })
  } catch (err: unknown) {
    message("error", err instanceof Error ? err.message : "登录失败，请稍后重试")
  }
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  padding: max(32px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom));
  overflow: hidden;
  background: var(--app-bg);

  .login-wave {
    opacity: 0.2;
  }

  .form {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 448px;
    width: 1016px;
    max-width: 100%;
    overflow: hidden;
    background: var(--app-surface);
    border: 1px solid var(--app-border);
    border-radius: 20px;
    box-shadow: 0 24px 80px rgb(40 47 104 / 9%);
  }

  .login-story {
    position: relative;
    min-height: 616px;
    padding: 44px;
    overflow: hidden;
    background: var(--app-primary-soft);

    h2 {
      position: relative;
      z-index: 1;
      margin-top: 28px;
      font-size: 40px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 2px;
    }
  }

  .story-kicker {
    position: relative;
    z-index: 1;
    font-size: 11px;
    font-weight: 600;
    color: var(--el-color-primary);
    letter-spacing: 2px;
  }

  .story-description {
    position: relative;
    z-index: 1;
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.9;
    color: var(--app-text-muted);
  }

  .story-orbit {
    position: absolute;
    right: -84px;
    bottom: -100px;
    width: 420px;
    height: 420px;
    border: 64px solid var(--app-surface);
    border-radius: 50%;
    opacity: 0.6;
  }

  .story-illustration {
    position: absolute;
    right: 36px;
    bottom: -8px;
    width: 200px;
    height: 356px;
    object-fit: contain;
  }

  .story-note {
    position: absolute;
    bottom: 44px;
    left: 44px;
    z-index: 1;
    font-size: 12px;
    color: var(--el-color-primary);
    letter-spacing: 2px;
  }

  .content {
    width: 100%;
    min-width: 0;
    padding: 40px 36px;
  }

  .name {
    display: flex;
    gap: 12px;
    align-items: center;
    min-height: 44px;
    margin-bottom: 32px;

    img {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    h1 {
      overflow: hidden;
      font-size: 24px;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .login-main h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.6;
  }

  .login-description {
    margin-top: 6px;
    font-size: 13px;
    color: var(--app-text-muted);
  }

  .login-form {
    padding-top: 24px;
  }

  .el-form-item {
    margin-bottom: 22px;
  }

  :deep(.el-form-item__label) {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 20px;
  }

  :deep(.el-input__wrapper) {
    height: 44px;
    padding: 0 14px;
    border-radius: 8px;
    box-shadow: 0 0 0 1px var(--app-border) inset;

    &:hover {
      box-shadow: 0 0 0 1px var(--el-color-primary) inset;
    }

    &.is-focus {
      box-shadow: 0 0 0 1px var(--el-color-primary) inset, 0 0 0 3px var(--app-primary-soft);
    }
  }

  :deep(.el-input__inner) {
    color: var(--app-text-secondary);
  }

  .submit-item {
    margin: 28px 0 24px;
  }

  .loginBtn {
    width: 100%;
    height: 44px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
  }

  .el-divider {
    margin: 24px 0 20px;

    :deep(.el-divider__text) {
      font-size: 12px;
      color: var(--app-text-muted);
      white-space: nowrap;
      background: var(--app-surface);
    }
  }

  .account_info {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .account-card {
    padding: 12px;
    text-align: center;
    background: var(--app-surface-soft);
    border: 1px solid var(--app-border);
    border-radius: 8px;

    .tip {
      margin-bottom: 6px;
      font-size: 12px;
      font-weight: 500;
      color: var(--el-color-primary);
    }

    .accountNum {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 12px;
      line-height: 1.6;
      color: var(--app-text-muted);
      white-space: nowrap;
    }
  }

  .login-footer {
    position: relative;
    margin-top: 28px;
    font-size: 12px;
    color: var(--app-text-muted);
  }
}

:global(html.dark) .login {
  --login-wave-light: #5459b0;
  --login-wave-dark: #363ca6;
}

@media (width < 900px) {
  .login {
    .form {
      grid-template-columns: minmax(0, 1fr);
      width: 448px;
    }

    .login-story {
      display: none;
    }
  }
}

@media (width < 640px) {
  .login {
    padding-right: 16px;
    padding-left: 16px;

    .form {
      width: 388px;
      border-radius: 16px;
    }

    .content {
      padding: 28px 24px;
    }

    .name {
      margin-bottom: 24px;

      h1 {
        font-size: 22px;
      }
    }

    .login-main h2 {
      font-size: 22px;
    }

    .account-card {
      padding: 10px 4px;
    }
  }
}
</style>
