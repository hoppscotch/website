<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-5xl font-black leading-none text-center text-secondaryDark transition md:text-6xl lg:text-7xl"
      >
        {{ t("home.hero.heading_line_1") }}
        <br>
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 transition"
        >
          {{ t("home.hero.heading_line_2") }}
        </span>
      </h1>
      <p class="max-w-md my-4 text-xl font-semibold text-center md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex my-4 text-center space-x-4">
        <ButtonSecondary label="GitHub" />
        <ButtonPrimary to="/" :label="t('button.open-app')" />
      </p>
      <p class="text-xs text-center text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.3.title") }}
      </p>
      <div class="relative flex my-16">
        <SmartGradient />
        <img
          class="relative object-cover object-center w-full h-full rounded-lg transition"
          :src="`/assets/images/screenshots/${isDark?'dark':'light'}-banner.png`"
          alt="Screenshot"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
