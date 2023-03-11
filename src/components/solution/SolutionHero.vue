<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { solutions } from "~/assets/data/solutionsList"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-3xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("solutions.hero.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("solutions.hero.subheading") }}
      </div>
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
            <div
              class="flex my-2 text-lg font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br"
              :class="gradients.gray"
            >
              {{ t(solution.title) }}
            </div>
            <div class="flex flex-1 text-sm tracking-tight text-secondaryLight">
              {{ t(solution.description) }}
            </div>
          </div>
        </div>
      </SmartLink>
    </div>
  </div>
</template>
