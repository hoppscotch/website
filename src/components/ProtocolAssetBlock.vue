<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    image: string
  }>(),
  {
    title: '',
    image: '',
  },
)

</script>

<template>
  <img :src="image" :alt="t(title)" class="rounded-lg h-full max-w-full max-h-xl object-cover object-center transition <lg:mt-8">
</template>
