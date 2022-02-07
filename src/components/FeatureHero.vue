<script setup lang="ts">
import { isDark } from '~/composables'
import book from '~icons/lucide/book-open'
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    description: string
    imageDark?: string
    imageLight?: string
    videoLink?: string
    icon: string
    link: string
  }>(),
  {
    title: '',
    description: '',
    imageDark: '',
    imageLight: '',
    videoLink: '',
    icon: '',
    link: '',
  },
)

</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between items-center px-8 py-16">
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left ">
      <h1 class="flex flex-col md:flex-row justify-center items-center gap-3">
        <i class="text-5xl text-accent p-2 rounded-md">
          <component :is="icon" />
        </i>
        <span class="text-5xl sm:text-6xl ">
          {{ t(title) }}
        </span>
      </h1>
      <p class="py-6 max-w-xl text-lg">
        {{ t(description) }}
      </p>

      <div class="flex gap-5">
        <ButtonSecondary label="See Documentation" :icon="book" blank :to="link" />
        <ButtonPrimary label="Open App" blank to="https:www.hoppscotch.io" />
      </div>
    </div>

    <div class="h-auto w-full sm:w-150 my-15">
      <img v-if="imageDark" :src="isDark ? imageDark : imageLight" :alt="t(title)" class="h-full max-w-full object-cover object-center transition rounded-lg">
      <video v-if="videoLink" class="h-full max-w-full object-cover object-center transition rounded-lg" :title="videoLink" muted controls>
        <source :src="videoLink" type="video/webm">
        <source :src="videoLink" type="video/mp4">
      </video>
    </div>
  </div>
</template>
