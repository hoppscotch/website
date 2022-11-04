<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    icon: string
  }>(),
  {
    title: '',
    description: '',
    icon: '',
  },
)
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col p-4 transition border shadow sm:p-6 rounded-xl bg-primaryLight border-dividerDark group">
    <div class="flex flex-col w-full">
      <i class="flex items-center justify-center p-2 text-xl transition transform rounded-full text-accentContrast w-13 h-13 bg-accentDark group-hover:bg-accentLight">
        <component :is="icon" class="transition transform group-hover:scale-110" />
      </i>
      <div class="flex flex-col flex-1">
        <h3 class="flex mt-5 mb-3 text-2xl font-semibold">
          {{ t(title) }}
        </h3>
        <p class="flex flex-1 leading-6 text-secondaryLight">
          {{ t(description) }}
        </p>
      </div>
    </div>
  </div>
</template>
