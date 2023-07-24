<script setup lang="ts">
defineProps({
  copied: Boolean,
})
defineEmits(["copy"])
</script>

<template>
  <div class="flex items-center justify-between pb-12 md:pb-20">
    <RouterLink
      to="/changelog"
      class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-400 hover:text-slate-200"
    >
      <icon-lucide-arrow-left class="mr-2" />
      Back
    </RouterLink>
    <span class="flex items-center text-sm">
      <RouterLink
        :to="{ path: '', hash: '#newsletter' }"
        class="font-medium rounded text-violet-400 transition hover:text-violet-300"
      >
        Subscribe to updates
      </RouterLink>
      <span class="mx-4 text-slate-800">|</span>
      <a
        v-tippy="{
          content: 'Follow us on Twitter',
          theme: 'tooltip',
        }"
        href="https://twitter.com/hoppscotch_io"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium rounded text-violet-400 transition hover:text-violet-300"
      >
        <icon-lucide-twitter />
      </a>
      <span class="mx-4 text-slate-800">|</span>
      <button
        v-tippy="{
          content: copied ? 'Copied!' : 'Copy permalink',
          theme: 'tooltip',
        }"
        class="rounded text-violet-400 transition hover:text-violet-300"
        @click="$emit('copy')"
      >
        <icon-lucide-copy v-if="!copied" />
        <icon-lucide-check v-else />
      </button>
    </span>
  </div>
</template>
