<script setup lang="ts">
useHead({
  title: "Changelog • Hoppscotch",
  meta: [
    {
      name: "og:title",
      content: "Changelog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "Changelog • Hoppscotch",
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
      content: "https://next.hoppscotch.com/banner-changelog.png",
    },
    {
      name: "twitter:image",
      content: "https://next.hoppscotch.com/banner-changelog.png",
    },
  ],
})
</script>

<template>
  <ChangeLogs />
  <Newsletter />
</template>
