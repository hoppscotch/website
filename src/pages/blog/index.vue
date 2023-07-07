<template>
  <Blogs />
  <Newsletter />
</template>
<script setup>
useHead({
  title: "Blog • Hoppscotch",
  meta: [
    {
      name: "og:title",
      content: "Blog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "Blog • Hoppscotch",
    },
    {
      name: "description",
      content: "Updates from the Hoppscotch team.",
    },
    {
      name: "og:description",
      content: "Updates from the Hoppscotch team.",
    },
    {
      name: "twitter:description",
      content: "Updates from the Hoppscotch team.",
    },
    {
      name: "og:image",
      content: "https://next.hoppscotch.com/banner-blog.png",
    },
    {
      name: "twitter:image",
      content: "https://next.hoppscotch.com/banner-blog.png",
    },
  ],
})
</script>
