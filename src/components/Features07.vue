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
            Open Source
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Built for Developers
          </h2>
          <p class="text-zinc-400/80">
            Hoppscotch is built by developers for developers to make their lives
            easier.
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
                        <icon-lucide-heart class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">Made with Love</h5>
                        <p class="w-full text-zinc-400/80">
                          Most popular API development tool on GitHub.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <StarUs />
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
