<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import github from "~icons/lucide/github"
import arrowRight from "~icons/lucide/arrow-right"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-4xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-5xl lg:text-6xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("home.cta.title") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("home.cta.description") }}
      </div>
      <div class="flex my-4 text-center space-x-2">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="Self-Host"
          :icon="github"
          fill
          outline
          blank
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.get_started')"
          :icon="arrowRight"
          outline
          blank
          reverse
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
