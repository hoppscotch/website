<script setup lang="ts">
import CareersProcessCard from "./CareersProcessCard.vue"
import { interviewProcess } from "~/assets/data/careersInterviewProcess"
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
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("careers.hiringProcess.heading") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("careers.hiringProcess.subheading") }}
      </p>
    </div>
    <div
      class="relative items-start justify-between py-5 grid grid-cols-1 md:grid-cols-2 gap-30"
    >
      <div
        class="sticky min-h-[40vh] lg:min-h-[60vh] top-0 md:top-15 md:top-[20%] left-0 flex flex-col justify-center items-center"
      >
        <div
          v-for="(processTitle, processTitleIndex) in interviewProcess"
          :key="`interview-process-${processTitleIndex}`"
          class="absolute left-0 md:left-[25%] bg-primary md:bg-transparent w-full flex flex-col items-center md:items-start text-center md:text-left rounded transition-all duration-300 p-5 lg:py-10"
          :class="[
            activeTipIndex === processTitleIndex ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <h3
            class="flex items-center justify-center text-5xl border-2 rounded-full h-18 w-18"
          >
            {{ processTitleIndex + 1 }}
          </h3>
          <h4 class="my-8 text-2xl font-bold">
            {{ t(processTitle.title) }}
          </h4>
        </div>
      </div>
      <div class="flex flex-col">
        <CareersProcessCard
          v-for="(processTips, processTipsIndex) in interviewProcess"
          :key="`interview-process-${processTipsIndex}`"
          :visible-tip="processTips"
          :tip-index="processTipsIndex"
          @set-active-tip="setActiveTip"
        />
      </div>
    </div>
  </div>
</template>
