<script setup lang="ts">
import CareersProcessCard from "./CareersProcessCard.vue"
import { gradients } from "~/assets/data/gradients"
import { interviewProcess } from "~/assets/data/careersInterviewProcess"

const { t } = useI18n()

const activeTipIndex = ref(0)

function setActiveTip (index: number) {
  activeTipIndex.value = index
}
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-4xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-5xl lg:text-6xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("careers.hiringProcess.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("careers.hiringProcess.subheading") }}
      </div>
    </div>
    <div
      class="relative items-start justify-between py-8 grid grid-cols-1 gap-32 md:grid-cols-2"
    >
      <div
        class="sticky min-h-[40vh] lg:min-h-[60vh] top-0 md:top-15 md:top-[20%] left-0 flex flex-col justify-center items-center"
      >
        <div
          v-for="(processTitle, processTitleIndex) in interviewProcess"
          :key="`interview-process-${processTitleIndex}`"
          class="absolute left-0 md:left-[25%] bg-primary md:bg-transparent w-full flex flex-col items-center md:items-start text-center md:text-left rounded-lg transition-all duration-300 p-5 lg:py-10"
          :class="[
            activeTipIndex === processTitleIndex ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <div
            class="flex items-center justify-center text-5xl border-2 rounded-full h-18 w-18"
          >
            {{ processTitleIndex + 1 }}
          </div>
          <div class="my-8 text-2xl font-bold">
            {{ t(processTitle.title) }}
          </div>
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
