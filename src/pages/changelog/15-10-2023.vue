<script setup lang="ts">
  useHead({
    title: "v2023.8.2 • Changelog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "v2023.8.2 • Changelog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "v2023.8.2 • Changelog • Hoppscotch",
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
          "https://next.hoppscotch.com/.netlify/functions/og-image?type=changelog&slug=15-10-2023",
      },
      {
        name: "twitter:image",
        content:
          "https://next.hoppscotch.com/.netlify/functions/og-image?type=changelog&slug=15-10-2023",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://next.hoppscotch.com/changelog/15-10-2023",
      },
    ],
  })
  const source = `${location.host}${location.pathname}`
  const { copy, copied } = useClipboard({
    legacy: true,
  })
</script>

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
          >
            Changelog
          </h2>
          <p class="text-lg text-neutral-200/50">
            New updates and improvements to Hoppscotch.
          </p>
        </div>
        <!-- Section header -->
        <ChangeLogHeader :copied="copied" @copy="copy(source)" />
        <!-- Changelog content -->
        <ChangeLog15102023 />
      </div>
    </div>
  </section>
</template>
