<script setup lang="ts">
import { features } from '~/assets/data/landingFeatures'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <p
        class="my-4 text-sm font-semibold tracking-widest text-center uppercase text-accent"
      >
        {{ t("home.features.title") }}
      </p>
      <h3
        class="max-w-xl my-8 text-4xl font-bold leading-tight tracking-tight text-center text-secondaryDark"
      >
        {{ t("home.features.description") }}
      </h3>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        class="inline-flex flex-col p-8 border border-divider rounded bg-gradient-to-r from-emerald-500 to-cyan-400"
      >
        <i class="text-3xl text-accent">
          <component :is="feature.icon" />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold text-secondaryDark">
            {{ t(feature.title) }}
          </h2>
          <p class="flex">
            {{ t(feature.description) }}
          </p>
          <p class="mt-2">
            <router-link :to="feature.link.target" class="inline-flex items-center transition text-accent hover:text-accentDark">
              <span class="mr-2">
                {{ t(feature.link.title) }}
              </span>
              <lucide-arrow-right />
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
