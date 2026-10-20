<template>
  <el-card class="header">
    <el-row justify="space-between">
      <el-col :span="16">
        <breadCrumbs />
      </el-col>
      <el-col :span="8">
        <setting />
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  overflow: visible;
  background: var(--app-surface);
  border: 0;
  border-radius: 0;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);

  :deep(.el-card__body) {
    height: 100%;
    padding: 0 12px;
  }

  .el-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .el-col {
    width: auto;
    min-width: 0;
    max-width: none;
  }
}
</style>
