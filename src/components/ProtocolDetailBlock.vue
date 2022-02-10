<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    description: string
    link: string
    hero?: boolean
  }>(),
  {
    title: '',
    description: '',
    icon: '',
    link: '',
    hero: false,
  },
)

</script>

<template>
  <div class="flex flex-col items-center text-center min-w-1/2 lg:text-left lg:items-start">
    <h1 class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-left lg:text-5xl">
      {{ t(title) }}
    </h1>
    <p class="max-w-md my-4 text-lg text-center md:w-3/5  lg:text-left">
      {{ t(description) }}
    </p>
    <div v-if="hero" class="flex my-4 text-center space-x-4">
      <ButtonSecondary to="https://github.com/hoppscotch/hoppscotch" blank label="GitHub" outline />
      <ButtonPrimary to="https://hoppscotch.io" :label="t('action.open_app')" outline />
    </div>
  </div>
</template>
