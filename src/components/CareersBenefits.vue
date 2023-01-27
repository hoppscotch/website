<script setup lang="ts">
import { benefits } from "~/assets/data/careersBenefits"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("careers.benefits.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
        :class="gradients.gray"
      >
        {{ t("careers.benefits.subheading") }}
      </div>
    </div>
    <div
      class="w-full py-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
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
