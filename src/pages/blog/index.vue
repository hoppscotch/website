<template>
  <Blogs />
  <Newsletter />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Blog • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Updates from the Hoppscotch team.",
    },
  ],
})
</script>
