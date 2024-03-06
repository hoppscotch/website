<script setup lang="ts">
useHead({
  title: "v2023.12.3 • Changelog • Hoppscotch",
  meta: [
    {
      property: "og:title",
      content: "v2023.12.3 • Changelog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "v2023.12.3 • Changelog • Hoppscotch",
    },
    {
      name: "description",
      content: "Bug fixes and performance improvements.",
    },
    {
      property: "og:description",
      content: "Bug fixes and performance improvements.",
    },
    {
      name: "twitter:description",
      content: "Bug fixes and performance improvements.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/banner-changelog.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/banner-changelog.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/changelog/31-01-2024",
    },
  ],
})
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <ChangeLogHeader />
        <!-- Changelog content -->
        <ChangeLog31012024 />
      </div>
    </div>
  </section>
</template>
