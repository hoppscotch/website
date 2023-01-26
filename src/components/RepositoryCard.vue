<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  styles: {
    type: String,
    required: true,
  },
  icon: {
    type: String || Object,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  stars: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <SmartLink
    :to="link"
    class="flex flex-col flex-1 p-8 rounded-lg opacity-75 group col-span-6 row-span-2 hover:opacity-100 transition lg:col-span-2 bg-primary"
    :class="styles"
    blank
  >
    <div
      class="flex items-center mb-4 text-lg font-semibold tracking-tighter text-secondaryLight"
    >
      <div class="flex flex-1">
        hoppscotch/
        <span class="text-secondary group-hover:text-secondaryDark transition">
          {{ title }}
        </span>
      </div>
      <span class="ml-4">
        <component :is="icon" class="w-5 h-5 opacity-25" />
      </span>
    </div>
    <div class="flex flex-1 text-secondaryLight">
      {{ description }}
    </div>
    <div class="flex items-center mt-4 text-secondaryLight">
      <span class="w-2 h-2 mr-2 rounded-full" :class="color"></span>
      {{ language }}
      <lucide-star class="w-3 h-3 ml-6 mr-2" /> {{ stars }}
    </div>
  </SmartLink>
</template>
