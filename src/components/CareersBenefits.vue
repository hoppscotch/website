<script setup lang="ts">
import { benefits } from "~/assets/data/careersBenefits"
const { t } = useI18n()
</script>

<template>
  <div class="relative flex flex-col px-8">
    <SmartGradient :blur="300" />
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("careers.benefits.heading") }}
      </h2>
      <p class="max-w-md my-4 text-2xl text-center md:w-1/2">
        {{ t("careers.benefits.subheading") }}
      </p>
    </div>
    <div class="py-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        v-for="(benefitBlock, benefitIndex) in benefits"
        :key="`benefit-${benefitIndex}`"
        v-interactive-hover-animation
        class="flex flex-col grid grid-cols-1 gap-4"
      >
        <SmartCard
          v-for="(benefit, index) in benefitBlock"
          :key="index"
          :title="t(benefit.title)"
          :description="t(benefit.description)"
          :icon="benefit.icon"
        />
      </div>
    </div>
  </div>
</template>
