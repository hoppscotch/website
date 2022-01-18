<script setup lang="ts">
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
        v-for="userIndex in 12"
        :key="`user-${userIndex}`"
        class="flex-col p-4 inline-flex items-center justify-center"
      >
        <img
          :src="`/assets/images/users/${userIndex}.svg`"
          :alt="`${userIndex}`"
          loading="lazy"
          class="flex-col object-cover object-center shadow-inner max-h-16 text-blue-500 inline-flex"
        >
      </div>
    </div>
  </div>
</template>
