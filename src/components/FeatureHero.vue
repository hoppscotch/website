<script setup lang="ts">
import { isDark } from "~/composables"
import book from "~icons/lucide/book-open"
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
    title: "",
    description: "",
    imageDark: "",
    imageLight: "",
    videoLink: "",
    icon: "",
    link: "",
  },
)

</script>

<template>
  <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
    <div class="flex flex-col items-center text-center lg:items-start lg:text-left ">
      <h1 class="flex flex-col items-center justify-center md:flex-row gap-3">
        <i class="p-2 text-5xl text-accent rounded-md">
          <component :is="icon" />
        </i>
        <span class="text-5xl sm:text-6xl ">
          {{ t(title) }}
        </span>
      </h1>
      <p class="max-w-xl py-6 text-lg">
        {{ t(description) }}
      </p>

      <div class="flex gap-5">
        <ButtonSecondary label="See Documentation" :icon="book" blank :to="link" />
        <ButtonPrimary label="Open App" blank to="https:www.hoppscotch.io" />
      </div>
    </div>

    <div class="w-full h-auto sm:w-150 my-15">
      <img v-if="imageDark" :src="isDark ? imageDark : imageLight" :alt="t(title)" class="object-cover object-center h-full max-w-full rounded-lg transition">
      <video v-if="videoLink" class="object-cover object-center h-full max-w-full rounded-lg transition" :title="videoLink" muted controls>
        <source :src="videoLink" type="video/webm">
        <source :src="videoLink" type="video/mp4">
      </video>
    </div>
  </div>
</template>
