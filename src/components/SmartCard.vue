<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    icon: string | {}
    xPos?: number
    yPos?: number
  }>(),
  {
    title: '',
    description: '',
    icon: '',
    xPos: 0,
    yPos: 0,
  },
)
const { t } = useI18n()
</script>

<template>
  <div
    class="h-72 interactive-hover-animation group"
  >
    <div class="interactive-hover-contents">
      <div class="flex flex-col h-32">
        <i class="flex items-center justify-center p-2 text-xl transition transform rounded-full text-accentContrast w-13 h-13 bg-accentDark group-hover:bg-accentLight">
          <component :is="icon" class="transition transform group-hover:scale-110" />
        </i>
      </div>
      <div class="flex flex-col justify-end h-40">
        <h3 class="flex mt-5 mb-3 text-lg font-semibold">
          {{ t(title) }}
        </h3>
        <p class="flex flex-1 leading-6 text-secondaryLight">
          {{ t(description) }}
        </p>
      </div>
    </div>
  </div>
</template>
