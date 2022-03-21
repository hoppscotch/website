<script setup lang="ts">
const { t } = useI18n()

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

</script>

<template>
  <div class="flex flex-col p-4 sm:p-6 rounded-xl transition shadow bg-primaryLight group">
    <div class="flex flex-col w-full">
      <i class="flex items-center justify-center p-2 text-xl rounded-full text-accentContrast w-13 h-13 transition transform bg-accentDark group-hover:bg-accentLight">
        <component :is="icon" class="transition transform group-hover:scale-110" />
      </i>
      <div class="flex flex-col flex-1">
        <h3 class="flex mt-5 mb-3 text-lg font-semibold">
          {{ t(title) }}
        </h3>
        <p class="flex flex-1 text-secondaryLight leading-6">
          {{ t(description) }}
        </p>
      </div>
    </div>
  </div>
</template>
