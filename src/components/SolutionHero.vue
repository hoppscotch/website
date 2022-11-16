<script setup lang="ts">
import { solutions } from '~/assets/data/solutionsList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="flex flex-col items-center ">
      <h1
        class="font-black my-4 text-center text-secondaryDark leading-none max-w-2xl transition text-3xl md:text-4xl lg:text-5xl"
      >
        {{ t("solutions.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-xl text-center tracking-tighter md:w-3/5">
        {{ t("solutions.hero.subheading") }}
      </p>
    </div>
    <div
      v-interactive-hover-animation
      class="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <SmartLink
        v-for="(solution, index) in solutions"
        :key="`solution-${index}`"
        :to="solution.link.target"
        class="h-72 interactive-hover-animation group"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col h-40">
            <img :src="`/assets/images/solutions/banners/${solution.icon}`" :alt="solution.title" class="flex h-auto w-full transition grayscale filter group-hover:(grayscale-0 opacity-100) ">
          </div>
          <div class="flex flex-col flex-1 h-32 px-8 pb-8">
            <h2 class="flex font-semibold my-2 text-lg">
              {{ t(solution.title) }}
            </h2>
            <p class="flex flex-1 text-secondaryLight">
              {{ t(solution.description) }}
            </p>
          </div>
        </div>
      </SmartLink>
    </div>
  </div>
</template>
