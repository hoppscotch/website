<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center p-4">
      <p
        class="mb-8 text-sm font-semibold tracking-widest text-center uppercase text-accent"
      >
        {{ t("home.users.title") }}
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="userIndex in 12"
        :key="`user-${userIndex}`"
        class="inline-flex flex-col items-center justify-center p-4"
      >
        <img
          :src="`/assets/images/users/${userIndex}.svg`"
          :alt="`${userIndex}`"
          loading="lazy"
          class="inline-flex flex-col object-cover object-center text-blue-500 max-h-16"
        >
      </div>
    </div>
  </div>
</template>
