<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="relative px-8 py-12 mt-12 overflow-hidden md:py-16 md:mt-16">
        <!-- Hero content -->
        <div class="pb-16 overflow-y-clip">
          <!-- Backdrop image -->
          <div class="absolute transform -translate-x-1/2 -z-1 left-1/2">
            <div v-motion-slide-bottom class="duration-1000 -z-1">
              <div
                class="h-[1026px] w-[1026px] bg-gradient-to-b from-violet-900/40 from-0% via-20% to-100% via-transparent to-transparent rounded-full border-t transform -translate-x-1/2 -z-1 left-1/2 -z-1 absolute border-violet-400/10"
              ></div>
            </div>
            <div v-motion-slide-bottom class="duration-1000 -z-1">
              <div
                class="h-[684px] w-[684px] shadow-2xl shadow-violet-500/60 bg-gradient-to-b from-violet-900/40 from-0% via-20% to-100% via-transparent to-transparent rounded-full border-t transform -translate-x-1/2 -z-1 left-1/2 -z-1 top-[160px] absolute border-violet-400/10"
              ></div>
            </div>
            <div v-motion-slide-bottom class="duration-1000 -z-1">
              <div
                class="h-[342px] w-[342px] shadow-2xl shadow-violet-500/60 bg-gradient-to-b from-violet-900/40 from-0% via-20% to-100% via-transparent to-transparent rounded-full border-t transform -translate-x-1/2 -z-1 left-1/2 -z-1 top-[300px] absolute border-violet-400/10"
              ></div>
            </div>
          </div>
          <!-- Content -->
          <div class="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Announcement />
            <h1
              v-motion-fade
              class="mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
            >
              Make Better APIs
            </h1>
            <p
              v-motion-fade
              class="w-2/3 mb-8 text-xl text-slate-300"
              :delay="200"
            >
              Trusted by millions of developers to build, test and share APIs.
            </p>
            <div
              v-motion-fade
              class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
              :delay="400"
            >
              <div>
                <a
                  href="https://hoppscotch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-block overflow-hidden group rounded-full p-[1px]"
                >
                  <span
                    class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.violet.800)_0%,_theme(colors.blue.800)_50%,_theme(colors.violet.800)_100%)]"
                  ></span>
                  <div
                    class="inline-flex items-center justify-center w-full h-full px-4 py-2 text-sm text-white rounded-full cursor-pointer animate-background-shine bg-[linear-gradient(110deg,_theme(colors.slate.950),45%,_theme(colors.violet.900),55%,_theme(colors.slate.950))] bg-[length:200%_100%] backdrop-blur-md"
                  >
                    Get Started on Cloud
                    <span
                      class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                    >
                      <icon-lucide-chevron-right />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <RouterLink
                  class="inline-flex items-center justify-center w-full px-4 py-2 text-sm transition bg-white border rounded-full border-violet-400/10 bg-opacity-10 text-slate-200 backdrop-blur-md hover:text-white hover:border-violet-400/20 hover:bg-opacity-20"
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
