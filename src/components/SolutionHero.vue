<script setup lang="ts">
import { solutions } from "~/assets/data/solutionsList"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("solutions.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("solutions.hero.subheading") }}
      </p>
    </div>
    <div
      v-interactive-hover-animation
      class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <SmartLink
        v-for="(solution, index) in solutions"
        :key="`solution-${index}`"
        :to="solution.link.target"
        class="h-72 interactive-hover-animation group"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col h-40">
            <img
              :src="`/assets/images/solutions/banners/${solution.icon}`"
              :alt="solution.title"
              class="flex h-auto w-full transition grayscale filter group-hover:(grayscale-0 opacity-100)"
            />
          </div>
          <div class="flex flex-col flex-1 h-32 px-8 pb-8">
            <h2 class="flex my-2 text-lg font-semibold tracking-tight">
              {{ t(solution.title) }}
            </h2>
            <p class="flex flex-1 text-sm tracking-tight text-secondaryLight">
              {{ t(solution.description) }}
            </p>
          </div>
        </div>
      </SmartLink>
    </div>
  </div>
</template>
