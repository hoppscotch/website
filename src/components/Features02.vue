<template>
  <section class="relative">
    <!-- Particles animation -->
    <div
      class="absolute top-0 -mt-24 -ml-32 -translate-x-1/2 left-1/2 -z-10 w-80 h-80"
    >
      <Particles class="absolute inset-0 -z-10" :quantity="6" :staticity="30" />
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-16 md:pt-32">
        <!-- Section header -->
        <div class="max-w-4xl pb-12 mx-auto text-center md:pb-20">
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-4 border rounded-full hero-subtitle-gradient border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-500"
            >
              The developer-first platform
            </div>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
          >
            Faster. Smarter.
          </h2>
          <p class="text-lg text-slate-400">
            Hoppscotch is a collaborative open source API development platform
            that makes it easy to build high-quality APIs — without the bloat
            and clutter of other tools.
          </p>
        </div>
        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
          <!-- Blurred shape -->
          <div
            class="absolute bottom-0 -mb-20 opacity-50 pointer-events-none -translate-x-1/2 left-1/2 blur-2xl"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs2-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#6366F1" />
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#bs2-a)"
                fill-rule="evenodd"
                d="m346 898 461 369-284 58z"
                transform="translate(-346 -898)"
              />
            </svg>
          </div>
          <!-- Grid -->
          <Highlighter class="grid gap-6 md:grid-cols-12 group">
            <!-- Box #1 -->
            <div class="md:col-span-12" data-aos="fade-down">
              <HighlighterItem>
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <div
                    class="flex flex-col md:flex-row md:items-center md:justify-between"
                  >
                    <!-- Blurred shape -->
                    <div
                      class="absolute top-0 right-0 blur-2xl"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="342"
                        height="393"
                      >
                        <defs>
                          <linearGradient
                            id="bs-a"
                            x1="19.609%"
                            x2="50%"
                            y1="14.544%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#6366F1" />
                            <stop
                              offset="100%"
                              stop-color="#6366F1"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#bs-a)"
                          fill-rule="evenodd"
                          d="m104 .827 461 369-284 58z"
                          transform="translate(0 -112.827)"
                          opacity=".7"
                        />
                      </svg>
                    </div>
                    <!-- Radial gradient -->
                    <div
                      class="absolute bottom-0 flex items-center justify-center h-full pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-70"
                      ></div>
                      <div
                        class="absolute w-1/4 h-1/4 translate-z-0 bg-violet-400 rounded-full blur-[40px]"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div
                      class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0"
                    >
                      <div class="flex flex-col items-start mb-6">
                        <h3
                          class="inline-flex pb-1 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
                        >
                          Optimized for speed
                        </h3>
                        <p class="text-slate-400">
                          Fly through your tasks with rapid-fire keyboard
                          shortcuts for everything. Literally everything. Built
                          for speed with 50ms interactions and real-time sync.
                        </p>
                      </div>
                      <RouterLink
                        class="text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full px-3 py-1-sm text-slate-200 hover:text-white transition group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-full before:pointer-events-none"
                        to="/"
                      >
                        <span class="relative inline-flex items-center">
                          Learn more
                          <span
                            class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                          >
                            <icon-lucide-arrow-right />
                          </span>
                        </span>
                      </RouterLink>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 overflow-hidden md:h-auto">
                      <img
                        class="absolute bottom-0 mx-auto -translate-x-1/2 left-1/2 max-w-none md:relative md:left-0 md:translate-x-0"
                        src="/images/feature-image-01.png"
                        width="504"
                        height="400"
                        alt="Feature 01"
                      />
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="md:col-span-7" data-aos="fade-down">
              <HighlighterItem>
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div
                      class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div
                      class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0"
                    >
                      <div>
                        <h3
                          class="inline-flex pb-1 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
                        >
                          Extensibility
                        </h3>
                        <p class="text-slate-400">
                          Start building on top of the most powerful and
                          extensible API platform ever created.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div
                      class="relative w-full h-64 overflow-hidden md:h-auto md:pb-8"
                    >
                      <img
                        class="absolute bottom-0 mx-auto -translate-x-1/2 left-1/2 max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                        src="/images/feature-image-02.png"
                        width="536"
                        height="230"
                        alt="Feature 02"
                      />
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="md:col-span-5" data-aos="fade-down">
              <HighlighterItem>
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div
                      class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-slate-900 rounded-full blur-[80px]"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div
                      class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0"
                    >
                      <div>
                        <h3
                          class="inline-flex pb-1 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
                        >
                          Open source
                        </h3>
                        <p class="text-slate-400">
                          Built on top of open-source technologies, we takes
                          your privacy to the next level.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div
                      class="relative w-full h-64 overflow-hidden md:h-auto md:pb-8"
                    >
                      <img
                        class="absolute bottom-0 mx-auto -translate-x-1/2 left-1/2 max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                        src="/images/feature-image-03.png"
                        width="230"
                        height="230"
                        alt="Feature 03"
                      />
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </Highlighter>
        </div>
        <!-- Features list -->
        <div class="grid gap-8 md:grid-cols-3 md:gap-12">
          <!-- Feature -->
          <div>
            <div class="flex items-center mb-1 space-x-2">
              <icon-lucide-zap class="fill-slate-200" />
              <span class="font-medium text-slate-50"
                >Lightweight and snappy</span
              >
            </div>
            <p class="text-sm text-slate-400">
              Designed to be seamless and instant.
            </p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center mb-1 space-x-2">
              <icon-lucide-users-2 class="fill-slate-200" />
              <span class="font-medium text-slate-50">Built for teams</span>
            </div>
            <p class="text-sm text-slate-400">
              Have all your teams in one shared workspace.
            </p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center mb-1 space-x-2">
              <icon-lucide-palette class="fill-slate-200" />
              <span class="font-medium text-slate-50">Highly customizable</span>
            </div>
            <p class="text-sm text-slate-400">
              Make Hoppscotch your own with custom themes.
            </p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center mb-1 space-x-2">
              <icon-lucide-command class="fill-slate-200" />
              <span class="font-medium text-slate-50"
                >Keyboard first design</span
              >
            </div>
            <p class="text-sm text-slate-400">
              Designed to be intuitive and easy to use.
            </p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center mb-1 space-x-2">
              <icon-lucide-package class="fill-slate-200" />
              <span class="font-medium text-slate-50">Cross-platform apps</span>
            </div>
            <p class="text-sm text-slate-400">
              Works on web, Mac, Windows, and mobile.
            </p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center mb-1 space-x-2">
              <icon-lucide-shield-check class="fill-slate-200" />
              <span class="font-medium text-slate-50">Safe and secure</span>
            </div>
            <p class="text-sm text-slate-400">
              Designed to keep your data safe and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
