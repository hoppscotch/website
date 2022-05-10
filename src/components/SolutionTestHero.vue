<script setup lang="ts">
import { features } from '~/assets/data/solutionTest'
import { isDark } from '~/composables'
import check from '~icons/lucide/check-circle'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("solutions.items.testing.title") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("solutions.items.testing.description") }}
      </p>
    </div>
    <div class="flex flex-col my-10">
      <div v-for="(feature, index) in features" :key="`feature-${index}`" class="items-center grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-30 py-15 sm:py-20">
        <SolutionDetailBlock :feature="feature" />
        <SolutionImageBlock :feature="feature" />
      </div>
    </div>
  </div>
</template>
