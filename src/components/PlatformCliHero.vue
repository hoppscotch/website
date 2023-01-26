<script setup lang="ts">
import { features } from "~/assets/data/platformCli"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("platforms.items.cli.title") }}
      </div>
      <div class="my-4 text-2xl tracking-tighter text-center md:w-3/5">
        {{ t("platforms.items.cli.description") }}
      </div>
    </div>
    <div class="mt-16 grid grid-cols-2 gap-4 md:gap-8">
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        class="w-full p-8 overflow-hidden col-span-2 bg-gradient-to-br rounded-xl md:p-16"
        :class="feature.styles"
      >
        <i
          class="inline-flex items-center justify-center text-3xl shadow bg-gradient-to-br rounded-xl text-secondaryDark"
          :class="feature.styles"
        >
          <component :is="feature.icon" class="w-8 h-8 m-4" />
        </i>
        <div class="flex flex-col flex-1">
          <div
            class="flex mt-8 mb-2 text-3xl font-semibold tracking-tighter text-secondaryDark"
          >
            {{ t(feature.title) }}
          </div>
          <div
            class="flex w-4/5 max-w-xl text-sm tracking-tight opacity-75 text-secondaryDark"
          >
            {{ t(feature.description) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
