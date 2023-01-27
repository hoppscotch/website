<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16 interactive-gradient rounded-4xl">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <div
        class="block w-full max-w-2xl mt-4 mb-4 text-5xl leading-none tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-6xl lg:text-8xl"
        :class="gradients.gray"
      >
        {{ t("home.hero.heading") }}
        <br />
        {{ t("home.hero.heading_line_2") }}
      </div>
      <div
        class="my-4 text-2xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-2/5"
        :class="gradients.gray"
      >
        {{ t("home.hero.subheading") }}
      </div>
      <div class="flex my-4 text-center space-x-2">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="GitHub"
          large
          fill
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.open_app')"
          large
        />
      </div>
      <div
        class="my-2 text-sm tracking-tight text-center opacity-50 text-secondaryDark"
      >
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </div>
    </div>
  </div>
</template>
