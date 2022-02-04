<script setup lang="ts">
import ButtonPrimary1 from './ButtonPrimary.vue'
import { isDark } from '~/composables'
const { t } = useI18n()

withDefaults(
  defineProps<{
    featureList: [
      {
        title: string
        description: string
        imageDark: string
        imageLight: string
        video: string
        icon: string
      },
    ]
    description2: string
  }>(),
  {
    featureList: [
      {
        title: '',
        description: '',
        imageDark: '',
        imageLight: '',
        video: '',
        icon: '',
      },
    ],
    description2: '',

  },
)

</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div v-if="description2" class="py-18">
      <p class="text-lg max-w-2xl" v-html="t(description2) " />
    </div>
    <div v-if="featureList">
      <div v-for="(feature,index) in featureList" :key="index" class="flex justify-between gap-20 items-start my-30" :class="index/2 === 0 ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'">
        <div class="basis-1/2">
          <h2 class="text-3xl">
            {{ t(feature.title) }}
          </h2>
          <div>
            <p class="max-w-xl py-4 text-lg">
              {{ t(feature.description) }}
            </p>
          </div>
        </div>
        <div class="w-full basis-1/2 ">
          <img v-if="feature.imageDark" :src="isDark ? feature.imageDark : feature.imageLight" :alt="t(feature.title)" class="h-full w-full object-cover object-center transition shadow-sm rounded-lg">
          <video v-if="feature.video" class="h-full max-w-full" muted controls>
            <source :src="feature.video" type="video/mp4">
            <source :src="feature.video" type="video/webm">
          </video>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center gap-4">
      <ButtonPrimary label="Open App" />
      <ButtonSecondary label="See Documentation" />
    </div>
    <div />
  </div>
</template>
