<template>
  <FeaturesAnimation />
  <Features02 />
  <Features03 />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Features • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Hoppscotch features.",
    },
  ],
})
</script>
