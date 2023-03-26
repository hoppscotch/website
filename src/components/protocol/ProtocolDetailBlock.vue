<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    link: string
    hero?: boolean
  }>(),
  {
    title: "",
    description: "",
    icon: "",
    link: "",
    hero: false,
  }
)
const { t } = useI18n()
</script>

<template>
  <div
    class="flex flex-col items-center text-center min-w-1/2 lg:text-left lg:items-start"
  >
    <div
      class="max-w-2xl my-4 text-3xl font-black text-center transition text-secondaryDark md:text-4xl lg:text-left lg:text-5xl"
    >
      {{ t(title) }}
    </div>
    <div
      class="my-4 text-xl tracking-tighter text-center md:w-3/5 lg:text-left"
    >
      {{ t(description) }}
    </div>
    <div v-if="hero" class="flex my-4 text-center space-x-4">
      <ButtonSecondary
        to="https://github.com/hoppscotch/hoppscotch"
        label="GitHub"
        outline
      />
      <ButtonPrimary
        to="https://hoppscotch.io"
        :label="t('action.get_started')"
        outline
      />
    </div>
  </div>
</template>
