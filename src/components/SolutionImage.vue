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
  <div class="h-full max-h-lg w-full max-w-lg lg:max-w-2xl absolute left-0 mx-auto flex items-center justify-center transition-all duration-300 rounded-lg overflow-hidden p-2 md:p-5 lg:py-10" :class="[visibleSolution.background,isVisible ? 'opacity-100' : 'opacity-0']">
    <img :src="`/assets/images/platforms/web/${isDark?'dark':'light'}-${visibleSolution.image}`" :alt="t(visibleSolution.title)" loading="lazy" class="h-full max-h-full  max-w-full transform relative z-5 lg:-translate-x-20 transition duration-300 ease-linear object-center rounded-lg " :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 '">
  </div>
</template>
