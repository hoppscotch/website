<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("careers.hero.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
        :class="gradients.gray"
      >
        {{ t("careers.hero.subheading") }}
      </div>
      <ButtonPrimary
        class="my-4"
        to="#open-roles"
        :label="t('careers.hero.open_position_btn')"
      />
    </div>
  </div>
</template>
