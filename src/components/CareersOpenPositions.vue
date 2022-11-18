<script setup lang="ts">
import { openPositions } from '~/assets/data/careersOpenPositions'
const { t } = useI18n()
</script>

<template>
  <div id="open-roles" class="relative flex flex-col px-8">
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("careers.openPositions.heading") }}
      </h2>
      <p class="max-w-md my-4 text-2xl text-center md:w-1/2">
        {{ t("careers.openPositions.subheading") }}
      </p>
    </div>
    <div />
    <div class="py-8 divide-y divide-dividerDark">
      <div v-for="(position, index) in openPositions" :key="`careers-${index}`" class="py-10">
        <h3 class="flex items-center gap-3 text-2xl font-bold">
          <i class="text-xl text-secondaryDark">
            <component :is="position.heading.icon" />
          </i>
          {{ t(position.heading.title) }}
        </h3>
        <ul class="my-4">
          <li v-for="(opening, openingIndex) in position.positions" :key="`opening-${openingIndex}`" class="max-w-xl my-5 text-2xl border rounded bg-primaryLight border-dividerDarktransition hover:bg-primaryDark">
            <SmartLink :to="`careers/${opening.link}`" class="block p-4">
              <span>
                {{ t(opening.title) }}
              </span>
              <p class="my-2 text-sm text-secondaryLight">
                {{ t(opening.description) }}
              </p>
            </SmartLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="relative py-8">
      <iframe src="https://careers.hoppscotch.io/?role=Front-end%20Engineer" frameborder="0" sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin" class="w-full text-secondary min-h-100vh" />
    </div> -->
  </div>
</template>
