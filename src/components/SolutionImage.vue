<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()

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

</script>

<template>
  <div class="absolute left-0 flex items-center justify-center w-full h-full max-w-lg p-2 mx-auto overflow-hidden rounded-lg max-h-lg lg:max-w-2xl transition-all duration-300 md:p-5 lg:py-10" :class="[visibleSolution.background,isVisible ? 'opacity-100' : 'opacity-0']">
    <img :src="`/assets/images/platforms/web/${isDark?'dark':'light'}-${visibleSolution.image}`" :alt="t(visibleSolution.title)" loading="lazy" class="relative object-center h-full max-w-full max-h-full rounded-lg  transform z-5 lg:-translate-x-20 transition duration-300 ease-linear" :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 '">
  </div>
</template>
