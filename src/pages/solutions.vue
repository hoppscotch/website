<template>
  <SolutionsAnimation />
  <TestimonialsCarousel />
  <Features04 />
  <Cta />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Solutions • Hoppscotch",
  meta: [
    {
      name: "description",
      content:
        "We are building the future of API development. All in one place.",
    },
  ],
})
</script>
