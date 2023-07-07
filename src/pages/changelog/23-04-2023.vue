<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blurred shape -->
      <div
        class="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none blur-2xl opacity-70 -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/400/svg" width="434" height="427">
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
        <ChangeLogHeader @copy="copy(source)" :copied="copied" />
        <!-- Changelog content -->
        <ChangeLog23042023 />
      </div>
    </div>
  </section>
  <Newsletter />
</template>
<script setup>
useHead({
  title: "v2023.4.1 • Changelog • Hoppscotch",
  meta: [
    {
      name: "og:title",
      content: "v2023.4.1 • Changelog • Hoppscotch",
    },
    {
      name: "twitter:title",
      content: "v2023.4.1 • Changelog • Hoppscotch",
    },
    {
      name: "description",
      content: "Bug fixes and performance improvements.",
    },
    {
      name: "og:description",
      content: "Bug fixes and performance improvements.",
    },
    {
      name: "twitter:description",
      content: "Bug fixes and performance improvements.",
    },
    {
      name: "og:image",
      content:
        "https://next.hoppscotch.com/.netlify/functions/changelog-og-generator?slug=23-04-2023",
    },
    {
      name: "twitter:image",
      content:
        "https://next.hoppscotch.com/.netlify/functions/changelog-og-generator?slug=23-04-2023",
    },
  ],
})
const source = `${window.location.host}${window.location.pathname}`
const { copy, copied } = useClipboard({
  legacy: true,
})
</script>
