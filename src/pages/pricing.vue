<script setup lang="ts">
  useHead({
    title: "Pricing • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "Pricing • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "Pricing • Hoppscotch",
      },
      {
        name: "description",
        content: "Flexible pricing for all.",
      },
      {
        property: "og:description",
        content: "Flexible pricing for all.",
      },
      {
        name: "twitter:description",
        content: "Flexible pricing for all.",
      },
      {
        property: "og:image",
        content: "https://hoppscotch.com/banner-pricing.png",
      },
      {
        name: "twitter:image",
        content: "https://hoppscotch.com/banner-pricing.png",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://hoppscotch.com/pricing",
      },
    ],
  })
</script>

<template>
  <PricingTable />
  <!-- <ComparrisionTable /> -->
  <!-- <Clients /> -->
  <Testimonials />
  <Cta />
</template>
