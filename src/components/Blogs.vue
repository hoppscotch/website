<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <!-- Blurred shape -->
      <div
        class="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none -z-10 blur-2xl opacity-70"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs4-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#A855F7" />
              <stop offset="100%" stop-color="#2e1065" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fill-rule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          />
        </svg>
      </div>
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-violet-200/50 via-violet-200/80 to-violet-100/80"
          >
            Blog
          </h2>
          <p class="text-lg text-violet-200/50">
            Updates from the Hoppscotch team.
          </p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="rounded transition text-violet-400/60 hover:text-violet-400/80"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-violet-400/20">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded transition text-violet-400/60 hover:text-violet-400/80"
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
