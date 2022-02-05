
<script setup lang="ts">
withDefaults(
  defineProps<{
    to: String
    label: String
    description: String
    icon: String
    svg: String
    infoIcon: String
    reverse: Boolean
  }>(), {
    to: '',
    label: '',
    description: '',
    icon: '',
    svg: '',
    infoIcon: '',
    reverse: false,
  },
)
</script>

<template>
  <router-link
    :to="to"
    class="inline-flex items-start px-4 py-2 rounded-lg transition text-secondary focus:bg-primaryDark focus:text-secondaryDark hover:bg-primaryDark hover:text-secondaryDark focus:outline-none"
    :class="[{ 'flex-1': label }, { 'flex-row-reverse justify-end': reverse }]"
  >
    <component
      :is="icon"
      v-if="icon"
      :class="label ? (reverse ? 'ml-4 opacity-75' : 'mr-4 opacity-75') : ''"
      class="inline-flex flex-shrink-0"
    />
    <div class="inline-flex items-start" :class="{ 'flex-col': description }">
      <div class="font-semibold">
        {{ label }}
      </div>
      <p v-if="description" class="my-2 text-xs text-left text-secondaryLight">
        {{ description }}
      </p>
    </div>
  </router-link>
</template>
