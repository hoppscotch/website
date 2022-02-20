<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    visibleSolution: {
      title: string
      image: string
      background: string
    }
    isVisible: boolean
  }>(),
  {},
)

</script>

<template>
  <div class="absolute flex items-center justify-center h-full w-full transition-all duration-300 left-0 rounded-lg overflow-hidden p-2 md:p-5 lg:py-10" :class="[visibleSolution.background,isVisible ? 'opacity-100' : 'opacity-0']">
    <img :src="visibleSolution.image" :alt="t(visibleSolution.title)" loading="lazy" class="h-auto max-h-full max-w-full transform relative z-5 lg:-translate-x-20  transition duration-300 ease-linear object-center rounded-lg" :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 '">
  </div>
</template>
