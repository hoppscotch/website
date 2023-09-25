<template>
  <!-- Hero section -->
  <section class="bg-gradient-to-b from-slate-900 to-slate-950">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="max-w-2xl pb-12 mx-auto text-center md:pb-20">
          <div
            v-motion-fade
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full bg-violet-500/10 border-violet-500/50"
            :delay="100"
          >
            <span
              class="inline-flex text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
            >
              Communities
            </span>
          </div>
          <h2
            v-motion-fade
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
            :delay="200"
          >
            Made by the community
          </h2>
          <p v-motion-fade class="text-lg text-slate-400" :delay="300">
            Join our community and get help, support, and feedback.
          </p>
        </div>
        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none"
        >
          <!-- item -->
          <div
            v-motion-fade
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            :delay="100"
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
            v-motion-fade
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            :delay="200"
          >
            <icon-lucide-github
              class="w-12 h-12 p-3 mb-4 text-violet-200 bg-violet-600 rounded-xl"
            />
            <h4 class="mb-2 text-xl font-bold">GitHub</h4>
            <p class="text-sm text-slate-500">
              Explore our GitHub repositories and contribute to our open source
              projects.
            </p>
          </div>
          <!-- item -->
          <div
            v-motion-fade
            class="relative flex flex-col p-8 shadow-xl rounded-2xl bg-slate-900"
            :delay="300"
          >
            <icon-lucide-twitter
              class="w-12 h-12 p-3 mb-4 text-violet-200 bg-violet-600 rounded-xl"
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
