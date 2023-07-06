<template>
  <div class="flex items-center justify-between pb-12 md:pb-20">
    <RouterLink
      to="/blog"
      class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-400 hover:text-slate-200"
    >
      <icon-lucide-arrow-left class="mr-2" />
      Back
    </RouterLink>
    <span class="flex items-center text-sm">
      <RouterLink
        :to="{ path: '', hash: '#newsletter' }"
        class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
      >
        Subscribe to updates
      </RouterLink>
      <span class="mx-4 text-slate-800">|</span>
      <a
        href="https://twitter.com/hoppscotch_io"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
        v-tippy="'Follow us on Twitter'"
      >
        <icon-lucide-twitter />
      </a>
      <span class="mx-4 text-slate-800">|</span>
      <button
        @click="$emit('copy')"
        class="text-indigo-400 rounded transition hover:text-indigo-300"
        v-tippy="copied ? 'Copied!' : 'Copy permalink'"
      >
        <icon-lucide-copy v-if="!copied" />
        <icon-lucide-check v-else />
      </button>
    </span>
  </div>
</template>
<script setup>
defineProps({
  copied: Boolean,
})
defineEmits(["copy"])
</script>
