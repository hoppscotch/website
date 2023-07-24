<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-4xl pb-12 mx-auto text-center md:pb-20">
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-4 border rounded-full hero-subtitle-gradient border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-500"
            >
              Resources
            </div>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Made by the community
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join our community and get help, support, and feedback.
          </p>
        </div>
        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none"
        >
          <!-- item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            data-aos="zoom-y-out"
            data-aos-delay="100"
          >
            <icon-lucide-book-open
              class="w-12 h-12 p-3 mb-4 text-violet-200 bg-violet-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Documentation</h4>
            <p class="text-sm text-slate-500">
              Read through our docs to learn how to get started with our
              products.
            </p>
          </div>
          <!-- item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            data-aos="zoom-y-out"
            data-aos-delay="200"
          >
            <icon-lucide-heart
              class="w-12 h-12 p-3 mb-4 text-violet-200 bg-violet-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Community</h4>
            <p class="text-sm text-slate-500">
              Join our community to get help, support, and feedback from our
              team.
            </p>
          </div>
          <!-- item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <icon-lucide-palette
              class="w-12 h-12 p-3 mb-4 text-violet-200 bg-violet-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Brand</h4>
            <p class="text-sm text-slate-500">
              Download our brand assets to use in your projects and
              presentations.
            </p>
          </div>
          <!-- item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            data-aos="zoom-y-out"
            data-aos-delay="400"
          >
            <icon-lucide-shopping-bag
              class="w-12 h-12 p-3 mb-4 text-violet-200 bg-violet-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Shop</h4>
            <p class="text-sm text-slate-500">
              Get some cool swag to show your support for our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
