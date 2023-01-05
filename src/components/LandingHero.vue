<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { isDark } from "~/composables"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="block w-full max-w-2xl mt-4 mb-4 text-5xl leading-none tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br transition md:text-6xl lg:text-8xl"
        :class="gradients.gray"
      >
        {{ t("home.hero.heading") }}
        <br />
        {{ t("home.hero.heading_line_2") }}
      </h1>
      <p
        class="max-w-md my-4 text-2xl tracking-tighter text-center text-secondaryLight md:w-2/3"
      >
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex my-4 text-center space-x-2">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="GitHub"
          outline
          large
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.open_app')"
          outline
          large
        />
      </p>
      <p class="my-2 tracking-tight text-center opacity-50 text-secondaryDark">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
    <AnimatedComponent animation-type="zoom">
      <div
        class="bg-gradient-to-br rounded flex mt-16 p-0.2 relative md:rounded-lg md:mt-32"
        :class="gradients.accent"
      >
        <SmartGradient animate :blur="64" />
        <img
          class="object-cover object-center w-full h-full rounded transition md:rounded-lg"
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
