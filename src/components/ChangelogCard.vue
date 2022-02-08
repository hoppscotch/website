<script setup lang="ts">
const { t } = useI18n()

withDefaults(
  defineProps<{
    changelog: {
      title: string
      description: string
      placement: string
      icon: string
      date: string
    }
  }>(),
  {},
)
</script>

<template>
  <div
    class="flex flex-col p-8 my-4 transition border-2 bg-primaryLight rounded-xl border-accent"
  >
    <i class="text-3xl text-accentLight">
      <component :is="changelog.icon" />
    </i>
    <h3 class="my-4 text-2xl font-black transition text-secondaryDark">
      {{ t(changelog.title) }}
    </h3>
    <p class="text-justify transition text-secondary">
      {{ t(changelog.description) }}
    </p>
    <div class="mt-4">
      <span class="inline-flex items-center text-secondaryLight">
        <lucide-calendar class="mr-2 opacity-75" />
        {{ changelog.date }}
      </span>
    </div>
  </div>
</template>
