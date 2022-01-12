<template>
  <div
    class="pulse gradient-bg"
    style="filter: blur(12px)"
  />
</template>

<style lang="scss" scoped>
.gradient-bg {
  @apply absolute;
  @apply inset-0;
  @apply rounded-lg;
  @apply opacity-75;
  @apply transition;

  @apply z-0;

  background: conic-gradient(
    from 217.29deg at 51.63% 52.16%,
    rgb(36, 0, 255) 0deg,
    rgb(0, 135, 255) 19.5deg,
    rgb(255, 29, 122) 102.75deg,
    rgb(245, 56, 27) 152.25deg,
    rgb(255, 83, 53) 208.88deg,
    rgb(105, 30, 255) 291deg
  );
}

.pulse {
  animation: 10s 0s infinite normal both running pulse;
}

@keyframes pulse {
  0% {
    transform: rotate(0deg);
    filter: blur(8px);
    border-radius: 6px;
  }
  33% {
    transform: rotate(-0.5deg) translate(1px, -1px) scale(1.01);
    filter: blur(10px);
    border-radius: 4px;
  }
  67% {
    transform: rotate(1deg) translate(-1px, -1px) scale(0.99);
    filter: blur(14px);
    border-radius: 8px;
  }
  100% {
    transform: rotate(0deg);
    filter: blur(8px);
    border-radius: 6px;
  }
}
</style>
