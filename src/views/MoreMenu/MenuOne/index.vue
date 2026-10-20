<template>
  <div class="oneMenu">
    <div class="one">一级菜单</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.oneMenu {
  width: 100%;
  min-height: 420px;
  padding: 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--app-text);
  background: var(--app-surface);
  border: 1px solid var(--app-border);
  border-radius: var(--app-radius);

  .one {
    padding-bottom: 16px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--app-border);
  }
}
</style>
