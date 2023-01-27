<script setup lang="ts">
import { openPositions } from "~/assets/data/careersOpenPositions"
import { gradients } from "~/assets/data/gradients"

const { t } = useI18n()
</script>

<template>
  <div id="open-roles" class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
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
          <i class="text-xl text-secondaryDark">
            <component :is="position.heading.icon" />
          </i>
          {{ t(position.heading.title) }}
        </div>
        <div class="mt-8 grid grid-cols-2 gap-8">
          <SmartLink
            v-for="(opening, openingIndex) in position.positions"
            :key="`opening-${openingIndex}`"
            :to="`/company/careers/${opening.link}`"
            class="flex flex-col p-8 border rounded-lg bg-primaryLight hover:bg-primaryDark border-dividerLight"
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
    <!-- <div class="relative py-8">
      <iframe src="https://careers.hoppscotch.io/?role=Front-end%20Engineer" frameborder="0" sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin" class="w-full text-secondary min-h-100vh" />
    </div> -->
  </div>
</template>
