<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto overflow-y-clip sm:px-6">
      <!-- Particles animation -->
      <ClientOnly>
        <Particles class="absolute inset-0 -z-10" />
      </ClientOnly>
      <!-- Hero content -->
      <div class="relative pt-32 pb-16 overflow-y-clip md:pt-40">
        <div
          class="relative flex flex-col items-center max-w-4xl mx-auto text-center"
        >
          <Announcement />
          <h1
            class="block mb-8 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            Make Better APIs
          </h1>
          <p class="max-w-md mb-8 md:max-w-2xl text-zinc-400/80">
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
                class="relative inline-flex overflow-hidden group rounded-full p-[1px]"
              >
                <span
                  class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.zinc.900)_0%,_theme(colors.zinc.600)_50%,_theme(colors.zinc.900)_100%)]"
                ></span>
                <div
                  class="inline-flex items-center justify-center w-full h-full px-4 py-2 text-sm text-zinc-50 rounded-full cursor-pointer animate-background-shine bg-[linear-gradient(110deg,_theme(colors.zinc.950),45%,_theme(colors.zinc.900),55%,_theme(colors.zinc.950))] bg-[length:200%_100%] backdrop-blur-md"
                >
                  Get Started on Cloud
                  <span
                    class="text-zinc-500 group-hover:translate-x-0.5 transition-transform ml-1"
                  >
                    <icon-lucide-chevron-right />
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm bg-white border rounded-full transition text-zinc-200 border-zinc-500/20 bg-opacity-10 backdrop-blur-md hover:text-zinc-50 hover:border-zinc-500/20 hover:bg-opacity-20"
                href="https://docs.hoppscotch.io/documentation/self-host/getting-started"
                target="_blank"
              >
                Self-Host from GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero image -->
      <div
        class="relative flex flex-col items-center max-w-4xl mx-auto text-center"
      >
        <span
          class="absolute -top-4 h-1/4 rounded-3xl bg-zinc-600/20 -inset-x-1/4 blur-3xl"
        ></span>
        <div class="relative xl:-mx-36">
          <!-- Backdrop image -->
          <div
            class="relative inline-flex p-px overflow-hidden rounded-lg md:rounded-xl"
          >
            <span
              class="absolute inset-[-1000%] animate-[spin_16s_linear_infinite] bg-[conic-gradient(from_225deg_at_50%_50%,_theme(colors.transparent)_0%,_theme(colors.transparent)_92%,_theme(colors.zinc.600)_97%,_theme(colors.transparent)_100%)]"
            ></span>
            <span
              class="absolute inset-[-1000%] animate-[spin_16s_linear_infinite_8s] bg-[conic-gradient(from_225deg_at_50%_50%,_theme(colors.transparent)_0%,_theme(colors.transparent)_92%,_theme(colors.zinc.600)_97%,_theme(colors.transparent)_100%)]"
            ></span>
            <div
              class="relative inline-flex items-center justify-center w-full h-full rounded-lg bg-zinc-950 ring ring-zinc-500/25 md:rounded-xl"
            >
              <img
                src="/images/hero-screenshot.png"
                alt="Screenshot"
                class="rounded-[inherit] opacity-45 grayscale"
              />
            </div>
          </div>
          <!-- CTA trigger -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-zinc-950 to-95%"
          >
            <a
              href="https://hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
              class="overflow-hidden border rounded-full shadow-xl transition border-zinc-500/10 bg-zinc-500/10 backdrop-blur-md group hover:scale-110"
            >
              <div
                class="flex items-center justify-center p-6 m-4 border rounded-full shadow-xl transition text-zinc-50 border-zinc-500/90 backdrop-blur-md bg-gradient-to-b from-zinc-500/50 to-zinc-900/10 group-hover:scale-105"
              >
                <icon-lucide-arrow-up-right />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
