<template>
  <section>
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div
        class="relative mb-32 mt-12 overflow-hidden rounded-[32px] border border-zinc-500/20 px-8 pt-12 md:mt-16 md:pt-16"
      >
        <!-- Hero content -->
        <div class="relative overflow-y-clip pb-16">
          <!-- Backdrop image -->
          <div class="-z-1 absolute left-1/2 -translate-x-1/2 transform">
            <div class="-z-1 relative">
              <div
                class="-z-1 absolute left-1/2 h-[1026px] w-[1026px] -translate-x-1/2 transform rounded-full border-t border-zinc-500/20 bg-gradient-to-b from-zinc-900 from-0% via-transparent via-20% to-100%"
              ></div>
            </div>
            <div class="-z-1 relative">
              <div
                class="-z-1 absolute left-1/2 top-[160px] h-[684px] w-[684px] -translate-x-1/2 transform rounded-full border-t border-zinc-500/20 bg-gradient-to-b from-zinc-900 from-0% via-transparent via-20% to-100% shadow-2xl shadow-zinc-500/50"
              ></div>
            </div>
            <div class="-z-1 relative">
              <div
                class="-z-1 absolute left-1/2 top-[300px] h-[342px] w-[342px] -translate-x-1/2 transform rounded-full border-t border-zinc-500/20 bg-gradient-to-b from-zinc-900 from-0% via-transparent via-20% to-100% shadow-2xl shadow-zinc-500/50"
              ></div>
            </div>
          </div>
          <!-- Content -->
          <div
            class="relative mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <Announcement />
            <h1
              class="mb-8 block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
            >
              Make Better APIs
            </h1>
            <p class="mb-8 max-w-md text-zinc-400/80 md:max-w-2xl">
              Trusted by millions of developers to build, test and share APIs.
            </p>
            <div
              class="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
            >
              <div>
                <a
                  href="https://hoppscotch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative inline-block overflow-hidden rounded-full p-[1px]"
                >
                  <span
                    class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.zinc.900)_0%,_theme(colors.zinc.600)_50%,_theme(colors.zinc.900)_100%)]"
                  ></span>
                  <div
                    class="inline-flex h-full w-full animate-background-shine cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(110deg,_theme(colors.zinc.950),45%,_theme(colors.zinc.900),55%,_theme(colors.zinc.950))] bg-[length:200%_100%] px-4 py-2 text-sm text-zinc-50 backdrop-blur-md"
                  >
                    Get Started on Cloud
                    <span
                      class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
                    >
                      <icon-lucide-chevron-right />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <a
                  class="inline-flex w-full items-center justify-center rounded-full border border-zinc-500/20 bg-white bg-opacity-10 px-4 py-2 text-sm text-zinc-200 backdrop-blur-md transition hover:border-zinc-500/20 hover:bg-opacity-20 hover:text-zinc-50"
                  href="https://docs.hoppscotch.io/documentation/self-host/getting-started"
                  target="_blank"
                >
                  Self-Host from GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
