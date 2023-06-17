<template>
  <div class="flex items-center justify-center flex-1">404</div>
</template>
<route lang="yaml">
meta:
  layout: empty
</route>
<script setup>
import { useHead } from "unhead"
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
