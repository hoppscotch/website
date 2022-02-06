<script setup lang="ts">
import { platforms } from '~/assets/data/platformsList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(platform, index) in platforms"
        :key="`platform-${index}`"
        class="inline-flex flex-col p-8 border rounded bg-gradient-to-r border-divider from-emerald-500 to-cyan-400"
      >
        <i class="text-3xl text-accent">
          <component :is="platform.icon" />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold text-secondaryDark">
            {{ t(platform.title) }}
          </h2>
          <p class="flex">
            {{ t(platform.description) }}
          </p>
          <p class="my-2">
            <router-link :to="platform.link.target" class="inline-flex items-center text-accent transition hover:text-accentDark">
              <span class="mr-2">
                {{ t(platform.link.title) }}
              </span>
              <lucide-arrow-right />
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
