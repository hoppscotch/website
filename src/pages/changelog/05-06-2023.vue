<script setup lang="ts">
useHead({
  title: "v2023.4.5 • Changelog • Hoppscotch",
  meta: [
    {
      property: "og:title",
      content: "v2023.4.5 • Changelog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "v2023.4.5 • Changelog • Hoppscotch",
    },
    {
      name: "description",
      content: "Security guidance.",
    },
    {
      property: "og:description",
      content: "Security guidance.",
    },
    {
      name: "twitter:description",
      content: "Security guidance.",
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
      content: "https://hoppscotch.com/changelog/05-06-2023",
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
        <ChangeLog05062023 />
      </div>
    </div>
  </section>
</template>
