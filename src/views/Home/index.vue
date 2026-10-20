<template>
  <div class="home">
    <el-card class="home-banner">
      <div class="banner-grid">
        <div class="home-user">
          <el-avatar :size="72" :src="userStore.userinfo.avatar" @error="() => true">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="用户头像" />
          </el-avatar>
          <div class="user_content">
            <p class="workspace-kicker">我的工作台 / WORKSPACE</p>
            <h3 class="tip">欢迎回来，{{ userStore.userinfo.username }}</h3>
            <p class="weather">把日常交给秩序，把灵感留给自己。</p>
          </div>
        </div>
        <dl class="banner-statistics" aria-label="演示概览">
          <div><dt>项目数</dt><dd>25</dd></div>
          <div><dt>待办</dt><dd>4/16</dd></div>
          <div><dt>消息</dt><dd>12</dd></div>
        </dl>
      </div>
    </el-card>

    <el-card class="metrics-card" aria-label="演示统计">
      <div class="overview-cards">
        <article class="metric metric-visits">
          <h3>访问量</h3>
          <div class="metric-value"><el-icon><DataAnalysis /></el-icon><span>9,725</span></div>
        </article>
        <article class="metric metric-turnover">
          <h3>成交额</h3>
          <div class="metric-value"><el-icon><Money /></el-icon><span>$1,026</span></div>
        </article>
        <article class="metric metric-downloads">
          <h3>下载量</h3>
          <div class="metric-value"><el-icon><Download /></el-icon><span>970,925</span></div>
        </article>
        <article class="metric metric-deals">
          <h3>成交量</h3>
          <div class="metric-value"><el-icon><Coin /></el-icon><span>9,527</span></div>
        </article>
      </div>
    </el-card>

    <div class="EChart_Group home-grid">
      <el-card class="chart-card grid-main" aria-label="访问量图表">
        <div class="chart-surface"><div class="line"><component :is="chartComponent('line')" /></div></div>
      </el-card>
      <el-card class="chart-card grid-aside" aria-label="前端结业率图表">
        <div class="chart-surface"><div class="pie"><component :is="chartComponent('pie')" /></div></div>
      </el-card>
    </div>

    <div class="home-grid home-resources">
      <el-card class="store grid-main">
        <template #header>
          <div class="section-heading"><h3>技术栈</h3><el-button link type="primary" @click="goDocument">文档说明</el-button></div>
        </template>
        <div class="store_content">
          <div class="store_item">
            <img src="../../assets/image/vue.png" alt="Vue" />
            <div class="stack-info"><h4>Vue</h4><p>渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富。</p></div>
            <el-button class="vue" @click="goVue" size="small">Go</el-button>
          </div>
          <div class="store_item">
            <img src="../../assets/image/pinia.svg" alt="Pinia" />
            <div class="stack-info"><h4>Pinia</h4><p>符合直觉的 Vue.js 状态管理库。</p></div>
            <el-button class="pinia" @click="goPinia" size="small">Go</el-button>
          </div>
          <div class="store_item">
            <img src="../../assets/image/element.png" alt="Element Plus" />
            <div class="stack-info"><h4>Element Plus</h4><p>为开发者、设计师和产品经理准备的组件库，帮助网站快速成型。</p></div>
            <el-button class="element" @click="goElement" size="small">Go</el-button>
          </div>
          <div class="store_item">
            <img src="../../assets/image/ts.png" alt="TypeScript" />
            <div class="stack-info"><h4>TypeScript</h4><p>具有类型系统的 JavaScript 超集，可编译为普通 JavaScript 代码。</p></div>
            <el-button class="ts" @click="goTs" size="small">Go</el-button>
          </div>
          <div class="store_item">
            <img src="../../assets/image/vite.png" alt="Vite" />
            <div class="stack-info"><h4>Vite</h4><p>下一代前端开发与构建工具，为开发提供极速响应。</p></div>
            <el-button class="vite" @click="goVite" size="small">Go</el-button>
          </div>
          <div class="store_item">
            <img src="../../assets/image/ECharts.png" alt="Apache ECharts" />
            <div class="stack-info"><h4>Apache ECharts</h4><p>基于 JavaScript 的开源可视化图表库。</p></div>
            <el-button class="ECharts" @click="goECharts" size="small">Go</el-button>
          </div>
        </div>
      </el-card>
      <el-card class="creativity-card grid-aside">
        <template #header><h3>从这里开始</h3></template>
        <div class="creativity-content">
          <SoybeanBanner />
          <div class="introduce">
            <h3>欢迎使用 {{ basic.title }}</h3>
            <p>基于 Vue、Vite、Pinia 和 Element Plus 的轻量级后台管理模板。</p>
            <p class="good_tip">冰冻三尺，非一日之寒，成大事者不拘小节。</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/modules/user"
