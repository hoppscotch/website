<script setup lang="ts">
  useHead({
    title: "Privacy Policy • Hoppscotch",
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
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="flex items-center justify-between pb-12 md:pb-16">
          <RouterLink
            to="/legal"
            class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-zinc-200/80 hover:text-zinc-200"
          >
            <icon-lucide-arrow-left class="mr-2" />
            Back
          </RouterLink>
          <span class="flex items-center text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="rounded transition text-zinc-400/60 hover:text-zinc-200/80"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-zinc-400/20">|</span>
            <a
              v-tippy="{
                content: 'Follow us on Twitter',
                theme: 'tooltip',
              }"
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded transition text-zinc-400/60 hover:text-zinc-200/80"
            >
              <icon-lucide-twitter />
            </a>
            <span class="mx-4 text-zinc-400/20">|</span>
            <button
              v-tippy="{
                content: copied ? 'Copied!' : 'Copy permalink',
                theme: 'tooltip',
              }"
              class="rounded transition text-zinc-400/60 hover:text-zinc-200/80"
              @click="copy(source)"
            >
              <icon-lucide-copy v-if="!copied" />
              <icon-lucide-check v-else />
            </button>
          </span>
        </div>
        <!-- Page content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex flex-col w-full max-w-2xl">
            <div class="mb-4">
              <ul class="flex flex-wrap -m-1 text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-zinc-100/50"
                    >Last updated</span
                  >
                  <span class="mx-2 text-zinc-400/20">|</span>
                  <span class="text-zinc-200/20">Jan 17, 2020</span>
                </li>
              </ul>
            </div>
            <h3>
              <span
                class="block text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
              >
                Privacy Policy
              </span>
            </h3>
          </header>
          <section class="max-w-2xl text-zinc-200/80">
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
