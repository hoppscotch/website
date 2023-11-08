<script setup lang="ts">
  useHead({
    title: "v2023.4.7 • Changelog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "v2023.4.7 • Changelog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "v2023.4.7 • Changelog • Hoppscotch",
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
        content: "https://hoppscotch.com/images/changelog-27-06-2023.png",
      },
      {
        name: "twitter:image",
        content: "https://hoppscotch.com/images/changelog-27-06-2023.png",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://hoppscotch.com/changelog/27-06-2023",
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
        <ChangeLog27062023 />
      </div>
    </div>
  </section>
</template>
