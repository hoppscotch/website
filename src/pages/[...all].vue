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
    <h1 class="mb-2 h1">404</h1>
    <span class="mb-8 text-slate-200">Page not found</span>
    <h2 class="mb-8 text-slate-500">
      The page you are looking for does not exist.
    </h2>
    <RouterLink
      class="flex items-center justify-center px-2 py-1 font-medium transition rounded text-slate-400 hover:text-slate-200"
      to="/"
    >
      <icon-lucide-home class="mr-4" />
      Go back home
    </RouterLink>
  </div>
</template>
