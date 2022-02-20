<script setup lang="ts">
const { t } = useI18n()

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
  <div ref="target" class="px-5 py-8 rounded h-[50vh] md:h-[60vh] flex flex-col justify-center">
    <i class="text-xl text-contrast bg-accent w-10 h-10 flex justify-center items-center rounded-full">
      <component :is="visibleSolution.icon" />
    </i>
    <h1 class="text-2xl font-black md:text-4xl lg:text-5xl py-5 text-secondary">
      {{ t(visibleSolution.title) }}
    </h1>
    <p class=" text-md sm:text-lg">
      {{ t(visibleSolution.description) }}
    </p>
    <SmartLink :to="visibleSolution.link.target" class="py-4 inline-flex items-center text-accent transition hover:text-accentDark">
      <span class="mr-2">
        {{ t(visibleSolution.link.title) }}
      </span>
      <lucide-arrow-right />
    </SmartLink>
  </div>
</template>
