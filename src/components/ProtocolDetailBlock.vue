<script setup lang="ts">
import { isDark } from '~/composables'
import book from '~icons/lucide/book-open'
const { t } = useI18n()

withDefaults(
  defineProps<{
    title: string
    description: string
    icon: string
    link: string
    hero: boolean
  }>(),
  {
    title: '',
    description: '',
    icon: '',
    link: '',
    hero: false,
  },
)

</script>

<template>
  <div class="flex flex-col  lg:items-start lg:text-left" :class="hero ? 'text-center items-center' : ''">
    <h1 v-if="hero" class="flex flex-col items-center justify-center md:flex-row gap-3">
      <i v-if="icon" class="p-2 text-5xl text-accent rounded-md">
        <component :is="icon" />
      </i>
      <span class="text-5xl sm:text-6xl">
        {{ t(title) }}
      </span>
    </h1>
    <h2 v-else class="text-3xl">
      {{ t(title) }}
    </h2>
    <p class="max-w-xl py-6 text-lg">
      {{ t(description) }}
    </p>

    <div v-if="hero" class="flex flex-wrap sm:flex-nowrap items-center justify-center gap-5">
      <ButtonPrimary label="Open App" blank to="https://www.hoppscotch.io" />
      <ButtonSecondary label="See Documentation" :icon="book" blank :to="link" />
    </div>
    <p v-else>
      <a :href="link" class="inline-flex items-center font-semibold text-accent transition hover:text-accentLight">
        <span class="mr-2">
          Explore Documentation
        </span>
        <lucide-arrow-right />
      </a>
    </p>
  </div>
</template>
