<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-video"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-neutral-500 rounded-full blur-[60px] opacity-10"
        ></div>
      </div>
    </div>
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full bg-neutral-500/10 border-neutral-500/50"
          >
            <span
              class="inline-flex text-transparent bg-clip-text max-w-max bg-gradient-to-b from-neutral-50 to-neutral-600"
            >
              Resources
            </span>
          </div>
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
          class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none"
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
            <icon-lucide-heart
              class="w-12 h-12 p-3 mb-4 text-neutral-200 bg-neutral-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Community</h4>
            <p class="text-sm text-neutral-100">
              Join our community to get help, support, and feedback from our
              team.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-neutral-900"
          >
            <icon-lucide-palette
              class="w-12 h-12 p-3 mb-4 text-neutral-200 bg-neutral-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Brand</h4>
            <p class="text-sm text-neutral-100">
              Download our brand assets to use in your projects and
              presentations.
            </p>
          </div>
          <!-- Item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-neutral-900"
          >
            <icon-lucide-shopping-bag
              class="w-12 h-12 p-3 mb-4 text-neutral-200 bg-neutral-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Shop</h4>
            <p class="text-sm text-neutral-100">
              Get some cool swag to show your support for our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
