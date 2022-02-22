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
  <div class="flex flex-col ">
    <i class="text-accent text-3xl py-2">
      <component :is="feature.icon" />
    </i>
    <h2 class="flex my-3 text-3xl font-black text-secondaryDark">
      {{ t(feature.title) }}
    </h2>
    <p class="flex text-lg text-secondaryDark max-w-lg py-3">
      {{ t(feature.description) }}
    </p>
    <p class="flex text-md max-w-lg ">
      {{ t(feature.longDescription) }}
    </p>
    <ul v-if="feature.lists" class="py-3">
      <li v-for="(item, listIndex) in feature.lists" :key="`item-${listIndex}`" class="flex items-center gap-2 my-3 pl-5">
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
