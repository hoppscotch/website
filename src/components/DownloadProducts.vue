<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-10"
        ></div>
      </div>
    </div>
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
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200/50 via-violet-200/80 to-violet-100/80"
          >
            Take Hoppscotch with you
          </h2>
          <p class="text-lg text-violet-200/50">
            Download Hoppscotch for your platform — Web, macOS, Windows, Linux,
            or CLI.
          </p>
        </div>
        <!-- Platform download -->
        <Highlighter class="grid grid-cols-12 gap-8 group">
          <HighlighterItem class="col-span-12 md:col-span-4 group/slide">
            <div
              class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
            >
              <!-- Particles animation -->
              <ClientOnly>
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                />
              </ClientOnly>
              <!-- Radial gradient -->
              <div
                class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div
                  class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                ></div>
              </div>
              <div class="flex flex-col h-full p-6">
                <img
                  loading="lazy"
                  class="p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                  src="/images/download-apple.svg"
                  width="40"
                  height="40"
                  alt="Icon 01"
                />
                <div class="flex flex-col grow">
                  <div class="mb-1 text-lg font-bold">Download for Mac</div>
                  <div class="mb-3 text-violet-200/50">
                    Work without distraction on your own or with your team.
                  </div>
                </div>
                <div>
                  <RouterLink
                    class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-violet-200 hover:text-violet-50 group"
                    to="/"
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
            </div>
          </HighlighterItem>
          <HighlighterItem class="col-span-12 md:col-span-4 group/slide">
            <div
              class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
            >
              <!-- Particles animation -->
              <ClientOnly>
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                />
              </ClientOnly>
              <!-- Radial gradient -->
              <div
                class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div
                  class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                ></div>
              </div>
              <div class="flex flex-col h-full p-6">
                <img
                  loading="lazy"
                  class="p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                  src="/images/download-windows.svg"
                  width="40"
                  height="40"
                  alt="Icon 01"
                />
                <div class="flex flex-col grow">
                  <div class="mb-1 text-lg font-bold">Download for Windows</div>
                  <div class="mb-3 text-violet-200/50">
                    Work without distraction on your own or with your team.
                  </div>
                </div>
                <div>
                  <RouterLink
                    class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-violet-200 hover:text-violet-50 group"
                    to="/"
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
            </div>
          </HighlighterItem>
          <HighlighterItem class="col-span-12 md:col-span-4 group/slide">
            <div
              class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
            >
              <!-- Particles animation -->
              <ClientOnly>
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                />
              </ClientOnly>
              <!-- Radial gradient -->
              <div
                class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div
                  class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                ></div>
              </div>
              <div class="flex flex-col h-full p-6">
                <img
                  loading="lazy"
                  class="p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                  src="/images/download-linux.svg"
                  width="40"
                  height="40"
                  alt="Icon 01"
                />
                <div class="flex flex-col grow">
                  <div class="mb-1 text-lg font-bold">Download for Linux</div>
                  <div class="mb-3 text-violet-200/50">
                    Work without distraction on your own or with your team.
                  </div>
                </div>
                <div>
                  <RouterLink
                    class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-violet-200 hover:text-violet-50 group"
                    to="/"
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
            </div>
          </HighlighterItem>
          <HighlighterItem class="col-span-12 md:col-span-6 group/slide">
            <div
              class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
            >
              <!-- Particles animation -->
              <ClientOnly>
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                />
              </ClientOnly>
              <!-- Radial gradient -->
              <div
                class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div
                  class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                ></div>
              </div>
              <div class="flex flex-col h-full p-6">
                <icon-lucide-globe
                  class="w-10 h-10 p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                />
                <div class="flex flex-col grow">
                  <div class="mb-1 text-lg font-bold">Web App</div>
                  <div class="mb-3 text-violet-200/50">
                    Work without distraction on your own or with your team.
                  </div>
                </div>
                <div>
                  <a
                    class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-violet-200 hover:text-violet-50 group"
                    href="https://hoppscotch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open App
                    <span
                      class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                    >
                      <icon-lucide-arrow-right />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </HighlighterItem>
          <HighlighterItem class="col-span-12 md:col-span-6 group/slide">
            <div
              class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
            >
              <!-- Particles animation -->
              <ClientOnly>
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                />
              </ClientOnly>
              <!-- Radial gradient -->
              <div
                class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div
                  class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                ></div>
              </div>
              <div class="flex flex-col h-full p-6">
                <icon-lucide-terminal
                  class="w-10 h-10 p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                />
                <div class="flex flex-col grow">
                  <div class="mb-1 text-lg font-bold">Install for Terminal</div>
                  <div class="mb-3 text-violet-200/50">
                    Work without distraction on your own or with your team.
                  </div>
                </div>
                <div>
                  <RouterLink
                    class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-violet-200 hover:text-violet-50 group"
                    to="/"
                  >
                    Install
                    <span
                      class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                    >
                      <icon-lucide-arrow-right />
                    </span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </Highlighter>
      </div>
    </div>
  </section>
</template>
