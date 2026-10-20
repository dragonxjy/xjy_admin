<template>
  <div class="twoMenu">
    <div class="two">二级菜单</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.twoMenu {
  width: 100%;
  min-height: 320px;
  padding: 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--app-text);
  background: var(--app-surface-soft);
  border: 1px solid var(--app-border);
  border-radius: var(--app-radius);

  .two {
    padding-bottom: 16px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--app-border);
  }
}
</style>
