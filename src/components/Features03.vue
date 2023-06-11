<template>
  <section class="relative">
    <!-- Blurred shape -->
    <div
      class="absolute top-0 opacity-50 pointer-events-none -translate-x-1/2 -translate-y-1/4 left-1/2 blur-2xl -z-10"
      aria-hidden="true"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient
            id="bs3-a"
            x1="19.609%"
            x2="50%"
            y1="14.544%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#6366F1" />
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#bs3-a)"
          fill-rule="evenodd"
          d="m410 0 461 369-284 58z"
          transform="matrix(1 0 0 -1 -410 427)"
        />
      </svg>
    </div>

    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-16 pb-12 border-b md:pt-32 md:pb-20 border-slate-800">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            More than a login box
          </h2>
          <p class="text-lg text-slate-400">
            There are many variations available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div data-aos="fade-down">
            <Highlighter class="group">
              <HighlighterItem>
                <div
                  class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]"
                    ></div>
                  </div>
                  <img
                    src="../images/feature-image-04.png"
                    width="768"
                    height="400"
                    alt="Feature 04"
                  />
                </div>
              </HighlighterItem>
            </Highlighter>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
