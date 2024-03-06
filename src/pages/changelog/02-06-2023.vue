<script setup lang="ts">
useHead({
  title: "v2023.4.4 • Changelog • Hoppscotch",
  meta: [
    {
      property: "og:title",
      content: "v2023.4.4 • Changelog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "v2023.4.4 • Changelog • Hoppscotch",
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
      content: "https://hoppscotch.com/images/changelog-02-06-2023.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/changelog-02-06-2023.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/changelog/02-06-2023",
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
        <ChangeLog02062023 />
      </div>
    </div>
  </section>
</template>
