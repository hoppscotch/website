<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl tracking-tighter"
      >
        {{ t("careers.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("careers.hero.subheading") }}
      </p>
      <ButtonPrimary
        class="my-4"
        to="#open-roles"
        blank
        :label="t('careers.hero.open_position_btn')"
      />
    </div>
  </div>
</template>
