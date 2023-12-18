<template>
  <section class="relative">
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600"
          >
            Resources
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
          class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none"
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
            <icon-lucide-heart
              class="w-12 h-12 p-3 mb-4 text-zinc-200 bg-zinc-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-semibold">Community</h4>
            <p class="text-sm text-zinc-100">
              Join our community to get help, support, and feedback from our
              team.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl bg-zinc-900 rounded-2xl"
          >
            <icon-lucide-palette
              class="w-12 h-12 p-3 mb-4 text-zinc-200 bg-zinc-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-semibold">Brand</h4>
            <p class="text-sm text-zinc-100">
              Download our brand assets to use in your projects and
              presentations.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl bg-zinc-900 rounded-2xl"
          >
            <icon-lucide-shopping-bag
              class="w-12 h-12 p-3 mb-4 text-zinc-200 bg-zinc-600 rounded-xl"
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
