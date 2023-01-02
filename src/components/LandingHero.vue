<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { isDark } from "~/composables"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="mt-4 text-center text-secondaryDark leading-none tracking-tighter w-full max-w-2xl transition text-5xl block md:text-6xl lg:text-8xl"
      >
        {{ t("home.hero.heading") }}
      </h1>
      <h1
        class="bg-clip-text bg-gradient-to-r text-center text-transparent mb-4 leading-none tracking-tighter w-full max-w-2xl transition text-5xl block md:text-6xl lg:text-8xl"
        :class="gradients.accent"
      >
        {{ t("home.hero.heading_line_2") }}
      </h1>
      <p class="max-w-md my-4 text-xl text-center tracking-tighter md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex space-x-2 my-4 text-center">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="GitHub"
          outline
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.open_app')"
          outline
        />
      </p>
      <p class="my-2 text-center text-secondaryDark tracking-tight opacity-50">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
    <AnimatedComponent animation-type="zoom">
      <div
        class="bg-gradient-to-r rounded-lg flex mt-8 md:mt-32 p-0.2 relative"
        :class="gradients.accent"
      >
        <SmartGradient animate :blur="64" />
        <img
          class="rounded-lg h-full object-cover object-center w-full transition"
          :src="`/assets/images/screenshots/${
            isDark ? 'dark' : 'light'
          }-banner.png`"
          alt="Screenshot"
          loading="lazy"
        />
      </div>
    </AnimatedComponent>
  </div>
</template>
