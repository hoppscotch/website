<script setup lang="ts">
import { features } from "~/assets/data/landingPlatforms"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-normal tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("home.platforms.title") }}
      </div>
      <div
        class="my-4 text-2xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
        :class="gradients.gray"
      >
        {{ t("home.platforms.description") }}
      </div>
    </div>
    <div
      class="mt-16 grid grid-cols-1 grid-rows-4 lg:grid-rows-3 gap-8 lg:grid-cols-2"
    >
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        class="w-full p-8 border rounded-4xl row-span-1 border-divider group md:p-16"
        :class="feature.styles"
      >
        <div class="flex flex-col flex-1">
          <div
            class="flex mt-8 mb-2 text-3xl font-semibold tracking-tight text-secondaryDark"
          >
            {{ t(feature.title) }}
          </div>
          <div class="flex w-4/5 max-w-xl text-sm tracking-tight opacity-75">
            {{ t(feature.description) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