import { basic } from "../../config/setting"
const userStore = useUserStore()
const router = useRouter()
const goVue = () => {
  window.open("https://cn.vuejs.org/guide/introduction.html")
}
const goTs = () => {
  window.open("https://www.tslang.cn/")
}
const goPinia = () => {
  window.open("https://pinia.web3doc.top/")
}
const goElement = () => {
  window.open("https://element-plus.org/zh-CN/component/button.html")
}
const goVite = () => {
  window.open("https://cn.vitejs.dev/")
}
const goECharts = () => {
  window.open("https://echarts.apache.org/zh/index.html")
}
const goDocument = () => {
  window.open("https://juejin.cn/post/7380283122489081856")
}
// 异步加载图表
const chartComponent = (val: string) => {
  return defineAsyncComponent(() => import(`./components/${val}.vue`))
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 0;

  .home-banner {
    position: relative;

    &::before {
      position: absolute;
      top: -150px;
      right: -60px;
      width: 360px;
      height: 360px;
      pointer-events: none;
      content: "";
      border: 56px solid var(--app-primary-soft);
      border-radius: 50%;
    }

    :deep(.el-card__body) {
      padding: 24px;
    }
  }

  .banner-grid {
    position: relative;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
  }

  .home-user {
    display: flex;
    flex: 1;
    gap: 16px;
    align-items: center;
    min-width: 0;

    .el-avatar {
      flex-shrink: 0;
      border: 4px solid var(--app-surface);
      box-shadow: var(--app-shadow);
    }
  }

  .user_content {
    min-width: 0;
  }

  .workspace-kicker {
    margin-bottom: 4px;
    font-size: 11px;
    font-weight: 600;
    color: var(--el-color-primary);
    letter-spacing: 1.5px;
  }

  .tip {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .weather {
    margin-top: 4px;
    font-size: 13px;
    color: var(--app-text-muted);
  }

  .banner-statistics {
    display: flex;
    flex-shrink: 0;
    gap: 32px;
    justify-content: flex-end;

    dt {
      font-size: 13px;
      color: var(--app-text-muted);
      white-space: nowrap;
    }

    dd {
      margin-top: 4px;
      font-size: 26px;
      font-variant-numeric: tabular-nums;
      line-height: 1.6;
      color: var(--app-text-secondary);
      white-space: nowrap;
    }
  }

  .metrics-card :deep(.el-card__body) {
    padding: 16px;
  }

  .overview-cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .metric {
    position: relative;
    min-width: 0;
    padding: 16px;
    background: var(--app-surface-soft);
    border-radius: 6px;

    h3 {
      max-width: calc(100% - 28px);
      font-size: 14px;
      font-weight: 400;
      color: var(--app-text-muted);
    }
  }

  .metric-visits {
    --metric-color: #646cff;
  }

  .metric-turnover {
    --metric-color: #b955a4;
  }

  .metric-downloads {
    --metric-color: #369fc2;
  }

  .metric-deals {
    --metric-color: #d68a26;
  }

  .metric-value {
    padding-top: 8px;
    font-size: 28px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
    white-space: nowrap;

    .el-icon {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 22px;
      color: var(--metric-color);
    }
  }

  .home-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(0, 1fr));
    gap: 16px;
    min-width: 0;
  }

  .grid-main {
    grid-column: span 14;
    min-width: 0;
  }

  .grid-aside {
    grid-column: span 10;
    min-width: 0;
  }

  .chart-card {
    height: 440px;

    :deep(.el-card__body) {
      height: 100%;
      padding: 20px 24px;
    }
  }

  .chart-surface {
    height: 400px;
    padding: 20px 24px;
    border-radius: 8px;
    box-shadow: var(--app-shadow);
  }

  .line,
  .pie {
    width: 100%;
    height: 360px;
  }

  .section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .store,
  .creativity-card {
    :deep(.el-card__header) {
      padding: 12px 16px;
      font-size: 16px;
      font-weight: 500;
    }

    :deep(.el-card__body) {
      padding: 0 16px;
    }
  }

  .store_item {
    display: flex;
    gap: 16px;
    align-items: center;
    min-height: 76px;
    padding: 12px 0;

    + .store_item {
      border-top: 1px solid var(--app-border);
    }

    > img {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      object-fit: contain;
    }

    .stack-info {
      flex: 1;
      min-width: 0;
    }

    h4 {
      margin-bottom: 4px;
      font-size: 15px;
      font-weight: 500;
    }

    p {
      font-size: 13px;
      color: var(--app-text-muted);
    }

    .el-button {
      flex-shrink: 0;
      min-width: 40px;
      color: var(--el-color-primary);
      background: transparent;
      border-color: var(--app-border);
    }
  }

  .creativity-card :deep(.el-card__header) {
    border-bottom: 0;
  }

  .creativity-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    padding: 0 0 24px;
  }

  .introduce {
    align-self: stretch;
    padding: 0 8px;

    h3 {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 500;
    }

    p {
      font-size: 13px;
      color: var(--app-text-muted);
    }

    .good_tip {
      margin-top: 12px;
    }
  }
}

