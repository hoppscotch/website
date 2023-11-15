<template>
  <!-- Hero section -->
  <section class="bg-gradient-to-b from-neutral-900 to-neutral-950">
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-b from-neutral-50 to-neutral-600"
          >
            Communities
          </span>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
          >
            Made by the community
          </h2>
          <p class="text-lg text-neutral-200/50">
            Join our community and get help, support, and feedback.
          </p>
        </div>
        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none"
        >
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-neutral-900"
          >
            <icon-lucide-book-open
              class="w-12 h-12 p-3 mb-4 text-neutral-200 bg-neutral-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Documentation</h4>
            <p class="text-sm text-neutral-100">
              Read through our docs to learn how to get started with our
              products.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-neutral-900"
          >
            <icon-lucide-github
              class="w-12 h-12 p-3 mb-4 text-neutral-200 bg-neutral-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">GitHub</h4>
            <p class="text-sm text-neutral-100">
              Explore our GitHub repositories and contribute to our open source
              projects.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-neutral-900"
          >
            <icon-lucide-twitter
              class="w-12 h-12 p-3 mb-4 text-neutral-200 bg-neutral-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Twitter</h4>
            <p class="text-sm text-neutral-100">
              Follow us on Twitter to stay up to date with our latest news and
              announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
