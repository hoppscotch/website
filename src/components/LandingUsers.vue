<script setup lang="ts">
import { users } from '~/assets/data/landingUsers'
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <p
      class="font-semibold my-4 text-center text-accentLight tracking-widest uppercase"
    >
      {{ t("home.users.title") }}
    </p>
    <div class="mx-auto mt-8 grid gap-4 grid-cols-3 md:grid-cols-4 lg:max-w-4xl lg:grid-cols-6">
      <div
        v-for="(user, index) in users"
        :key="`user-${index}`"
        class="flex-col p-4 inline-flex items-center justify-center"
      >
        <img
          :src="`/assets/images/users/${isDark ? 'dark' : 'light'}-${user.image}`"
          :alt="user.title"
          :title="user.title"
          loading="lazy"
          class="flex-col object-cover object-center max-h-16 inline-flex"
        >
      </div>
    </div>
    <div class="interactive-divider" />
  </div>
</template>
