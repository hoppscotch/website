<script setup lang="ts">
import { features } from '~/assets/data/landingPlatforms'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("home.platforms.title") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("home.platforms.description") }}
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-8 md:gap-8">
      <div v-for="(feature, index) in features" :key="`feature-${index}`" class="w-full col-span-2 p-8 overflow-hidden md:p-16 rounded-xl" :class="feature.styles">
        <i
          class="inline-flex items-center justify-center text-3xl shadow text-secondaryDark rounded-xl"
          :class="feature.styles"
        >
          <component :is="feature.icon" class="w-8 h-8 m-4" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex mt-8 mb-2 text-2xl font-semibold text-secondaryDark">
            {{ t(feature.title) }}
          </h2>
          <p class="flex w-4/5 max-w-xl opacity-75 text-secondaryDark">
            {{ t(feature.description) }}
          </p>
        </div>
        <img :src="`/assets/images/home/platforms/${feature.image}`" :alt="t(feature.title)" class="rounded h-auto object-top mt-8 w-full transition <lg:mt-8">
      </div>
    </div>
  </div>
</template>
