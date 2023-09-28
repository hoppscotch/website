<script setup lang="ts">
  useHead({
    title: "v0000.0.0 • Changelog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "v0000.0.0 • Changelog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "v0000.0.0 • Changelog • Hoppscotch",
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
          "https://next.hoppscotch.com/.netlify/functions/og-image?type=changelog&slug=00-00-0000",
      },
      {
        name: "twitter:image",
        content:
          "https://next.hoppscotch.com/.netlify/functions/og-image?type=changelog&slug=00-00-0000",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://next.hoppscotch.com/changelog/00-00-0000",
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
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
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
        <ChangeLog00000000 />
      </div>
    </div>
  </section>
</template>
