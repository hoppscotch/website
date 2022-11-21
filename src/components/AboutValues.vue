<script setup lang="ts">
import { values } from '~/assets/data/aboutValues'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl tracking-tighter"
      >
        {{ t("about.values.title") }}
      </h2>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("about.values.description") }}
      </p>
      <div
        v-interactive-hover-animation
        class="grid w-full grid-cols-1 gap-4 py-15 md:grid-cols-2 lg:grid-cols-3"
      >
        <SmartCard
          v-for="(value, index) in values" :key="`platform-${index}`" :title="t(value.title)"
          :description="t(value.description)" :icon="value.icon"
        />
      </div>
    </div>
  </div>
</template>
