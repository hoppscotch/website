<script setup lang="ts">
import { values } from "~/assets/data/aboutValues"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center text-transparent transition bg-clip-text bg-gradient-to-br text-secondaryDark md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("about.values.title") }}
      </div>
      <div
        class="my-4 text-xl tracking-tighter text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("about.values.description") }}
      </div>
      <div
        v-interactive-hover-animation
        class="w-full py-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <SmartCard
          v-for="(value, index) in values"
          :key="`platform-${index}`"
          :title="t(value.title)"
          :description="t(value.description)"
          :icon="value.icon"
        />
      </div>
    </div>
  </div>
</template>
