<script setup lang="ts">
import check from '~icons/lucide/check-circle'
const { t } = useI18n()

withDefaults(
  defineProps<{
    feature: {
      title: string
      description: string
      longDescription: string
      icon: string
      image: string
      lists?: {
        title: string
        description: string
      }[]
    }
  }>(),
  {},
)
</script>

<template>
  <div class="flex flex-col">
    <i class="py-2 text-3xl text-accent">
      <component :is="feature.icon" />
    </i>
    <h2 class="flex my-3 text-3xl font-black text-secondaryDark">
      {{ t(feature.title) }}
    </h2>
    <p class="flex max-w-lg py-3 text-lg text-secondaryDark">
      {{ t(feature.description) }}
    </p>
    <p class="flex max-w-lg text-md">
      {{ t(feature.longDescription) }}
    </p>
    <ul v-if="feature.lists" class="py-3">
      <li v-for="(item, listIndex) in feature.lists" :key="`item-${listIndex}`" class="flex items-center pl-5 my-3 gap-2">
        <i class="text-accent">
          <component :is="check" />
        </i>
        <span>
          {{ t(item.title) }}
        </span>
      </li>
    </ul>
  </div>
</template>
