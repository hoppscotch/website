<script setup lang="ts">
import { values } from '~/assets/data/aboutValues'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("about.values.title") }}
      </h2>
      <p class="max-w-md my-4 text-2xl text-center md:w-1/2">
        {{ t("about.values.description") }}
      </p>
      <div class="py-15 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SmartCard
          v-for="(value, index) in values"
          :key="`platform-${index}`" :title="t(value.title)" :description="t(value.description)" :icon="value.icon"
        />
      </div>
    </div>
  </div>
</template>
