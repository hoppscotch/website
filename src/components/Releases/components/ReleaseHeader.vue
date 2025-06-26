<script setup lang="ts">
const source = `${location.host}${location.pathname}`
const { copy, copied } = useClipboard({
  legacy: true,
})
</script>

<template>
  <div class="flex items-center justify-between pb-12 md:pb-16">
    <RouterLink
      to="/releases"
      class="inline-flex items-center rounded-full px-2 py-1 text-sm text-zinc-400/80 transition hover:text-zinc-200"
    >
      <icon-lucide-arrow-left class="mr-2" />
      Back
    </RouterLink>
    <span class="flex items-center text-sm">
      <SubscribeToUpdates />
      <span class="mx-4 text-zinc-400/20">|</span>
      <a
        v-tippy="{
          content: 'Follow us on Twitter',
          theme: 'tooltip',
        }"
        href="https://twitter.com/hoppscotch_io"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded text-zinc-400/60 transition hover:text-zinc-400/80"
      >
        <icon-lucide-twitter />
      </a>
      <span class="mx-4 text-zinc-400/20">|</span>
      <button
        v-tippy="{
          content: copied ? 'Copied!' : 'Copy permalink',
          theme: 'tooltip',
        }"
        class="rounded text-zinc-400/60 transition hover:text-zinc-400/80"
        @click="copy(source)"
      >
        <icon-lucide-copy v-if="!copied" />
        <icon-lucide-check v-else />
      </button>
    </span>
  </div>
</template>
