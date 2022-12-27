<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        v-magic-hover-animation
      class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition magic-text md:text-4xl lg:text-5xl"
      >
      <MagicStars />
        {{ t("home.cta.title") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("home.cta.description") }}
      </p>
      <p class="flex my-4 space-x-2 text-center">
        <ButtonSecondary
          to="https://github.com/hoppscotch/hoppscotch"
          label="GitHub"
          outline
        />
        <ButtonPrimary
          to="https://hoppscotch.io"
          :label="t('action.open_app')"
          outline
        />
      </p>
      <p class="my-2 text-xs text-center text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
  </div>
</template>
