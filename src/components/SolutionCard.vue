<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  visibleSolution: {
    title: string
    description: string
    background: string
  }
  solutionIndex: number
}>()

const emit = defineEmits<{
  (e: 'setActiveSolution', index: number): void
}>()

const target = ref(null)
// const targetVisible = useElementVisibility(target)
const targetVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    targetVisible.value = isIntersecting
  },
  { threshold: 1, root: null },
)

watch(
  () => targetVisible.value,
  (newValue) => {
    if (newValue)
      emit('setActiveSolution', props.solutionIndex)
  },
)

</script>

<template>
  <div ref="target" class="px-5 py-8 rounded">
    <h1 class="text-2xl font-black md:text-4xl lg:text-5xl text-secondary">
      {{ t(visibleSolution.title) }}
    </h1>
    <p class="py-4 sm:py-8 text-md sm:text-lg">
      {{ t(visibleSolution.description) }}
    </p>
  </div>
</template>
