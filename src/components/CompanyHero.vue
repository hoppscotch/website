<script setup lang="ts">
import { company } from '~/assets/data/companyList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center ">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("company.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("company.hero.subheading") }}
      </p>
    </div>
    <div
      v-interactive-hover-animation
      class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4"
    >
      <SmartLink
        v-for="(item, index) in company"
        :key="`item-${index}`"
        :to="item.link.target"
        class="h-64 interactive-hover-animation"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col h-24 p-8">
            <i class="text-3xl text-accentLight">
              <component :is="item.icon" />
            </i>
          </div>
          <div class="flex flex-col flex-1 h-32 px-8 pb-8">
            <h2 class="flex mt-4 mb-2 text-lg font-semibold">
              {{ t(item.title) }}
            </h2>
            <p class="flex flex-1 text-secondaryLight">
              {{ t(item.description) }}
            </p>
            <div class="mt-2">
              <div class="inline-flex items-center transition text-accent group-hover:text-accentDark">
                {{ t(item.link.title) }}
                <lucide-arrow-right class="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </SmartLink>
    </div>
  </div>
</template>
