<script setup lang="ts">
const props = defineProps<{
  visibleSolution: {
    title: string
    description: string
    background: string
    icon: string
    link: {
      target: string
      title: string
    }
  }
  solutionIndex: number
}>()
const emit = defineEmits<{
  (e: 'setActiveSolution', index: number): void
}>()
const { t } = useI18n()

const target = ref(null)
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
  <div ref="target" class="rounded flex flex-col h-[50vh] py-8 px-5 justify-center md:h-[60vh]">
    <i class="flex items-center justify-center w-10 h-10 text-xl rounded-full bg-accent text-accentContrast">
      <component :is="visibleSolution.icon" />
    </i>
    <h1 class="py-5 text-2xl font-black text-secondary md:text-4xl lg:text-5xl">
      {{ t(visibleSolution.title) }}
    </h1>
    <p class=" text-md sm:text-2xl">
      {{ t(visibleSolution.description) }}
    </p>
    <SmartLink :to="visibleSolution.link.target" class="inline-flex items-center py-4 transition text-accent hover:text-accentDark">
      {{ t(visibleSolution.link.title) }}
      <lucide-arrow-right class="ml-2" />
    </SmartLink>
  </div>
</template>
