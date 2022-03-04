<script setup lang="ts">
import { company } from '~/assets/data/companyList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="flex flex-col items-center">
      <h1
        class="font-black my-4 text-center text-secondaryDark leading-none max-w-2xl transition text-3xl md:text-4xl lg:text-5xl"
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
        class="bg-primaryLight rounded-xl flex-col p-8 transition inline-flex"
      >
        <i class="text-accentLight text-3xl">
          <component :is="platform.icon" />
        </i>
        <div class="flex flex-col flex-1">
          <h2 class="flex font-semibold mt-4 text-lg mb-2">
            {{ t(platform.title) }}
          </h2>
          <p class="flex flex-1 text-secondaryLight">
            {{ t(platform.description) }}
          </p>
          <p class="mt-2">
            <SmartLink :to="platform.link.target" class="text-accent transition inline-flex items-center hover:text-accentDark">
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
