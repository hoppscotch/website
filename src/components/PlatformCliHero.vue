<script setup lang="ts">
import { features } from '~/assets/data/platformCli'
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("platforms.items.cli.title") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("platforms.items.cli.description") }}
      </p>
    </div>
    <div class="mt-8 grid gap-4 grid-cols-2">
      <div v-for="(feature, index) in features" :key="`feature-${index}`" class="w-full p-8 overflow-hidden rounded-xl col-span-2" :class="feature.styles">
        <i class="text-3xl text-secondaryDark">
          <component :is="feature.icon" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold text-secondaryDark">
            {{ t(feature.title) }}
          </h2>
          <p class="flex w-4/5 max-w-xl opacity-75 text-secondaryDark">
            {{ t(feature.description) }}
          </p>
        </div>
        <img :src="`/assets/images/platforms/cli/${isDark ? 'dark' : 'light'}-${feature.image}`" :alt="t(feature.title)" class="rounded h-auto object-top mt-8 w-full transition <lg:mt-8">
      </div>
    </div>
  </div>
</template>
