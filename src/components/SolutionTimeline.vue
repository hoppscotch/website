<script setup lang="ts">
import { solutions } from '~/assets/data/solutionsList'
const { t } = useI18n()

const selectedSolution = ref('Design')
const selectedSolutionDetail = ref()
selectedSolutionDetail.value = solutions.find(
  solution => t(solution.title) === selectedSolution.value,
)
watch(
  () => selectedSolution.value,
  (newValue) => {
    selectedSolutionDetail.value = solutions.find(
      solution => t(solution.title) === newValue,
    )
  },
)

const solutionClicked = (solution: string) => {
  selectedSolution.value = t(solution)
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
    <div class="py-15 flex flex-col-reverse sm:grid sm:grid-cols-2 min-h-[200vh] ">
      <div
        class="flex flex-col mx-auto py-15 grid-cols-9 md:grid "
      >
        <div
          v-for="(solution, index) in solutions" :key="`solution-${index}`"
          class="flex md:contents"
          :class="{'flex-row-reverse': solution.placement === 'left'}"
        >
          <div
            :class="solution.placement === 'left'
              ? 'col-start-1 col-end-5 ml-auto pr-8'
              : 'col-start-5 col-end-6 md:mx-auto relative mr-8'"
          >
            <h2 v-if="solution.placement === 'left'" class="h-full min-h-50 w-20 md:w-30 transition transition-all flex justify-center items-center" :class="(selectedSolution === t(solution.title)) ? 'text-xl font-bold' : 'texl-md font-medium'">
              {{ t(solution.title) }}
            </h2>
            <SolutionIndicator v-else :icon="solution.icon" :title="solution.title" :is-active="selectedSolution === t(solution.title)" @clicked-solution="solutionClicked" />
          </div>
          <div
            :class="solution.placement === 'left'
              ? 'col-start-5 col-end-6 md:mx-auto relative mr-8'
              : 'col-start-6 col-end-10 mr-auto pl-8'"
          >
            <SolutionIndicator v-if="solution.placement === 'left'" :icon="solution.icon" :title="solution.title" :is-active="selectedSolution === t(solution.title)" @clicked-solution="solutionClicked" />
            <h2 v-else class="h-full min-h-50 w-20 md:w-30 transition transition-all flex justify-center items-center" :class="(selectedSolution === t(solution.title)) ? 'text-xl font-bold' : 'texl-md font-medium'">
              {{ t(solution.title) }}
            </h2>
          </div>
        </div>
      </div>
      <div class="mt-10 p-8 h-max z-10 sticky top-18 sm:top-20 rounded-md" :class="selectedSolutionDetail.background">
        <h1 class="text-xl md:text-4xl lg:text-5xl font-black text-secondary">
          {{ t(selectedSolutionDetail.title) }}
        </h1>
        <p class="py-4 sm:py-8 text-md sm:text-lg">
          {{ t(selectedSolutionDetail.description) }}
        </p>
        <img :src="t(selectedSolutionDetail.image)" :alt="t(selectedSolutionDetail.title)" class="rounded-lg object-cover object-center transition ">
      </div>
    </div>
  </div>
</template>
