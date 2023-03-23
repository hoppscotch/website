<script setup lang="ts">
import { gradients } from '~/assets/data/gradients'

const { t } = useI18n()

useHead({
  title: "Hoppscotch - Not found",
})
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-3xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl !leading-[initial]"
        :class="gradients.gray"
      >
    {{ t("error.404") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("error.404_description") }}
      </div>
      <ButtonSecondary to="/" class="mt-4" :label="t('action.home')" outline fill />
    </div>
  </div>
</template>
