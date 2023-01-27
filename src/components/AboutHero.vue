<script setup lang="ts">
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
        {{ t("about.hero.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
        :class="gradients.gray"
      >
        {{ t("about.hero.subheading") }}
      </div>
    </div>
    <div
      class="mt-16 grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4 md:divide-x divide-divider md:gap-0"
    >
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-accent sm:text-2xl md:text-3xl">
          {{ t("about.stats.1.title") }}
        </div>
        <div class="text-sm font-semibold sm:text-base">
          {{ t("about.stats.1.description") }}
        </div>
      </div>
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-accent sm:text-2xl md:text-3xl">
          {{ t("about.stats.2.title") }}
        </div>
        <div class="text-sm font-semibold sm:text-base">
          {{ t("about.stats.2.description") }}
        </div>
      </div>
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-accent sm:text-2xl md:text-3xl">
          {{ t("about.stats.3.title") }}
        </div>
        <div class="text-sm font-semibold sm:text-base">
          {{ t("about.stats.3.description") }}
        </div>
      </div>
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-accent sm:text-2xl md:text-3xl">
          {{ t("about.stats.4.title") }}
        </div>
        <div class="text-sm font-semibold sm:text-base">
          {{ t("about.stats.4.description") }}
        </div>
      </div>
    </div>
  </div>
</template>
