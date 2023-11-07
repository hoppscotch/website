<script setup lang="ts">
  useHead({
    title: "v2023.8.1 • Changelog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "v2023.8.1 • Changelog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "v2023.8.1 • Changelog • Hoppscotch",
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
        content:
          "https://hoppscotch.com/.netlify/functions/og-image?type=changelog&slug=18-09-2023",
      },
      {
        name: "twitter:image",
        content:
          "https://hoppscotch.com/.netlify/functions/og-image?type=changelog&slug=18-09-2023",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://hoppscotch.com/changelog/18-09-2023",
      },
    ],
  })
</script>

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <ChangeLogHeader />
        <!-- Changelog content -->
        <ChangeLog18092023 />
      </div>
    </div>
  </section>
</template>
