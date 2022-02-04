<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-xl my-4 text-4xl font-semibold leading-none text-center transition text-secondaryDark md:text-5xl lg:text-6xl"
      >
        {{ t("home.cta.title") }}
        <br>
      </h1>
      <p class="max-w-md my-4 text-xl text-center md:w-3/5">
        {{ t("home.cta.description") }}
      </p>
      <p class="flex my-4 space-x-4 text-center">
        <ButtonSecondary label="GitHub" />
        <ButtonSecondary to="/" :label="t('button.open-app')" rounded />
      </p>
      <p class="text-xs text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; | &nbsp; {{ t("home.hero.stats.2.title") }} &nbsp; | &nbsp; {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
  </div>
</template>
