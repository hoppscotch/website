<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
        <!-- Radial gradient -->
        <div
          class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square"
          aria-hidden="true"
        >
          <div
            class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"
          ></div>
          <div
            class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"
          ></div>
        </div>
        <!-- Blurred shape -->
        <div
          class="absolute bottom-0 left-0 translate-y-1/2 opacity-50 pointer-events-none blur-2xl -z-10"
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
        <div class="max-w-3xl mx-auto text-center">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
            >
              The security first platform
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Take control of your business
          </h2>
          <p class="mb-8 text-lg text-slate-400">
            All the lorem ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
          </p>
          <div>
            <a
              class="transition duration-150 ease-in-out btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
              href="https://hoppscotch.io"
            >
              Get Started
              <span
                class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                >-&gt;</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cta",
}
</script>
