<template>
  <section>
    <div class="relative mx-auto max-w-5xl overflow-y-clip px-4 sm:px-6">
      <!-- Particles animation -->
      <ClientOnly>
        <Particles class="absolute inset-0 -z-10" />
      </ClientOnly>
      <!-- Hero content -->
      <div class="relative overflow-y-clip pb-16 pt-32 md:pt-40">
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
                class="group relative inline-flex overflow-hidden rounded-full p-[1px]"
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
      <!-- Hero image -->
      <div
        class="relative mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <span
          class="absolute -inset-x-1/4 -top-4 h-1/4 rounded-3xl bg-zinc-600/20 blur-3xl"
        ></span>
        <div class="relative xl:-mx-36">
          <!-- Backdrop image -->
          <div
            class="relative inline-flex overflow-hidden rounded-lg p-px md:rounded-xl"
          >
            <span
              class="absolute inset-[-1000%] animate-[spin_16s_linear_infinite] bg-[conic-gradient(from_225deg_at_50%_50%,_theme(colors.transparent)_0%,_theme(colors.transparent)_92%,_theme(colors.zinc.600)_97%,_theme(colors.transparent)_100%)]"
            ></span>
            <span
              class="absolute inset-[-1000%] animate-[spin_16s_linear_infinite_8s] bg-[conic-gradient(from_225deg_at_50%_50%,_theme(colors.transparent)_0%,_theme(colors.transparent)_92%,_theme(colors.zinc.600)_97%,_theme(colors.transparent)_100%)]"
            ></span>
            <div
              class="relative inline-flex h-full w-full items-center justify-center rounded-lg bg-zinc-950 ring ring-zinc-500/25 md:rounded-xl"
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
              class="group overflow-hidden rounded-full border border-zinc-500/10 bg-zinc-500/10 shadow-xl backdrop-blur-md transition hover:scale-110"
            >
              <div
                class="m-4 flex items-center justify-center rounded-full border border-zinc-500/90 bg-gradient-to-b from-zinc-500/50 to-zinc-900/10 p-6 text-zinc-50 shadow-xl backdrop-blur-md transition group-hover:scale-105"
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
