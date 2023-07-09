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
const source = `${window.location.host}${window.location.pathname}`
const { copy, copied } = useClipboard({
  legacy: true,
})
</script>

<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="flex items-center justify-between pb-12 md:pb-20">
          <RouterLink
            to="/resources"
            class="inline-flex items-center px-2 py-1 text-sm transition rounded-full text-slate-400 hover:text-slate-200"
          >
            <icon-lucide-arrow-left class="mr-2" />
            Back
          </RouterLink>
          <span class="flex items-center text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="font-medium text-indigo-400 transition rounded hover:text-indigo-300"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-slate-800">|</span>
            <a
              v-tippy="{
                content: 'Follow us on Twitter',
                theme: 'tooltip',
              }"
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-indigo-400 transition rounded hover:text-indigo-300"
            >
              <icon-lucide-twitter />
            </a>
            <span class="mx-4 text-slate-800">|</span>
            <button
              v-tippy="{
                content: copied ? 'Copied!' : 'Copy permalink',
                theme: 'tooltip',
              }"
              class="text-indigo-400 transition rounded hover:text-indigo-300"
              @click="copy(source)"
            >
              <icon-lucide-copy v-if="!copied" />
              <icon-lucide-check v-else />
            </button>
          </span>
        </div>
        <!-- Page content -->
        <article
          class="flex flex-col items-center space-y-8"
          data-aos="fade-up"
        >
          <header class="flex flex-col w-full max-w-2xl">
            <div class="mb-4">
              <ul class="flex flex-wrap -m-1 text-sm font-medium">
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-slate-500"
                    >Last updated</span
                  >
                  <span class="mx-2 text-slate-800">|</span>
                  <span class="text-slate-600">Jan 17, 2020</span>
                </li>
              </ul>
            </div>
            <h3 class="h3">
              <span class="text-slate-100"> Privacy Policy </span>
            </h3>
          </header>
          <section class="max-w-2xl text-slate-300">
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
            <h4 class="mb-4 h4">Lorem ipsum dolor sit amet</h4>
            <p class="mt-4 mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 class="mb-4 h4">Lorem sit amet</h4>
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
            <h4 class="mb-4 h4">Lorem ipsum dolor sit amet</h4>
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
            <h4 class="mb-4 h4">Lorem sit amet</h4>
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
  <Newsletter />
</template>
