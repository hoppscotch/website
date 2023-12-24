<script setup lang="ts">
  useHead({
    title: "v2023.12.1 • Changelog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "v2023.12.1 • Changelog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "v2023.12.1 • Changelog • Hoppscotch",
      },
      {
        name: "description",
        content: "Hotfix.",
      },
      {
        property: "og:description",
        content: "Hotfix.",
      },
      {
        name: "twitter:description",
        content: "Hotfix.",
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
        content: "https://hoppscotch.com/changelog/14-11-2023",
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
        <ChangeLog24122023 />
      </div>
    </div>
  </section>
</template>
