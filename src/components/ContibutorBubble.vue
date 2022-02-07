<script setup lang="ts">
withDefaults(
  defineProps<{
    username: string
    image: string
    link: string
    size: string
  }>(),
  {
    name: "",
    image: "",
    link: "",
    size: "w-16 h-16",
  },
)
</script>

<template>
  <img
    :src="image"
    :alt="username"
    loading="lazy"
    class="flex flex-shrink-0 rounded-full cloudAnimation"
    :class="`${size}`"
  >
</template>

<style lang="scss" scoped>
.cloudAnimation {
  animation: 15s infinite alternate ease-in-out cloudAnimation;
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
}

@keyframes cloudAnimation {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(6px, 6px) rotate(1deg);
  }
  40% {
    transform: translate(9px, 9px) rotate(2deg);
  }
  60% {
    transform: translate(12px, 12px) rotate(3deg);
  }
  80% {
    transform: translate(9px, 9px) rotate(2deg);
  }
  80% {
    transform: translate(6px, 6px) rotate(1deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}
</style>
