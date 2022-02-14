<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  title: string
  icon: string
  isActive: boolean
}>()

defineEmits<{
  (e: 'clickedSolution'): () => void
}>()
</script>

<template>
  <div class="flex items-center justify-center w-4 h-full">
    <div class="bg-accent rounded-full h-full transition w-0.5 pointer-events-none" />
  </div>
  <div
    class="absolute flex items-center justify-center w-8 h-8 -mt-2 rounded-full cursor-pointer transform transition-all transition top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 duration-200 group hover:h-12 hover:w-12"
    :class="isActive ? 'bg-primaryDark border-2 border-accent h-12 w-12 ' : 'bg-accent'"
    @click="$emit('clickedSolution', title)"
  >
    <i class="text-accentContrast transition-all duration-300 group-hover:text-2xl" :class="isActive ? 'text-2xl text-accent' : 'text-sm'">
      <component :is="icon" />
    </i>
  </div>
</template>
