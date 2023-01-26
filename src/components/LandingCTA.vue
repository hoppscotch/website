<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        v-magic-hover-animation
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("home.cta.title") }}
      </div>
      <div
        class="my-4 text-xl tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br md:w-2/5"
        :class="gradients.gray"
      >
        {{ t("home.cta.description") }}
      </div>
      <div class="flex my-4 text-center space-x-2">
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
      </div>
      <div class="my-2 text-center text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </div>
    </div>
  </div>
</template>
