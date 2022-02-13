<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    icon: string
    isActive: boolean
  }>(),
  {},
  defineEmits<{
    clickedSolution: string
  }>(),
  {},
)
</script>

<template>
  <div class="flex items-center justify-center w-4 h-full">
    <div class="w-0.5 h-full transition bg-accent rounded-full pointer-events-none" />
  </div>
  <div
    class="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 cursor-pointer transition-all duration-200 flex justify-center items-center -mt-2 rounded-full transition hover:w-12 hover:h-12 group"
    :class="isActive ? 'bg-primaryDark border-2 border-accent h-12 w-12 ' : 'bg-accent'"
    @click="$emit('clickedSolution', title)"
  >
    <i class="text-accentContrast transition-all duration-300 group-hover:text-2xl" :class="isActive ? 'text-2xl text-accent' : 'text-sm'">
      <component :is="icon" />
    </i>
  </div>
</template>
