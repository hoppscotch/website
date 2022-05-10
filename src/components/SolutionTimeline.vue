<script setup lang="ts">
import { solutions } from '~/assets/data/solutionsList'
const { t } = useI18n()

const activeSolutionIndex = ref(0)

const setActiveSolution = (index: number) => {
  activeSolutionIndex.value = index
}
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("solutions.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("solutions.hero.subheading") }}
      </p>
    </div>
    <div class="relative grid items-start justify-between grid-cols-1 lg:grid-cols-2 py-25 gap-30">
      <div class="lg:sticky lg:min-h-[60vh] lg:top-[20%] lg:left-0 flex flex-1 justify-center items-center bg-primary">
        <SolutionImage v-for="(solution, index) in solutions" :key="solution.title" :visible-solution="solution" :is-visible="activeSolutionIndex === index" />
      </div>
      <div class="flex flex-col">
        <SolutionCard v-for="(solution, index) in solutions" :key="solution.title" :visible-solution="solution" :solution-index="index" @set-active-solution="setActiveSolution" />
      </div>
    </div>
  </div>
</template>
