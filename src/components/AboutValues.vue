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
      <p class="max-w-md my-4 text-lg text-center md:w-1/2">
        {{ t("about.values.description") }}
      </p>
      <div class="py-15 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(value, index) in values"
          :key="`platform-${index}`"
          class="inline-flex flex-col p-4 sm:p-8 rounded-xl transition group"
        >
          <i class="text-xl text-accentContrast flex justify-center items-center w-13 h-13 p-2 rounded-full transition transform bg-accentDark group-hover:bg-accentLight">
            <component :is="value.icon" class="transition transform group-hover:scale-110" />
          </i>
          <div class="flex flex-col flex-1">
            <h3 class="flex mt-5 mb-3 text-xl font-semibold">
              {{ t(value.title) }}
            </h3>
            <p class="flex flex-1 text-secondaryLight leading-6">
              {{ t(value.description) }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