@media (width < 1280px) {
  .home {
    .overview-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .metric-value {
      font-size: 26px;
    }
  }
}

@media (width < 1024px) {
  .home {
    .banner-grid {
      flex-wrap: wrap;
      gap: 20px;
    }

    .home-user {
      flex-basis: 100%;
    }

    .banner-statistics {
      justify-content: space-between;
      width: 100%;
      padding-top: 16px;
      border-top: 1px solid var(--app-border);
    }

    .home-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .grid-main,
    .grid-aside {
      grid-column: auto;
    }
  }
}

@media (width < 640px) {
  .home {
    .overview-cards {
      gap: 12px;
    }

    .home-banner :deep(.el-card__body) {
      padding: 20px;
    }

    .home-user {
      gap: 12px;

      .el-avatar {
        width: 56px;
        height: 56px;
      }
    }

    .workspace-kicker {
      font-size: 10px;
      letter-spacing: 1px;
    }

    .tip {
      font-size: 18px;
    }

    .weather {
      font-size: 12px;
    }

    .metrics-card :deep(.el-card__body) {
      padding: 12px;
    }

    .metric {
      padding: 12px;
    }

    .metric-value {
      font-size: 24px;

      .el-icon {
        top: 12px;
        right: 12px;
        font-size: 20px;
      }
    }

    .chart-card {
      height: 376px;

      :deep(.el-card__body) {
        padding: 16px;
      }
    }

    .chart-surface {
      height: 344px;
      padding: 12px 0;
      box-shadow: none;
    }

    .line,
    .pie {
      height: 320px;
    }

    .store_item {
      gap: 12px;
    }
  }
}

@media (width < 360px) {
  .home .overview-cards {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
