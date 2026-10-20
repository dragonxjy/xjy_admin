<template>
  <el-row justify="space-between" align="middle" :gutter="24" class="pagination">
    <el-col :xs="24" :sm="24" :md="24" :lg="16">
      <div class="view">
        <!-- 封装分页器 -->
        <Elpagination
          :config="config"
          :paginationParams="paginationParams"
          @pageChange="pageChange"
          @pageSizeChange="pageSizeChange"
        />
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="8">
      <el-card class="content">
        <div class="card-header">
          <span>操作</span>
        </div>
        <div class="base_config">
          <!-- 基本配置 -->
          <div class="base_item">
            <text>背景色</text>
            <el-switch v-model="config.background" />
          </div>
          <div class="base_item">
            <text>小型分页</text>
            <el-switch v-model="config.small" />
          </div>
          <div class="base_item">
            <text>禁用</text>
            <el-switch v-model="config.disabled" />
          </div>
          <div class="base_item">
            <text>当前页</text>
            <el-input-number
              v-model="paginationParams.page"
              :min="1"
              :max="paginationParams.total / paginationParams.pageSize"
            />
          </div>
          <div class="base_item">
            <text>每页条数</text>
            <el-input-number
              v-model="paginationParams.pageSize"
              :step="10"
              :min="10"
              :max="config.page_sizes[config.page_sizes.length - 1]"
            />
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { message } from "@/Hooks/element"
import type {
  paginationConfigType,
  paginationParamsType,
} from "@/components/Elpagination/type"

const config = reactive(<paginationConfigType>{
  background: true,
  small: false,
  disabled: false,
  layout: "total, sizes, prev, pager, next, jumper",
  page_sizes: [10, 20],
})
const paginationParams = reactive(<paginationParamsType>{
  page: 1,
  pageSize: config.page_sizes[0],
  total: 100,
})
const pageChange = (val: number) => {
  message("info", "当前页变化")
  paginationParams.page = val
}
const pageSizeChange = (val: number) => {
  message("info", "每页条数变化")
  paginationParams.pageSize = val
}
</script>

<style scoped lang="scss">
.pagination {
  row-gap: var(--app-gap);
  width: auto;
  min-height: 100%;

  .view {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    padding: 24px;
    overflow: auto;
    background: var(--app-surface);
    border: 1px solid var(--app-border);
    border-radius: var(--app-radius);
    box-shadow: var(--app-shadow);
  }

  .content {
    min-height: 420px;
  }

  .card-header {
    padding-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    color: var(--app-text);
    border-bottom: 1px solid var(--app-border);
  }

  .base_config {
    margin-top: 12px;
  }

  .base_item {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    min-height: 58px;
    font-size: 13px;
    color: var(--app-text-secondary);
    border-bottom: 1px solid var(--app-border);

    &:last-child {
      border-bottom: 0;
    }
  }
}

@media (width <= 767px) {
  .pagination .view {
    justify-content: flex-start;
    min-height: 180px;
    padding: 16px;
  }
}
</style>
