<script setup lang="ts">
import { users } from '~/assets/data/landingUsers'
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center p-4">
      <p
        class="mb-8 font-semibold tracking-widest text-center uppercase text-accent"
      >
        {{ t("home.users.title") }}
      </p>
    </div>
    <div class="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="(user, index) in users"
        :key="`user-${index}`"
        class="inline-flex flex-col items-center justify-center p-4"
      >
        <img
          :src="`/assets/images/users/${isDark?'dark':'light'}-${user.image}`"
          :alt="user.title"
          :title="user.title"
          loading="lazy"
          class="inline-flex flex-col object-cover object-center text-blue-500 max-h-16"
        >
      </div>
    </div>
  </div>
</template>
