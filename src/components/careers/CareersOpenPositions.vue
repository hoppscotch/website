<script setup lang="ts">
import { openPositions } from "~/assets/data/careersOpenPositions"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div id="open-roles" class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-4xl tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-5xl lg:text-6xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("careers.openPositions.heading") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent md:w-3/5 bg-clip-text bg-gradient-to-br"
        :class="gradients.gray"
      >
        {{ t("careers.openPositions.subheading") }}
      </div>
    </div>
    <div class="py-8 divide-y divide-dividerDark">
      <div
        v-for="(position, index) in openPositions"
        :key="`careers-${index}`"
        class="py-10"
      >
        <div class="flex items-center text-2xl font-bold gap-3">
          {{ t(position.heading.title) }}
        </div>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SmartLink
            v-for="(opening, openingIndex) in position.positions"
            :key="`opening-${openingIndex}`"
            :to="`/company/careers/${opening.link}`"
            class="flex flex-col p-4 border rounded-lg bg-primaryLight hover:bg-primaryDark border-divider"
          >
            <span class="text-lg font-semibold">
              {{ t(opening.title) }}
            </span>
            <div class="mt-2 text-secondaryLight">
              {{ t(opening.description) }}
            </div>
          </SmartLink>
        </div>
      </div>
    </div>
  </div>
</template>
