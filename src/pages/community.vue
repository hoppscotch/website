<template>
  <CommunitiesList />
</template>
<script setup>
import { useHead } from "@unhead/vue"
useHead({
  title: "Community • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Hoppscotch community page",
    },
  ],
})
</script>
