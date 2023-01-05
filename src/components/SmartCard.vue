<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    icon: string | object;
    xPos?: number;
    yPos?: number;
  }>(),
  {
    title: "",
    description: "",
    icon: "",
    xPos: 0,
    yPos: 0,
  }
)
const { t } = useI18n()
</script>

<template>
  <div class="h-72 interactive-hover-animation group">
    <div class="interactive-hover-contents">
      <div class="flex flex-col h-32 p-8">
        <i
          class="flex items-center justify-center p-2 text-xl rounded-full transition transform text-accentContrast w-13 h-13 bg-accentDark group-hover:bg-accentLight"
        >
          <component
            :is="icon"
            class="transition transform group-hover:scale-110"
          />
        </i>
      </div>
      <div class="flex flex-col justify-end flex-1 h-40 px-8 pb-8">
        <h3 class="flex mt-2 mb-2 text-lg font-semibold tracking-tighter">
          {{ t(title) }}
        </h3>
        <p class="flex flex-1 tracking-tight text-secondaryLight">
          {{ t(description) }}
        </p>
      </div>
    </div>
  </div>
</template>
