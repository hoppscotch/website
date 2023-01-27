<script setup lang="ts">
import { features } from "~/assets/data/landingFeatures"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="my-4 font-semibold tracking-widest text-center uppercase text-accentLight"
      >
        {{ t("home.features.title") }}
      </div>
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("home.features.description") }}
      </div>
    </div>
    <div
      v-interactive-hover-animation
      class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        class="h-72 interactive-hover-animation group"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col h-40">
            <img
              :src="`/assets/images/home/features/${feature.icon}`"
              :alt="feature.title"
              class="flex h-auto w-full transition grayscale filter group-hover:(grayscale-0 opacity-100)"
            />
          </div>
          <div class="flex flex-col h-32 px-8 pb-8">
            <div
              class="flex my-2 text-lg font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br"
              :class="gradients.gray"
            >
              {{ t(feature.title) }}
            </div>
            <div class="flex flex-1 text-sm tracking-tight text-secondaryLight">
              {{ t(feature.description) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
