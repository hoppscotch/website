<script setup lang="ts">
  const source = `${location.host}${location.pathname}`
  const { copy, copied } = useClipboard({
    legacy: true,
  })
</script>

<template>
  <div class="flex items-center justify-between pb-12 md:pb-16">
    <RouterLink
      to="/changelog"
      class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-gray-400/80 hover:text-gray-200"
    >
      <icon-lucide-arrow-left class="mr-2" />
      Back
    </RouterLink>
    <span class="flex items-center text-sm">
      <RouterLink
        :to="{ path: '', hash: '#newsletter' }"
        class="rounded transition text-gray-400/60 hover:text-gray-400/80"
      >
        Subscribe to updates
      </RouterLink>
      <span class="mx-4 text-gray-400/20">|</span>
      <a
        v-tippy="{
          content: 'Follow us on Twitter',
          theme: 'tooltip',
        }"
        href="https://twitter.com/hoppscotch_io"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded transition text-gray-400/60 hover:text-gray-400/80"
      >
        <icon-lucide-twitter />
      </a>
      <span class="mx-4 text-gray-400/20">|</span>
      <button
        v-tippy="{
          content: copied ? 'Copied!' : 'Copy permalink',
          theme: 'tooltip',
        }"
        class="rounded transition text-gray-400/60 hover:text-gray-400/80"
        @click="copy(source)"
      >
        <icon-lucide-copy v-if="!copied" />
        <icon-lucide-check v-else />
      </button>
    </span>
  </div>
</template>
