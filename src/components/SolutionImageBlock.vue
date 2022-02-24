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
  <div class="py-5 rounded-lg lg:h-lg max-h-lg overflow-hidden" :class="[feature.background,feature.placement === 'left' ? 'lg:-order-1' : 'order-1']">
    <img :src="`/assets/images/solutions/testing/${isDark?'dark':'light'}-${feature.image}`" :alt="t(feature.title)" class="rounded-lg h-full w-full object-cover object-left transition transform translate-x-10 lg:translate-x-20">
  </div>
</template>
