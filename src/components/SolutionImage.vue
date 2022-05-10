<script setup lang="ts">
import { isDark } from '~/composables'
withDefaults(
  defineProps<{
    visibleSolution: {
      title: string
      image: string
      background?: string
    }
    isVisible: boolean
  }>(),
  {},
)
const { t } = useI18n()
</script>

<template>
  <div class="absolute left-0 flex items-center justify-center w-full h-full p-2 mx-auto overflow-hidden transition-all duration-300 rounded-lg max-h-lg lg:max-w-2xl md:p-5 lg:py-10" :class="[visibleSolution.background, isVisible ? 'opacity-100' : 'opacity-0']">
    <img :src="`/assets/images/platforms/web/${isDark ? 'dark' : 'light'}-${visibleSolution.image}`" :alt="t(visibleSolution.title)" loading="lazy" class="relative object-center h-full max-w-full max-h-full transition duration-300 ease-linear transform rounded-lg z-5 lg:-translate-x-20" :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 '">
  </div>
</template>
