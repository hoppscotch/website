<script setup lang="ts">
import { gradients } from '~/assets/data/gradients'
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-5xl font-black leading-none text-center transition text-secondaryDark md:text-6xl lg:text-7xl"
      >
        {{ t("home.hero.heading") }}
        <span
          class="text-transparent transition bg-clip-text bg-gradient-to-r"
          :class="gradients.accent"
        >
          {{ t("home.hero.heading_line_2") }}
        </span>
      </h1>
      <p class="max-w-md my-4 text-xl text-center md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex my-4 space-x-2 text-center">
        <ButtonSecondary to="https://github.com/hoppscotch/hoppscotch" label="GitHub" outline />
        <ButtonPrimary to="https://hoppscotch.io" :label="t('action.open_app')" outline />
      </p>
      <p class="my-2 text-xs text-center text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.3.title") }}
      </p>
      <div
        class="relative flex p-1 mt-8 rounded-xl bg-gradient-to-r"
        :class="gradients.accent"
      >
        <SmartGradient animate :blur="300" />
        <img
          class="object-cover object-center w-full h-full transition shadow rounded-xl"
          :src="`/assets/images/screenshots/${isDark ? 'dark' : 'light'}-banner.png`"
          alt="Screenshot"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
