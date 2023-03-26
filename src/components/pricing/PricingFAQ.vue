<script setup lang="ts">
import { faq } from "~/assets/data/pricing"
</script>

<template>
  <div class="flex items-center justify-center px-8 py-16">
    <div
      class="flex flex-col flex-1 max-w-2xl border rounded-lg divide-y divide-divider bg-primaryLight border-divider"
    >
      <details
        v-for="(item, index) in faq"
        :key="index"
        class="group"
        :open="item.open"
      >
        <summary
          class="flex items-center justify-between font-medium list-none cursor-pointer focus:outline-none"
        >
          <div class="flex items-center justify-between flex-1 px-8 py-4">
            {{ item.question }} {{ item.open }}
            <icon-lucide-chevron-up
              class="transition transform"
              :class="{ 'rotate-180': item.open }"
            />
          </div>
        </summary>
        <div
          class="px-8 py-4 border-t bg-primary border-divider text-neutral-600"
        >
          {{ item.answer }}
        </div>
      </details>
    </div>
  </div>
</template>
