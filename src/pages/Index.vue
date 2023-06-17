<template>
  <Hero />
  <Clients />
  <Features01 />
  <Features02 />
  <Features03 />
  <TestimonialsCarousel />
  <Features04 />
  <Testimonials />
  <Cta />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Hoppscotch • Open source API development ecosystem",
  meta: [
    {
      name: "description",
      content:
        "Helps you create requests faster, saving precious time on development.",
    },
  ],
})
</script>
