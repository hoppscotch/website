<script setup lang="ts">
import { platforms } from "~/assets/data/platformsList"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("platforms.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("platforms.hero.subheading") }}
      </p>
    </div>
    <div
      v-interactive-hover-animation
      class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
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
            <h2 class="flex mt-4 mb-2 text-lg font-semibold tracking-tighter">
              {{ t(platform.title) }}
            </h2>
            <p class="flex flex-1 tracking-tight text-secondaryLight">
              {{ t(platform.description) }}
            </p>
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
