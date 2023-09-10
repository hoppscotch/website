<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div
        class="relative px-8 py-12 md:py-16 rounded-[3rem] border border-slate-900 my-12 md:my-16 overflow-hidden"
      >
        <!-- Radial gradient -->
        <div
          class="absolute top-0 flex items-center justify-center w-1/3 pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 -z-10 aspect-square"
          aria-hidden="true"
        >
          <div
            class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-70"
          ></div>
          <div
            class="absolute w-1/4 h-1/4 translate-z-0 bg-violet-400 rounded-full blur-[40px]"
          ></div>
        </div>
        <!-- Blurred shape -->
        <div
          class="absolute bottom-0 left-0 opacity-50 pointer-events-none translate-y-1/2 blur-2xl -z-10"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient
                id="bs5-a"
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
              fill="url(#bs5-a)"
              fill-rule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>
        <!-- Content -->
        <div class="flex flex-col items-center max-w-4xl mx-auto text-center">
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full hero-subtitle-gradient bg-violet-500/10 border-violet-500/50"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
            >
              The security first platform
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
          >
            Take control of your business
          </h2>
          <p class="mb-8 text-lg text-slate-400">
            All the lorem ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
          </p>
          <div>
            <RouterLink
              class="inline-flex items-center justify-center px-3 py-1 text-sm font-medium border border-transparent rounded-full transition text-slate-950 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
              to="/products"
            >
              Get Started
              <span
                class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
              >
                <icon-lucide-arrow-right />
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
