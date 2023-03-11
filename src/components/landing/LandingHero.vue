<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import github from "~icons/lucide/github"
import arrowRight from "~icons/lucide/arrow-right"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <div
        class="w-full max-w-4xl mt-4 mb-4 text-5xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-6xl lg:text-8xl"
        :class="gradients.gray"
      >
        {{ t("home.hero.heading") }}
      </div>
      <div
        class="my-4 text-2xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
        :class="gradients.gray"
      >
        {{ t("home.hero.subheading") }}
      </div>
      <div class="flex my-4 space-x-2 text-center">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="Self-Host"
          :icon="github"
          large
          fill
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.get_started')"
          :icon="arrowRight"
          reverse
          large
        />
      </div>
      <div
        class="my-2 tracking-tight text-center opacity-50 text-secondaryDark"
      >
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </div>
    </div>
  </div>
</template>
