<script setup lang="ts">
import { landingUserLogos } from '~/assets/data/landingUserLogos'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="flex flex-col p-4 items-center">
      <p
        class="font-semibold text-sm text-center text-accent mb-8 tracking-widest uppercase"
      >
        {{ t("home.users.title") }}
      </p>
    </div>
    <div class="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="userIndex in landingUserLogos"
        :key="`user-${userIndex.title}`"
        class="flex-col p-4 inline-flex items-center justify-center"
      >
        <div class="userSvg h-16 w-16 text-secondary hover:text-secondaryLight transition-colors" :title="userIndex.title" v-html="userIndex.svg" />
      </div>
    </div>
  </div>
</template>
