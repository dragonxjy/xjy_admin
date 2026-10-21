import { use } from "echarts/core"
import { LineChart, PieChart } from "echarts/charts"
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components"
import { CanvasRenderer } from "echarts/renderers"

// 仅安装工作台实际使用的图表、坐标系、交互与 Canvas 渲染器。
use([
  LineChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  CanvasRenderer,
])

export { graphic, init } from "echarts/core"
export type { ECharts } from "echarts/core"
export type { EChartsOption } from "echarts"
