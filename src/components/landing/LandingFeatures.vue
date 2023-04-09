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
        class="max-w-2xl text-4xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-5xl lg:text-6xl !leading-[initial]"
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
        class="h-64 interactive-hover-animation group"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col p-8">
            <div
              class="flex my-2 text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br"
              :class="gradients.gray"
            >
              {{ t(feature.title) }}
            </div>
            <div class="flex flex-1 text-sm tracking-tight text-secondaryLight">
              {{ t(feature.description) }}
            </div>
          </div>
          <div
            class="flex flex-col items-end justify-end h-full text-violet-500"
          >
            <component
              :is="feature.icon"
              class="w-20 h-20 p-6 border-t border-l rounded-full border-violet-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
