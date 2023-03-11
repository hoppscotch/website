<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { platforms } from "~/assets/data/platformsList"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-3xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("platforms.hero.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("platforms.hero.subheading") }}
      </div>
    </div>
    <div
      v-interactive-hover-animation
      class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <SmartLink
        v-for="(platform, index) in platforms"
        :key="`platform-${index}`"
        :to="platform.link.target"
        class="h-84 interactive-hover-animation group"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col p-8 h-28">
            <img
              :src="`/assets/images/platforms/banners/${platform.icon}`"
              :alt="platform.title"
              class="w-16 h-16 transition grayscale opacity-50 group-hover:(grayscale-0 opacity-100) filter"
            />
          </div>
          <div class="flex flex-col flex-1 h-56 px-8 pb-8">
            <div
              class="flex mt-4 mb-2 text-lg font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br"
              :class="gradients.gray"
            >
              {{ t(platform.title) }}
            </div>
            <div class="flex flex-1 text-sm tracking-tight text-secondaryLight">
              {{ t(platform.description) }}
            </div>
            <div class="mt-2">
              <div
                :to="platform.link.target"
                class="inline-flex items-center transition text-accent group-hover:text-accentDark"
              >
                {{ t(platform.link.title) }}
                <lucide-arrow-right class="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </SmartLink>
    </div>
  </div>
</template>
