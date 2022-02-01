<script setup lang="ts">
import { platforms } from '~/assets/data/platformsList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
      <div
        v-for="(platform, index) in platforms"
        :key="`platform-${index}`"
        class="inline-flex flex-col justify-between p-8 border border-divider transition-colors duration-200 ease-linear transi pointer-events-none hover:bg-primaryLight"
      >
        <div>
          <i class="text-3xl text-accent">
            <component :is="platform.icon" />
          </i>

          <h2 class="flex mt-4 mb-2 text-lg font-semibold text-secondaryDark">
            {{ t(platform.title) }}
          </h2>
          <p class="flex ">
            {{ t(platform.description) }}
          </p>
        </div>
        <p class="my-2">
          <a :href="platform.link.target" class="inline-flex items-center transition pointer-events-auto text-accent hover:text-accentDark ">
            <span class="mr-2">
              {{ t(platform.link.title) }}
            </span>
            <lucide-arrow-right />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
