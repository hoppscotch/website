<template>
  <!-- Hero section -->
  <section class="bg-gradient-to-b from-zinc-900 to-zinc-950">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Communities
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Made by the community
          </h2>
          <p class="text-zinc-400/80">
            Join our community and get help, support and feedback.
          </p>
        </div>
        <!-- Items -->
        <div
          class="mx-auto grid max-w-sm gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          <!-- Item -->
          <div
            class="relative flex flex-col rounded-2xl bg-zinc-900 p-8 shadow-xl"
          >
            <icon-lucide-book-open
              class="mb-4 h-12 w-12 rounded-xl bg-zinc-600 p-3 text-zinc-200"
            />
            <h4 class="mb-2 text-xl font-semibold">Documentation</h4>
            <p class="text-sm text-zinc-100">
              Read through our docs to learn how to get started with our
              products.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col rounded-2xl bg-zinc-900 p-8 shadow-xl"
          >
            <icon-lucide-github
              class="mb-4 h-12 w-12 rounded-xl bg-zinc-600 p-3 text-zinc-200"
            />
            <h4 class="mb-2 text-xl font-semibold">GitHub</h4>
            <p class="text-sm text-zinc-100">
              Explore our GitHub repositories and contribute to our open source
              projects.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col rounded-2xl bg-zinc-900 p-8 shadow-xl"
          >
            <icon-lucide-twitter
              class="mb-4 h-12 w-12 rounded-xl bg-zinc-600 p-3 text-zinc-200"
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
