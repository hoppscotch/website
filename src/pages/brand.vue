<template>
  <BrandHero />
  <Newsletter />
</template>
<script setup>
import { useHead } from "@unhead/vue"
useHead({
  title: "Brand • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Our brand assets and guidelines.",
    },
  ],
})
</script>
