<template>
  <section class="relative">
    <!-- Particles animation -->
    <div
      class="absolute top-0 -mt-24 -ml-32 -translate-x-1/2 left-1/2 -z-10 w-80 h-80"
    >
      <ClientOnly>
        <Particles
          class="absolute inset-0 -z-10"
          :quantity="6"
          :staticity="30"
        />
      </ClientOnly>
    </div>
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full bg-neutral-500/10 border-neutral-500/50"
          >
            <span
              class="inline-flex text-transparent bg-clip-text max-w-max bg-gradient-to-b from-neutral-50 to-neutral-600"
            >
              API Client
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
          >
            Unlock Your Potential
          </h2>
          <p class="text-lg text-neutral-200/50">
            Create APIs faster, test them instantly, document them automatically
            and share them easily.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div>
            <Highlighter class="group">
              <HighlighterItem>
                <div
                  class="relative bg-neutral-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-wand-2 class="w-6 h-6 mb-4" />
                        <h5 class="inline-flex pb-2 text-xl">
                          All-In-One Platform
                        </h5>
                        <p class="w-full text-neutral-200/50">
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
        <!-- <span
          class="table mx-auto items-center pointer-events-none mt-4 text-center animate-background-shine bg-[linear-gradient(110deg,transparent,45%,theme(colors.neutral.300),55%,transparent)] bg-[length:200%_100%] bg-clip-text text-xs text-transparent"
        >
          <span class="mr-2">Press</span>
          <span
            class="before:text-lg before:inline-block before:-mr-[13.5px] before:-mt-[1.5px] before:align-middle before:content-['▢']"
            >H</span
          >
          <span class="ml-2"> anytime to get started </span>
        </span> -->
      </div>
    </div>
  </section>
</template>
