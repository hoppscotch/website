<template>
  <section class="relative">
    <!-- Particles animation -->
    <div
      class="absolute left-1/2 top-0 -z-10 -ml-32 -mt-24 h-80 w-80 -translate-x-1/2"
    >
      <ClientOnly>
        <Particles
          class="absolute inset-0 -z-10"
          :quantity="6"
          :staticity="30"
        />
      </ClientOnly>
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            API Client
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Unlock Your Potential
          </h2>
          <p class="text-zinc-400/80">
            Create APIs faster, test them instantly, document and share them
            automatically.
          </p>
        </div>
        <div class="mx-auto max-w-4xl">
          <div>
            <Highlighter class="group">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-wand-2 class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">
                          All-In-One Platform
                        </h5>
                        <p class="w-full text-zinc-400/80">
                          From prototyping to production - develop without
                          switching tabs.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <Mockup />
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
