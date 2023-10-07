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
      <div class="py-12 md:py-16">
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
              The developer-first platform
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200/50 via-violet-200/80 to-violet-100/80"
          >
            Faster. Smarter.
          </h2>
          <p class="text-lg text-violet-200/50">
            Precision. Elegance. Performance.
          </p>
        </div>
        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-16">
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
                  <stop offset="0%" stop-color="#2e1065" />
                  <stop offset="100%" stop-color="#2e1065" stop-opacity="0" />
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
            <div class="grid md:col-span-12">
              <HighlighterItem>
                <div
                  class="relative bg-slate-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
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
                            <stop offset="0%" stop-color="#2e1065" />
                            <stop
                              offset="100%"
                              stop-color="#2e1065"
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
                      class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-violet-950 rounded-full blur-[80px] opacity-20"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-zap class="w-6 h-6 mb-4" />
                        <h5 class="inline-flex pb-2 text-xl">
                          Cross-platform apps
                        </h5>
                        <p class="w-full text-violet-200/50">
                          Works on web, Mac, Windows and CLI.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <CrossPlatform />
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="grid md:col-span-6">
              <HighlighterItem>
                <div
                  class="relative bg-slate-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Radial gradient -->
                    <div
                      class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-violet-950 rounded-full blur-[80px] opacity-20"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-cloudy class="w-6 h-6 mb-4" />
                        <h5 class="inline-flex pb-2 text-xl">Cloud sync</h5>
                        <p class="w-3/4 text-violet-200/50">
                          Sync your data across all your devices. Never lose
                          your data again.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <CloudSync />
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="grid md:col-span-6">
              <HighlighterItem>
                <div
                  class="relative bg-slate-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Radial gradient -->
                    <div
                      class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div
                        class="absolute inset-0 translate-z-0 bg-violet-950 rounded-full blur-[80px] opacity-20"
                      ></div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-cable class="w-6 h-6 mb-4" />
                        <h5 class="inline-flex pb-2 text-xl">Multi-protocol</h5>
                        <p class="w-3/4 text-violet-200/50">
                          HTTP, GraphQL, WebSocket, Socket.IO, MQTT, Server-Sent
                          Events and more.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <MultiProtocol />
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </Highlighter>
        </div>
        <!-- Features list -->
        <div class="grid gap-8 md:grid-cols-3 md:gap-12">
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-violet-400/20"
            >
              <icon-lucide-zap class="fill-slate-200" />
              <span class="text-violet-100">Lightweight and snappy</span>
            </div>
            <p class="text-sm text-violet-200/50">
              Designed to be seamless and instant.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-violet-400/20"
            >
              <icon-lucide-users-2 class="fill-slate-200" />
              <span class="text-violet-100">Built for teams</span>
            </div>
            <p class="text-sm text-violet-200/50">
              Have all your teams in one shared workspace.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-violet-400/20"
            >
              <icon-lucide-palette class="fill-slate-200" />
              <span class="text-violet-100">Highly customizable</span>
            </div>
            <p class="text-sm text-violet-200/50">
              Make Hoppscotch your own with custom themes.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-violet-400/20"
            >
              <icon-lucide-command class="fill-slate-200" />
              <span class="text-violet-100">Keyboard first design</span>
            </div>
            <p class="text-sm text-violet-200/50">
              Designed to be intuitive and easy to use.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-violet-400/20"
            >
              <icon-lucide-package class="fill-slate-200" />
              <span class="text-violet-100">Cross-platform apps</span>
            </div>
            <p class="text-sm text-violet-200/50">
              Works on Web, Mac, Windows, Linux and CLI.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-violet-400/20"
            >
              <icon-lucide-shield-check class="fill-slate-200" />
              <span class="text-violet-100">Safe and secure</span>
            </div>
            <p class="text-sm text-violet-200/50">
              Designed to keep your data safe and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
