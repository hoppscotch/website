<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()

withDefaults(
  defineProps<{
    feature: {
      title: string
      background: string
      placement: string
      image: string
    }
  }>(),
  {},
)
</script>

<template>
  <div class="py-5 overflow-hidden rounded-lg lg:h-lg max-h-lg" :class="[feature.background,feature.placement === 'left' ? 'lg:-order-1' : 'order-1']">
    <img :src="`/assets/images/solutions/testing/${isDark?'dark':'light'}-${feature.image}`" :alt="t(feature.title)" class="object-cover object-left w-full h-full rounded-lg transition transform translate-x-10 lg:translate-x-20">
  </div>
</template>
