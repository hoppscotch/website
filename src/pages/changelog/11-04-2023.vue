<script setup lang="ts">
useHead({
  title: "v2023.4.0 • Changelog • Hoppscotch",
  meta: [
    {
      property: "og:title",
      content: "v2023.4.0 • Changelog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "v2023.4.0 • Changelog • Hoppscotch",
    },
    {
      name: "description",
      content: "Tabs, workspaces and more.",
    },
    {
      property: "og:description",
      content: "Tabs, workspaces and more.",
    },
    {
      name: "twitter:description",
      content: "Tabs, workspaces and more.",
    },
    {
      property: "og:image",
      content:
        "https://next.hoppscotch.com/.netlify/functions/changelog-og-generator?slug=11-04-2023",
    },
    {
      name: "twitter:image",
      content:
        "https://next.hoppscotch.com/.netlify/functions/changelog-og-generator?slug=11-04-2023",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://next.hoppscotch.com/changelog/11-04-2023",
    },
  ],
})
const source = `${window.location.host}${window.location.pathname}`
const { copy, copied } = useClipboard({
  legacy: true,
})
</script>

<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blurred shape -->
      <div
        class="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none blur-2xl opacity-70 -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs4-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#A855F7" />
              <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fill-rule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          />
        </svg>
      </div>
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="pb-12 md:pb-20">
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Changelog
          </h2>
          <p class="text-lg text-slate-400">
            New updates and improvements to Hoppscotch.
          </p>
        </div>
        <!-- Section header -->
        <ChangeLogHeader :copied="copied" @copy="copy(source)" />
        <!-- Changelog content -->
        <ChangeLog11042023 />
      </div>
    </div>
  </section>
  <Newsletter />
</template>
