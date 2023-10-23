<template>
  <section>
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div
        class="relative px-8 pt-12 mt-12 overflow-hidden border rounded-[32px] mb-32 border-neutral-500/20 md:pt-16 md:mt-16"
      >
        <!-- Hero content -->
        <div class="relative pb-16 overflow-y-clip">
          <!-- Backdrop image -->
          <div class="absolute transform -translate-x-1/2 -z-1 left-1/2">
            <div class="relative -z-1">
              <div
                class="h-[1026px] w-[1026px] bg-gradient-to-b from-neutral-900 from-0% via-20% to-100% via-transparent rounded-full border-t transform -translate-x-1/2 -z-1 left-1/2 absolute border-neutral-500/20"
              ></div>
            </div>
            <div class="relative -z-1">
              <div
                class="h-[684px] w-[684px] shadow-2xl shadow-neutral-500/50 bg-gradient-to-b from-neutral-900 from-0% via-20% to-100% via-transparent rounded-full border-t transform -translate-x-1/2 -z-1 left-1/2 top-[160px] absolute border-neutral-500/20"
              ></div>
            </div>
            <div class="relative -z-1">
              <div
                class="h-[342px] w-[342px] shadow-2xl shadow-neutral-500/50 bg-gradient-to-b from-neutral-900 from-0% via-20% to-100% via-transparent rounded-full border-t transform -translate-x-1/2 -z-1 left-1/2 top-[300px] absolute border-neutral-500/20"
              ></div>
            </div>
          </div>
          <!-- Content -->
          <div
            class="relative flex flex-col items-center max-w-4xl mx-auto text-center"
          >
            <Announcement />
            <h1
              class="mb-8 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-200/80 to-neutral-100/80"
            >
              Make Better APIs
            </h1>
            <p class="max-w-md mb-8 text-xl md:max-w-2xl text-neutral-200/80">
              Trusted by millions of developers to build, test and share APIs.
            </p>
            <div
              class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
            >
              <div>
                <a
                  href="https://hoppscotch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-block overflow-hidden group rounded-full p-[1px]"
                >
                  <span
                    class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.neutral.800)_0%,_theme(colors.neutral.50)_50%,_theme(colors.neutral.800)_100%)]"
                  ></span>
                  <div
                    class="inline-flex items-center justify-center w-full h-full px-4 py-2 text-sm text-neutral-50 rounded-full cursor-pointer animate-background-shine bg-[linear-gradient(110deg,_theme(colors.neutral.950),45%,_theme(colors.neutral.900),55%,_theme(colors.neutral.950))] bg-[length:200%_100%] backdrop-blur-md"
                  >
                    Get Started on Cloud
                    <span
                      class="text-neutral-500 group-hover:translate-x-0.5 transition-transform ml-1"
                    >
                      <icon-lucide-chevron-right />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <RouterLink
                  class="inline-flex items-center justify-center w-full px-4 py-2 text-sm bg-white border rounded-full transition border-neutral-500/20 bg-opacity-10 text-neutral-200 backdrop-blur-md hover:text-neutral-50 hover:border-neutral-500/20 hover:bg-opacity-20"
                  to="/products/self-host"
                >
                  Self-Host from GitHub
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
