<script setup lang="ts">
import { solutions } from '~/assets/data/solutionsList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center ">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("solutions.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("solutions.hero.subheading") }}
      </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
      <SmartLink
        v-for="(solution, index) in solutions"
        :key="`solution-${index}`"
        :to="solution.link.target"
        class="inline-flex flex-col transition border bg-primaryLight border-dividerDark rounded-xl group"
      >
        <div class="flex flex-col min-h-40">
          <img :src="`/assets/images/solutions/banners/${solution.icon}`" :alt="solution.title" class="flex h-auto w-full transition grayscale  filter group-hover:(grayscale-0 opacity-100) ">
        </div>
        <div class="flex flex-col flex-1 px-8 pb-8">
          <h2 class="flex my-2 text-lg font-semibold">
            {{ t(solution.title) }}
          </h2>
          <p class="flex flex-1 text-secondaryLight">
            {{ t(solution.description) }}
          </p>
        </div>
      </SmartLink>
    </div>
  </div>
</template>
