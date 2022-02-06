<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("home.cta.title") }}
        <br>
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("home.cta.description") }}
      </p>
      <p class="flex my-4 text-xl text-center space-x-4">
        <ButtonSecondary label="GitHub" />
        <ButtonPrimary :label="t('button.open-app')" />
      </p>
      <p class="my-2 text-xs text-center text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
  </div>
</template>
