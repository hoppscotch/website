<template>
  <DownloadProducts />
  <DownloadsCarousel />
  <Features04 />
</template>
<script setup>
import { useHead } from "@unhead/vue"
useHead({
  title: "Download • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Download Hoppscotch for your platform.",
    },
  ],
})
</script>
