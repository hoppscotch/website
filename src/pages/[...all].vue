<script setup lang="ts">
useHead({
  title: "404 • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "The page you are looking for does not exist.",
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen flex-1 flex-col items-center justify-center">
    <h1 class="mb-2">404</h1>
    <h4 class="mb-8 text-zinc-200">Page not found</h4>
    <h5 class="mb-8 text-zinc-400">
      The page you are looking for does not exist.
    </h5>
    <RouterLink
      class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
      to="/"
    >
      Home
    </RouterLink>
  </div>
</template>
