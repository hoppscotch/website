<template>
  <section class="relative">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Resources
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
          class="mx-auto grid max-w-sm gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
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
            <icon-lucide-heart
              class="mb-4 h-12 w-12 rounded-xl bg-zinc-600 p-3 text-zinc-200"
            />
            <h4 class="mb-2 text-xl font-semibold">Community</h4>
            <p class="text-sm text-zinc-100">
              Join our community to get help, support and feedback from our
              team.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col rounded-2xl bg-zinc-900 p-8 shadow-xl"
          >
            <icon-lucide-palette
              class="mb-4 h-12 w-12 rounded-xl bg-zinc-600 p-3 text-zinc-200"
            />
            <h4 class="mb-2 text-xl font-semibold">Brand</h4>
            <p class="text-sm text-zinc-100">
              Download our brand assets to use in your projects and
              presentations.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col rounded-2xl bg-zinc-900 p-8 shadow-xl"
          >
            <icon-lucide-shopping-bag
              class="mb-4 h-12 w-12 rounded-xl bg-zinc-600 p-3 text-zinc-200"
            />
            <h4 class="mb-2 text-xl font-semibold">Shop</h4>
            <p class="text-sm text-zinc-100">
              Get some cool swag to show your support for our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
