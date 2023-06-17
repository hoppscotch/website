<template>
  <Features04 />
  <PricingTable />
  <Testimonials />
  <Cta />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Pricing • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Flexible pricing for all.",
    },
  ],
})
</script>
