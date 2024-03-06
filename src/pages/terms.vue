<script setup lang="ts">
useHead({
  title: "Terms of Service • Hoppscotch",
  meta: [
    {
      name: "description",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div class="flex items-center justify-between pb-12 md:pb-16">
          <RouterLink
            to="/legal"
            class="inline-flex items-center rounded-full px-2 py-1 text-sm text-zinc-200/80 transition hover:text-zinc-200"
          >
            <icon-lucide-arrow-left class="mr-2" />
            Back
          </RouterLink>
          <span class="flex items-center text-sm">
            <SubscribeToUpdates />
            <span class="mx-4 text-zinc-400/20">|</span>
            <a
              v-tippy="{
                content: 'Follow us on Twitter',
                theme: 'tooltip',
              }"
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded text-zinc-400/60 transition hover:text-zinc-200/80"
            >
              <icon-lucide-twitter />
            </a>
            <span class="mx-4 text-zinc-400/20">|</span>
            <button
              v-tippy="{
                content: copied ? 'Copied!' : 'Copy permalink',
                theme: 'tooltip',
              }"
              class="rounded text-zinc-400/60 transition hover:text-zinc-200/80"
              @click="copy(source)"
            >
              <icon-lucide-copy v-if="!copied" />
              <icon-lucide-check v-else />
            </button>
          </span>
        </div>
        <!-- Page content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex w-full max-w-xl flex-col">
            <div class="mb-4 text-white">
              <ul class="-m-1 flex flex-wrap text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center text-zinc-100/50 transition"
                    >Last updated</span
                  >
                  <span class="mx-2 text-zinc-400/20">|</span>
                  <span class="text-zinc-200/20">Jan 17, 2020</span>
                </li>
              </ul>
            </div>
            <h3>
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Terms of Service
              </span>
            </h3>
          </header>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="mb-8 mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h4 class="mb-4 text-white">Lorem ipsum dolor sit amet</h4>
            <p class="mb-8 mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4 text-white">Lorem sit amet</h4>
            <p class="mb-8 mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-8 mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4 text-white">Lorem ipsum dolor sit amet</h4>
            <p class="mb-8 mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-8 mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4 text-white">Lorem sit amet</h4>
            <p class="mb-8 mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-8 mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="mb-8 mt-4">
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
