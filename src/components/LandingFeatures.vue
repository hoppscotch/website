<script setup lang="ts">
import { features } from '~/assets/data/landingFeatures'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <p
        class="my-4 font-semibold tracking-widest text-center uppercase text-accentLight"
      >
        {{ t("home.features.title") }}
      </p>
      <h3
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("home.features.description") }}
      </h3>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        v-hover-animation
        class="inline-flex flex-col transition border card-hover-animation bg-primaryLight border-divider hover:border-dividerDark rounded-xl group"
      >
        <div class="flex flex-col min-h-40">
          <img :src="`/assets/images/home/features/${feature.icon}`" :alt="feature.title" class="w-full h-auto flex transition grayscale  group-hover:(grayscale-0 opacity-100) filter">
        </div>
        <div class="flex flex-col flex-1 px-8 pb-8">
          <h2 class="flex my-2 text-lg font-semibold">
            {{ t(feature.title) }}
          </h2>
          <p class="flex flex-1 text-secondaryLight">
            {{ t(feature.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
