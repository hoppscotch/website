<script setup lang="ts">
withDefaults(
  defineProps<{
    blur: number;
    animate: boolean;
  }>(),
  {
    blur: 12,
    animate: false,
  }
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

  background: linear-gradient(
    45deg,
    rgba(248, 143, 233, 0.75) 10%,
    rgba(112, 0, 255, 0.75) 50%,
    rgba(88, 210, 242, 0.75) 90%
  );
}

.pulse {
  animation: 10s 0s infinite normal both running pulse;
}

@keyframes pulse {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-0.5deg) translate(1px, -1px) scale(1.01);
  }
  67% {
    transform: rotate(1deg) translate(-1px, -1px) scale(0.99);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
