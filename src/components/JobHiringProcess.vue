<script setup lang="ts">
import JobProcessCard from './JobProcessCard.vue'
import { interviewProcess } from '~/assets/data/jobInterviewProcess'
import { solutions } from '~/assets/data/solutionsList'
const { t } = useI18n()

const activeTipIndex = ref(0)

const setActiveTip = (index: number) => {
  activeTipIndex.value = index
}

</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("jobs.hiringProcess.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("jobs.hiringProcess.subheading") }}
      </p>
    </div>
    <div class="relative items-start justify-between grid grid-cols-1 md:grid-cols-2 py-5 gap-30">
      <div class="sticky min-h-[40vh] lg:min-h-[60vh] top-0 md:top-15 md:top-[20%] left-0 flex flex-col justify-center items-center">
        <div v-for="(processTitle,processTitleIndex) in interviewProcess" :key="`interview-process-${processTitleIndex}`" class="absolute left-0 md:left-[25%] bg-primary md:bg-transparent w-full flex flex-col items-center md:items-start text-center md:text-left rounded-lg transition-all duration-300 p-5 lg:py-10" :class="[activeTipIndex === processTitleIndex ? 'opacity-100' : 'opacity-0']">
          <h3 class="text-5xl border-2 flex justify-center items-center h-18 w-18 rounded-full">
            {{ processTitleIndex + 1 }}
          </h3>
          <h4 class="text-2xl font-bold my-8">
            {{ t(processTitle.title) }}
          </h4>
        </div>
      </div>
      <div class="flex flex-col">
        <JobProcessCard v-for="(processTips,processTipsIndex) in interviewProcess" :key="`interview-process-${processTipsIndex}`" :visible-tip="processTips" :tip-index="processTipsIndex" @set-active-tip="setActiveTip" />
      </div>
    </div>
  </div>
</template>
