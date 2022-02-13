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
    <div class="flex flex-col-reverse py-15 sm:grid sm:grid-cols-2 ">
      <div
        class="flex flex-col mx-auto grid-cols-9 py-15 md:grid "
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
            <h2 v-if="solution.placement === 'left'" class="flex items-center justify-center w-20 h-full transition-all transition min-h-50 md:w-30" :class="(selectedSolution === t(solution.title)) ? 'text-xl font-bold' : 'texl-md font-medium'">
              {{ t(solution.title) }}
            </h2>
            <SolutionIndicator v-else :icon="solution.icon" :title="solution.title" :is-active="selectedSolution === t(solution.title)" @clicked-solution="solutionClicked"  />
          </div>
          <div
            :class="solution.placement === 'left'
              ? 'col-start-5 col-end-6 md:mx-auto relative mr-8'
              : 'col-start-6 col-end-10 mr-auto pl-8'"
          >
            <SolutionIndicator v-if="solution.placement === 'left'" :icon="solution.icon" :title="solution.title" :is-active="selectedSolution === t(solution.title)" @clicked-solution="solutionClicked" />
            <h2 v-else class="flex items-center justify-center w-20 h-full transition-all transition min-h-50 md:w-30" :class="(selectedSolution === t(solution.title)) ? 'text-xl font-bold' : 'texl-md font-medium'">
              {{ t(solution.title) }}
            </h2>
          </div>
        </div>
      </div>
      <SolutionCard :selected-solution-detail="selectedSolutionDetail" />
    </div>
  </div>
</template>
