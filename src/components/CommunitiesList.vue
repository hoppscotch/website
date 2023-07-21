<template>
  <!-- Hero section -->
  <section class="bg-gradient-to-b from-slate-900 to-slate-950">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Communities
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-br from-white/90 via-white/80 to-white/60"
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
          class="items-start max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none"
        >
          <!-- item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            data-aos="zoom-y-out"
            data-aos-delay="100"
          >
            <icon-lucide-book-open
              class="w-12 h-12 p-3 mb-4 text-indigo-200 bg-indigo-900 rounded-xl"
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
            <icon-lucide-github
              class="w-12 h-12 p-3 mb-4 text-indigo-200 bg-indigo-900 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">GitHub</h4>
            <p class="text-sm text-slate-500">
              Explore our GitHub repositories and contribute to our open source
              projects.
            </p>
          </div>
          <!-- item -->
          <div
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <icon-lucide-twitter
              class="w-12 h-12 p-3 mb-4 text-indigo-200 bg-indigo-900 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">Twitter</h4>
            <p class="text-sm text-slate-500">
              Follow us on Twitter to stay up to date with our latest news and
              announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
