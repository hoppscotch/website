<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div class="relative flex max-w-4xl my-16">
        <SmartGradient />
        <img
          class="relative object-cover object-center w-full h-full rounded-lg transition"
          :src="`/assets/images/screenshots/${isDark?'dark':'light'}-banner.png`"
          alt="Screenshot"
          loading="lazy"
        >
      </div>
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
      <p class="max-w-md my-4 text-xl text-center md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex my-4 text-center space-x-4">
        <ButtonSecondary label="GitHub" />
        <ButtonSecondary to="/" :label="t('button.open-app')" rounded />
      </p>
      <p class="text-xs text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; | &nbsp; {{ t("home.hero.stats.2.title") }} &nbsp; | &nbsp; {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
    <LandingAnnouncement />
  </div>
</template>
