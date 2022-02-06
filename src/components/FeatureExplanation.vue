<script setup lang="ts">
import { isDark } from '~/composables'
import book from '~icons/lucide/book-open'
const { t } = useI18n()

withDefaults(
  defineProps<{
    methods: [
      {
        title: string
        description: string
        imageDark?: string
        imageLight?: string
        videoLink?: string
        link: string
      },
    ]
    link?: string
  }>(),
  {
    methods: [
      {
        title: '',
        description: '',
        imageDark: '',
        imageLight: '',
        videoLink: '',
        link: '',
      },
    ],
    link: '',
  },
)

</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div v-if="methods[0].title">
      <div v-for="(method,index) in methods" :key="index" class="flex flex-col justify-between gap-20 items-start my-50" :class="index%2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'">
        <div class="basis-1/2">
          <h2 class="text-3xl">
            {{ t(method.title) }}
          </h2>
          <div>
            <p class="max-w-xl py-4 text-lg">
              {{ t(method.description) }}
            </p>
          </div>
          <p>
            <a :href="method.link" class="inline-flex items-center text-accent transition hover:text-accentDark">
              <span class="mr-2">
                Explore Documentation
              </span>
              <lucide-arrow-right />
            </a>
          </p>
        </div>
        <div class="w-full basis-1/2 ">
          <img v-if="method.imageDark" :src="isDark ? method.imageDark : method.imageLight" :alt="t(method.title)" class="h-full w-full object-cover object-center transition shadow-sm rounded-lg">
          <video v-if="method.videoLink" class="h-full max-w-full object-cover object-center transition rounded-lg" muted controls>
            <source :src="method.videoLink" type="video/mp4">
            <source :src="method.videoLink" type="video/webm">
          </video>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-4">
      <ButtonSecondary label="See Documentation" :icon="book" blank :to="link" />
      <ButtonPrimary label="Open App" blank to="https:www.hoppscotch.io" />
    </div>
  </div>
</template>
