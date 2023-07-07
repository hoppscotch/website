<template>
  <ResourcesList />
</template>
<script setup>
import { useHead } from "@unhead/vue"
useHead({
  title: "Resources • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Hoppscotch resources page",
    },
  ],
})
</script>
