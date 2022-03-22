<script setup lang="ts">
import { openPositions } from '~/assets/data/jobOpenPositions'
const { t } = useI18n()
</script>

<template>
  <div id="openPosition" class="flex flex-col px-8 relative">
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("jobs.openPositions.heading") }}
      </h2>
      <p class="max-w-md my-4 text-lg text-center md:w-1/2">
        {{ t("jobs.openPositions.subheading") }}
      </p>
    </div>
    <div />
    <div class="py-8 divide-dividerDark divide-y">
      <div v-for="(position,index) in openPositions" :key="`job-${index}`" class="py-10">
        <h3 class="text-2xl font-bold flex items-center gap-3">
          <i class="text-xl text-secondaryDark">
            <component :is="position.heading.icon" />
          </i>
          {{ t(position.heading.title) }}
        </h3>
        <ul class="my-4">
          <li v-for="(opening,openingIndex) in position.positions" :key="`opening-${openingIndex}`" class="my-5 text-lg bg-primaryLight rounded max-w-xl transition hover:bg-primaryDark">
            <SmartLink :to="`jobs/${opening.link}`" class="block p-4">
              <span>
                {{ t(opening.title) }}
              </span>
              <p class="text-sm my-2 text-secondaryLight">
                {{ t(opening.description) }}
              </p>
            </SmartLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="py-8 relative">
      <iframe src="https://careers.hoppscotch.io/?role=Front-end%20Engineer" frameborder="0" sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin" class="w-full min-h-100vh text-secondary" />
    </div> -->
  </div>
</template>
