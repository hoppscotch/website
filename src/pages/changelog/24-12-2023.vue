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
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <ChangeLogHeader />
        <!-- Changelog content -->
        <ChangeLog24122023 />
      </div>
    </div>
  </section>
</template>
