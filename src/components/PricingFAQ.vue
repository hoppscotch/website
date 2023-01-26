<script setup lang="ts">
import { faq } from "~/assets/data/pricing"
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div
      class="flex flex-col flex-1 max-w-2xl border rounded-lg divide-y divide-divider bg-primaryLight border-divider"
    >
      <details v-for="(item, index) in faq" :key="index" class="group">
        <summary
          class="flex items-center justify-between font-medium list-none cursor-pointer"
        >
          <span class="flex flex-1 px-8 py-4">{{ item.question }}</span>
          <span class="transition">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
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
