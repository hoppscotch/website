<script lang="ts" setup>
import { ref } from "vue"

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

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    animate.value = isIntersecting
  },
  {
    threshold: props.threshold,
  }
)
</script>

<template>
  <div ref="target">
    <Transition appear :name="animationType">
      <div
        v-appear="animate"
        class="flex flex-col items-center flex-1 animated-component"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from,
.animated-component.pull-enter-from {
  transition: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 300ms ease;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.8);
}
.pull-enter-active,
.pull-leave-active {
  transition: transform 1500ms ease;
}
.pull-enter-from,
.pull-leave-to {
  transform: translateY(100%);
}
</style>
