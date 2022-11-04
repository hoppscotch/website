<script setup lang="ts">
import { supports } from '~/assets/data/supportList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("support.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("support.hero.subheading") }}
      </p>
    </div>
    <div class="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(support, index) in supports"
        :key="`support-${index}`"
        class="inline-flex flex-col p-8 bg-primaryLight border border-dividerDark rounded-xl transition"
      >
        <i class="flex items-center justify-center w-10 h-10 p-2 text-xl rounded-full text-accentContrast bg-accent">
          <component :is="support.icon" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex mt-4 mb-2 text-2xl font-semibold">
            {{ t(support.title) }}
          </h2>
          <p class="flex flex-1 text-secondaryLight">
            {{ t(support.description) }}
          </p>
          <p class="mt-3">
            <SmartLink :to="support.link.target" class="inline-flex items-center text-accent transition hover:text-accentDark">
              <span class="mr-2">
                {{ t(support.link.title) }}
              </span>
              <lucide-arrow-right />
            </SmartLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
