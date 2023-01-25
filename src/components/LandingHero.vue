<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="block w-full max-w-2xl mt-4 mb-4 text-5xl leading-none tracking-tighter text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-6xl lg:text-8xl"
        :class="gradients.gray"
      >
        {{ t("home.hero.heading") }}
        <br />
        {{ t("home.hero.heading_line_2") }}
      </h1>
      <p
        class="my-4 text-2xl tracking-tighter text-center text-secondaryLight md:w-2/5"
      >
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex my-4 text-center space-x-2">
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
        class="my-2 text-sm tracking-tight text-center opacity-50 text-secondaryDark"
      >
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
  </div>
</template>
