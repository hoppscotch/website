<template>
  <section class="relative">
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full bg-violet-500/10 border-violet-500/50"
          >
            <span
              class="inline-flex text-transparent bg-clip-text max-w-max bg-gradient-to-b from-violet-50 to-violet-600"
            >
              Download
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200 via-violet-100 to-violet-50"
          >
            Unlock Your Potential
          </h2>
          <p class="text-lg text-violet-200/50">
            Take Hoppscotch with you wherever you go. Download the app to get
            started.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div>
            <Highlighter class="group">
              <HighlighterItem>
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px]"
                    ></div>
                  </div>
                  <img
                    loading="lazy"
                    src="/images/feature-image-04.png"
                    alt="Feature 04"
                  />
                  <div
                    class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                  >
                    <RouterLink
                      class="inline-flex items-center justify-center px-3 py-1 text-sm border border-transparent rounded-full shadow-xl transition text-violet-950 backdrop-blur-md bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                      to="/download"
                    >
                      Download
                      <span
                        class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                      >
                        <icon-lucide-arrow-right />
                      </span>
                    </RouterLink>
                  </div>
                </div>
              </HighlighterItem>
            </Highlighter>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
