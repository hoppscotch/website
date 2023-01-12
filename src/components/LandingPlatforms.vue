<script setup lang="ts">
import { features } from "~/assets/data/landingPlatforms"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("home.platforms.title") }}
      </h1>
      <p class="max-w-md my-4 text-2xl tracking-tighter text-center md:w-2/3">
        {{ t("home.platforms.description") }}
      </p>
    </div>
    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        class="w-full p-8 bg-center bg-no-repeat bg-cover interactive-shadow group rounded-xl text-accentContrast md:p-16"
        :style="`background-image: url(/assets/images/home/banners/${feature.banner})`"
      >
        <i
          class="inline-flex items-center justify-center text-3xl border-2 rounded-full shadow transition border-accentContrast bg-gradient-to-br"
          :class="`group-hover:${feature.styles}`"
        >
          <component :is="feature.icon" class="w-6 h-6 m-4" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex mt-8 mb-2 text-3xl font-semibold tracking-tighter">
            {{ t(feature.title) }}
          </h2>
          <p class="flex w-4/5 max-w-xl text-sm tracking-tight opacity-75">
            {{ t(feature.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
