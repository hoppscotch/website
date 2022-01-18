<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="max-w-xl my-4 text-5xl font-semibold leading-none tracking-tighter text-center transition text-secondaryDark md:text-6xl lg:text-7xl"
      >
        {{ t("home.hero.heading_line_1") }}
        <br>
        <span
          class="text-transparent transition bg-clip-text bg-gradient-to-tr from-green-600 via-team-400 to-emerald-600"
        >
          {{ t("home.hero.heading_line_2") }}
        </span>
      </h1>
      <p class="my-4 text-xl text-center md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <div class="relative flex w-full my-16">
        <SmartGradient />
        <img
          class="object-cover object-center w-full relative h-full transition rounded-lg"
          :src="`/src/assets/images/${isDark?'dark':'light'}-banner.png`"
          alt="Screenshot"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
