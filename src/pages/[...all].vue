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
  <div class="flex flex-col items-center justify-center flex-1 min-h-screen">
    <h1 class="mb-2">404</h1>
    <h4 class="mb-8 text-zinc-200">Page not found</h4>
    <h5 class="mb-8 text-zinc-400">
      The page you are looking for does not exist.
    </h5>
    <RouterLink
      class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
      to="/"
    >
      Home
    </RouterLink>
  </div>
</template>
