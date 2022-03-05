<script setup lang="ts">
import { company } from '~/assets/data/companyList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("company.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("company.hero.subheading") }}
      </p>
    </div>
    <div class="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(platform, index) in company"
        :key="`platform-${index}`"
        class="inline-flex flex-col p-8 bg-primaryLight rounded-xl transition"
      >
        <i class="text-3xl text-accentLight">
          <component :is="platform.icon" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold">
            {{ t(platform.title) }}
          </h2>
          <p class="flex flex-1 text-secondaryLight">
            {{ t(platform.description) }}
          </p>
          <p class="mt-2">
            <SmartLink :to="platform.link.target" class="inline-flex items-center text-accent transition hover:text-accentDark">
              <span class="mr-2">
                {{ t(platform.link.title) }}
              </span>
              <lucide-arrow-right />
            </SmartLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
