<script setup lang="ts">
  useHead({
    title: "Blog • Hoppscotch",
    meta: [
      {
        property: "og:title",
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
        property: "og:description",
        content: "Updates from the Hoppscotch team.",
      },
      {
        name: "twitter:description",
        content: "Updates from the Hoppscotch team.",
      },
      {
        property: "og:image",
        content: "https://hoppscotch.com/banner-blog.png",
      },
      {
        name: "twitter:image",
        content: "https://hoppscotch.com/banner-blog.png",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://hoppscotch.com/blog",
      },
    ],
  })
</script>

<template>
  <Blogs />
</template>
