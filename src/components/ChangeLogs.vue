<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blurred shape -->
      <div
        class="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none blur-2xl opacity-70 -z-10"
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
              <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
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
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="pb-12 md:pb-20">
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white/90 via-white/80 to-white/60"
          >
            Changelog
          </h2>
          <p class="text-lg text-slate-400">
            New updates and improvements to Hoppscotch.
          </p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-slate-800">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
              >Follow us on Twitter</a
            >
          </p>
        </div>
        <!-- Logs -->
        <ChangeLog12062023 />
        <ChangeLog05062023 />
        <ChangeLog02062023 />
        <ChangeLog110520232 />
        <ChangeLog110520231 />
        <ChangeLog23042023 />
        <ChangeLog11042023 />
      </div>
    </div>
  </section>
</template>
