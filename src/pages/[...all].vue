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
  <div class="flex flex-col items-center justify-center flex-1">
    <h1 class="mb-2">404</h1>
    <h2 class="mb-8 text-violet-200">Page not found</h2>
    <h4 class="mb-8 text-violet-100">
      The page you are looking for does not exist.
    </h4>
    <RouterLink
      class="flex items-center justify-center px-2 py-1 rounded transition text-violet-200/50 hover:text-violet-200"
      to="/"
    >
      <icon-lucide-home class="mr-4" />
      Go back home
    </RouterLink>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
