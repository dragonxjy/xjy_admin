<template>
  <svg class="chrome-tab-background" aria-hidden="true">
    <defs>
      <symbol id="xjy-tab-edge" viewBox="0 0 214 36">
        <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
      </symbol>
    </defs>
    <svg width="51%" height="100%">
      <use href="#xjy-tab-edge" width="214" height="36" fill="currentColor" />
    </svg>
    <g transform="scale(-1, 1)">
      <svg width="51%" height="100%" x="-100%">
        <use href="#xjy-tab-edge" width="214" height="36" fill="currentColor" />
      </svg>
    </g>
  </svg>
</template>

<style scoped>
.chrome-tab-background {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
