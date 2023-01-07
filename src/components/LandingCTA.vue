<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="flex flex-col items-center">
      <h1
        v-magic-hover-animation
        class="my-4 text-center leading-none tracking-tighter max-w-2xl transition text-3xl magic-text md:text-4xl lg:text-5xl"
      >
        <MagicStars />
        {{ t("home.cta.title") }}
      </h1>
      <p class="max-w-md my-4 text-xl text-center tracking-tighter md:w-3/5">
        {{ t("home.cta.description") }}
      </p>
      <p class="flex space-x-2 my-4 text-center">
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
      <p class="my-2 text-center text-secondaryLight">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
  </div>
</template>
