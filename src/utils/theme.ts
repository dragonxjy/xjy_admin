/** 主题选择器与本地存储只接受不带透明度的六位十六进制颜色。 */
export const isThemeColor = (color: unknown): color is string =>
  typeof color === "string" && /^#[\da-f]{6}$/i.test(color)
