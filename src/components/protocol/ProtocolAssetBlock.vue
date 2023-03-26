<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    image: string
  }>(),
  {
    title: "",
    image: "",
  }
)
const { t } = useI18n()
</script>

<template>
  <img
    :src="image"
    :alt="t(title)"
    class="rounded h-full max-w-full max-h-xl object-cover object-center transition <lg:mt-8"
  />
</template>
