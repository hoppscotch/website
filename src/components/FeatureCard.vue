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
  <div>
    <h3 class="mb-1 text-lg font-semibold">
      {{ t(feature.title) }}
    </h3>
    <p class="leading-tight text-justify">
      {{ t(feature.description) }}
    </p>
  </div>
</template>
