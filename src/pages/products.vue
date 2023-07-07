<template>
  <ProductFeatures />
  <Features02 />
  <Features03 />
</template>
<script setup>
import { useHead } from "@unhead/vue"
useHead({
  title: "Products • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "The power to be your best.",
    },
  ],
})
</script>
