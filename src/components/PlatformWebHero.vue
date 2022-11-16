<script setup lang="ts">
import { features } from '~/assets/data/platformWeb'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="flex flex-col items-center">
      <h1
        class="font-black my-4 text-center text-secondaryDark leading-none max-w-2xl transition text-3xl md:text-4xl lg:text-5xl"
      >
        {{ t("platforms.items.web.title") }}
      </h1>
      <p class="max-w-md my-4 text-xl text-center tracking-tighter md:w-3/5">
        {{ t("platforms.items.web.description") }}
      </p>
    </div>
    <div class="mt-8 grid gap-4 grid-cols-2 md:gap-8">
      <div v-for="(feature, index) in features" :key="`feature-${index}`" class="bg-gradient-to-br rounded-xl w-full p-8 col-span-2 overflow-hidden md:p-16" :class="feature.styles">
        <i
          class="rounded-xl shadow text-secondaryDark text-3xl inline-flex items-center justify-center bg-gradient-to-tl"
          :class="feature.styles"
        >
          <component :is="feature.icon" class="h-8 m-4 w-8" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex font-semibold mt-8 text-secondaryDark mb-2 text-2xl">
            {{ t(feature.title) }}
          </h2>
          <p class="flex max-w-xl text-secondaryDark opacity-75 w-4/5">
            {{ t(feature.description) }}
          </p>
        </div>
        <img :src="`/assets/images/home/platforms/${feature.image}`" :alt="t(feature.title)" class="rounded h-auto object-top mt-8 w-full transition <lg:mt-8">
      </div>
    </div>
  </div>
</template>
