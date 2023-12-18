<template>
  <!-- Hero section -->
  <section class="bg-gradient-to-b from-zinc-900 to-zinc-950">
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600"
          >
            Communities
          </span>
          <h2
            class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            Made by the community
          </h2>
          <p class="text-zinc-400/80">
            Join our community and get help, support, and feedback.
          </p>
        </div>
        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none"
        >
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl bg-zinc-900 rounded-2xl"
          >
            <icon-lucide-book-open
              class="w-12 h-12 p-3 mb-4 text-zinc-200 bg-zinc-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-semibold">Documentation</h4>
            <p class="text-sm text-zinc-100">
              Read through our docs to learn how to get started with our
              products.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl bg-zinc-900 rounded-2xl"
          >
            <icon-lucide-github
              class="w-12 h-12 p-3 mb-4 text-zinc-200 bg-zinc-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-semibold">GitHub</h4>
            <p class="text-sm text-zinc-100">
              Explore our GitHub repositories and contribute to our open source
              projects.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl bg-zinc-900 rounded-2xl"
          >
            <icon-lucide-twitter
              class="w-12 h-12 p-3 mb-4 text-zinc-200 bg-zinc-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-semibold">Twitter</h4>
            <p class="text-sm text-zinc-100">
              Follow us on Twitter to stay up to date with our latest news and
              announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
