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
        class="bg-clip-text bg-gradient-to-br mt-4 text-center text-transparent mb-4 leading-none tracking-tighter w-full max-w-2xl transition text-5xl block md:text-6xl lg:text-8xl"
        :class="gradients.gray"
      >
        {{ t("home.hero.heading") }}
        <br />
        {{ t("home.hero.heading_line_2") }}
      </h1>
      <p
        class="max-w-md my-4 text-center text-secondaryLight tracking-tighter text-2xl md:w-2/3"
      >
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex space-x-2 my-4 text-center">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="GitHub"
          outline
          large
          fill
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.open_app')"
          outline
          large
        />
      </p>
      <p
        class="my-2 text-sm text-center text-secondaryDark tracking-tight opacity-50"
      >
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
          class="rounded h-full object-cover object-center w-full transition md:rounded-lg"
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
