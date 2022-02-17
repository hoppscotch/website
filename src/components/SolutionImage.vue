<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    visibleSolution: {
      title: string
      image: string
    }
    isVisible: boolean
  }>(),
  {},
)

</script>

<template>
  <div>
    <img :src="visibleSolution.image" :alt="t(visibleSolution.title)" loading="lazy" class="absolute left-0 top-[50%] -translate-y-[50%] transform transition duration-300 ease-linear object-cover object-center blur-lg rounded-lg" :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 '">
  </div>
</template>
