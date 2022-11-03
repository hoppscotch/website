<script setup lang="ts">
withDefaults(
  defineProps<{
    blur: number
    animate: boolean
  }>(),
  {
    blur: 12,
    animate: false,
  },
)
</script>

<template>
  <div
    class="flex gradient-bg"
    :style="`filter: blur(${blur}px)`"
    :class="{ pulse: animate }"
  />
</template>

<style lang="scss" scoped>
.gradient-bg {
  @apply absolute;
  @apply inset-0;
  @apply opacity-75;
  @apply transition;
  @apply -z-1;

  background: linear-gradient(45deg,#f83a3a 10%,#f13dd4 50%,#7000ff 90%)
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
