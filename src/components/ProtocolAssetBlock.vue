<script setup lang="ts">
import { isDark } from '~/composables'
import book from '~icons/lucide/book-open'
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    imageDark?: string
    imageLight?: string
    videoLink?: string
  }>(),
  {
    title: '',
    imageDark: '',
    imageLight: '',
    videoLink: '',
  },
)

</script>

<template>
  <img v-if="imageDark" :src="isDark ? imageDark : imageLight" :alt="t(title)" class="object-cover object-center h-full max-w-full rounded-lg transition">
  <video v-if="videoLink" class="object-cover object-center h-full max-w-full rounded-lg transition" :title="videoLink" muted controls>
    <source :src="videoLink" type="video/webm">
    <source :src="videoLink" type="video/mp4">
  </video>
</template>
