<script setup lang="ts">
  useHead({
    title: "The quick brown fox • Blog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content: "The quick brown fox • Blog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content: "The quick brown fox • Blog • Hoppscotch",
      },
      {
        name: "description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        property: "og:description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "twitter:description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        property: "og:image",
        content:
          "https://next.hoppscotch.com/.netlify/functions/og-image?type=blog&slug=sample-post",
      },
      {
        name: "twitter:image",
        content:
          "https://next.hoppscotch.com/.netlify/functions/og-image?type=blog&slug=sample-post",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://next.hoppscotch.com/blog/sample-post",
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
        <BlogPostHeader :copied="copied" @copy="copy(source)" />
        <!-- Blog content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex flex-col w-full max-w-2xl">
            <div class="mb-4">
              <ul class="flex flex-wrap -m-1 text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-violet-100"
                    >Product</span
                  >
                  <span class="mx-2 text-violet-800">|</span>
                  <span class="text-violet-400/50">Jan 17, 2020</span>
                </li>
              </ul>
            </div>
            <h3 class="mb-8">
              <span class="text-violet-100">
                The quick brown fox jumped over the lazy dog
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 rounded-full shrink-0"
                src="/images/blog-author-01.jpg"
                width="32"
                height="32"
                alt="Author 01"
              />
              <div class="text-sm">
                <span class="transition text-violet-200/50">
                  Anastasia Dan
                </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded-xl"
              src="/images/blog-sample-post.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-2xl text-violet-200/80">
            <p class="mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="mt-4 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h4 class="mb-4">Lorem ipsum dolor sit amet</h4>
            <p class="mt-4 mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4">Lorem sit amet</h4>
            <p class="mt-4 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded-xl"
              src="/images/blog-sample-post.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-2xl text-violet-200/80">
            <p class="mt-4 mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4">Lorem ipsum dolor sit amet</h4>
            <p class="mt-4 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mt-4 mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4">Lorem sit amet</h4>
            <p class="mt-4 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mt-4 mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="mt-4 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
