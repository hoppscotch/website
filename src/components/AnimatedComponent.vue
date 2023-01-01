<script lang="ts" setup>
import { onMounted, ref } from "vue"

const props = defineProps({
  animationType: {
    type: String,
    required: false,
    default: "fade",
  },
  threshold: {
    type: Number,
    required: false,
    default: 0.15,
  },
})

const target = ref()
const animate = ref(false)
const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting
  },
  {
    threshold: props.threshold,
  }
)

onMounted(() => {
  observer.observe(target.value)
})
</script>

<template>
  <div ref="target">
    <Transition appear :name="animationType">
      <div v-appear="animate" class="animated-component">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 300ms ease;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.8);
}
</style>
