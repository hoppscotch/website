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
                  class="relative bg-slate-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Radial gradient -->
                    <div
                      class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-5"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-mouse-pointer-square
                          class="w-6 h-6 mb-4"
                        />
                        <h5 class="inline-flex pb-2 text-xl">Inspections</h5>
                        <p class="w-full text-violet-200/50">
                          From prototyping to production - develop without
                          switching tabs.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="flex items-start justify-start overflow-y-auto border brightness-110 overscroll-auto h-80 rounded-2xl border-violet-500/25 bg-gradient-to-b from-violet-600/5 to-violet-500/5"
                      >
                        <img
                          loading="lazy"
                          src="/images/screenshot-1.png"
                          alt="Feature 04"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </Highlighter>
          </div>
        </div>
        <span
          class="table mx-auto items-center pointer-events-none mt-4 text-center animate-background-shine bg-[linear-gradient(110deg,transparent,45%,theme(colors.violet.200),55%,transparent)] bg-[length:200%_100%] bg-clip-text text-xs text-transparent"
        >
          <span class="mr-2">Press</span>
          <span
            class="relative before:text-lg contents before:align-middle before:-mr-[13.5px] before:content-['▢']"
            >H</span
          >
          <span class="ml-2"> anytime to get started </span>
        </span>
      </div>
    </div>
  </section>
</template>
