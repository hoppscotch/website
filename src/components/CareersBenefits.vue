<script setup lang="ts">
import { benefits } from '~/assets/data/careersBenefits'
const { t } = useI18n()

const xPos = ref(0)
const yPos = ref(0)

const handlePointerMove = (ev: MouseEvent) => {
  const { x, y } = ev
  xPos.value = x
  yPos.value = y
}
</script>

<template>
  <div class="relative flex flex-col px-8">
    <SmartGradient :blur="300" />
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("careers.benefits.heading") }}
      </h2>
      <p class="max-w-md my-4 text-2xl text-center md:w-1/2">
        {{ t("careers.benefits.subheading") }}
      </p>
    </div>
    <div class="py-8 grid gap-4 grid-cols-1 md:grid-cols-3" @pointermove="handlePointerMove">
      <div
        v-for="(benefitBlock, benefitIndex) in benefits" :key="`benefit-${benefitIndex}`" class="flex flex-col grid gap-4 grid-cols-1"
      >
        <SmartCard v-for="(benefit, index) in benefitBlock" :key="index" :title="t(benefit.title)" :description="t(benefit.description)" :icon="benefit.icon" :x-pos="xPos" :y-pos="yPos" />
      </div>
    </div>
  </div>
</template>
