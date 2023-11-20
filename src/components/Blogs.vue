<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-200/50 via-gray-100/80 to-gray-50/80"
          >
            Blog
          </h2>
          <p class="text-gray-400/80">Updates from the Hoppscotch team.</p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="rounded transition text-gray-400/60 hover:text-gray-400/80"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-gray-400/20">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded transition text-gray-400/60 hover:text-gray-400/80"
              >Follow us on Twitter</a
            >
          </p>
        </div>
        <!-- Blogs -->
        <BlogList />
      </div>
    </div>
  </section>
</template>
