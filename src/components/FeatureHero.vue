<script setup lang="ts">
import { isDark } from '~/composables'
import book from '~icons/lucide/book-open'
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    description: string
    imageDark: string
    imageLight: string
    video: string
    icon: string
  }>(),
  {
    title: '',
    description: '',
    imageDark: '',
    imageLight: '',
    video: '',
    icon: '',
  },
)
</script>

<template>
  <div class="flex flex-col items-center px-8 py-16">
    <div class="flex flex-col items-center text-center">
      <h1 class="flex flex-wrap justify-center items-center gap-3">
        <i class="text-xl text-accent bg-secondaryDark p-2 rounded-md">
          <component :is="icon" />
        </i>
        <span class="text-6xl">
          {{ t(title) }}
        </span>
      </h1>
      <p class="py-6 max-w-xl text-xl">
        {{ t(description) }}
      </p>

      <div class="flex ">
        <ButtonPrimary label="See Documentation" />
      </div>
    </div>

    <div class="h-auto w-full sm:w-150 my-15">
      <img v-if="imageDark" :src="isDark ? imageDark : imageLight" :alt="t(title)" class="h-full max-w-full object-cover object-center transition rounded-lg">
      <video v-if="video" class="h-full max-w-full" muted controls>
        <source :src="video" type="video/mp4">
        <source :src="video" type="video/webm">
      </video>
    </div>
  </div>
</template>
