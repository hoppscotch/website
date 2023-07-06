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
    {
      name: "og:image",
      content: "/banner-blog.png",
    },
  ],
})
</script>
