<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    selectedSolutionDetail: {
      title: string
      description: string
      background: string
      image: string
    }
  }>(),
  {},
)
</script>

<template>
  <div class="sticky z-10 p-8 mt-10 h-max top-18 sm:top-20 rounded-md" :class="selectedSolutionDetail.background">
    <h1 class="text-xl font-black md:text-4xl lg:text-5xl text-secondary">
      {{ t(selectedSolutionDetail.title) }}
    </h1>
    <p class="py-4 sm:py-8 text-md sm:text-lg">
      {{ t(selectedSolutionDetail.description) }}
    </p>
    <img :src="t(selectedSolutionDetail.image)" :alt="t(selectedSolutionDetail.title)" loading="lazy" class="object-cover object-center rounded-lg transition ">
  </div>
</template>
