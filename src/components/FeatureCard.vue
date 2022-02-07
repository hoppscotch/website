<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    feature: {
      title: string
      description: string
      placement: string
      icon: string
    }
  }>(), {
  },
)
</script>

<template>
  <div class="flex flex-col p-8 my-4 border-2 transition bg-primaryLight rounded-xl border-accent">
    <h3 class="text-3xl font-black transition text-secondaryDark">
      {{ t(feature.title) }}
    </h3>
    <p class="mt-4 leading-tight text-justify transition text-secondary">
      {{ t(feature.description) }}
    </p>
  </div>
</template>
