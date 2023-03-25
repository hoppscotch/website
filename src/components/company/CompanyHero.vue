<script setup lang="ts">
import { company } from "~/assets/data/companyList"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-4xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-5xl lg:text-6xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("company.hero.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("company.hero.subheading") }}
      </div>
    </div>
    <div
      v-interactive-hover-animation
      class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <SmartLink
        v-for="(item, index) in company"
        :key="`item-${index}`"
        :to="item.link.target"
        class="h-64 interactive-hover-animation"
      >
        <div class="interactive-hover-contents">
          <div class="flex flex-col p-8 h-18">
            <i class="text-3xl text-accentLight">
              <component :is="item.icon" />
            </i>
          </div>
          <div class="flex flex-col flex-1 h-40 px-8 pb-8">
            <div class="flex mt-4 mb-2 text-lg font-semibold tracking-tight">
              {{ t(item.title) }}
            </div>
            <div class="flex flex-1 text-sm tracking-tight text-secondaryLight">
              {{ t(item.description) }}
            </div>
            <div class="mt-2">
              <div
                class="inline-flex items-center transition text-accent group-hover:text-accentDark"
              >
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
