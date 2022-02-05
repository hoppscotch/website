<script setup lang="ts">
import { features } from '~/assets/data/landingFeatures'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <p
        class="my-4 font-semibold tracking-widest text-center uppercase text-accent"
      >
        {{ t("home.features.title") }}
      </p>
      <h3
        class="max-w-xl mt-8 mb-16 text-4xl font-bold leading-tight tracking-tight text-center"
      >
        {{ t("home.features.description") }}
      </h3>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        class="inline-flex flex-col p-8 bg-light-200 dark:bg-dark-800 rounded-xl dark:text-accentContrast "
      >
        <i class="text-3xl">
          <img :src="`/assets/${feature.image}`" alt="icon" class="w-16 h-16">
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold">
            {{ t(feature.title) }}
          </h2>
          <p class="flex opacity-60">
            {{ t(feature.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
