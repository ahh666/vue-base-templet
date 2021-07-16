<template>
  <div>
    <svg viewBox="0 0 50 50" class="circular">
      <circle cx="25" cy="25" r="20" fill="none" class="path" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading'
}
</script>

<style lang="scss" scoped>
.circular {
  // 设置宽高可控制圆的大小
  width: 40px;
  height: 40px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90 120; // 相加大于等于周长
  stroke-width: 2;
  stroke: currentColor;
  stroke-linecap: round;
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -120px;
  }
}

@keyframes loading-rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
