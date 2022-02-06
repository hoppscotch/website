<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-5xl font-black leading-none text-center text-secondaryDark transition md:text-6xl lg:text-7xl"
      >
        {{ t("platforms.hero.heading_line_1") }}
        <br>
      </h1>
      <p class="max-w-md my-4 text-xl font-semibold text-center md:w-3/5">
        {{ t("platforms.hero.subheading") }}
      </p>
    </div>
  </div>
</template>
