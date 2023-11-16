<script setup lang="ts">
  const tab = ref(1)
</script>

<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-video"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-neutral-500 rounded-full blur-[60px] opacity-10"
        ></div>
      </div>
    </div>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-50 to-neutral-600"
          >
            Products
          </span>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
          >
            The power to be your best
          </h2>
          <p class="text-lg text-neutral-200/50">
            We build tools that help you build better products.
          </p>
        </div>
        <!-- Section content -->
        <div class="max-w-4xl mx-auto">
          <!-- Tabs buttons -->
          <div class="pb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-violet-500/10"
                :class="{
                  'bg-violet-500/10 !opacity-100 ring-1 ring-violet-600':
                    tab === 1,
                }"
                @click="tab = 1"
              >
                <div
                  class="inline-flex p-4 mb-4 rounded-full shadow-md bg-violet-600"
                >
                  <icon-lucide-cloudy />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-violet-200': tab === 1 }"
                >
                  Cloud
                </div>
              </button>
            </div>
            <div>
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-red-500/10"
                :class="{
                  'bg-red-500/10 !opacity-100 ring-1 ring-red-600': tab === 2,
                }"
                @click="tab = 2"
              >
                <div
                  class="inline-flex p-4 mb-4 bg-red-600 rounded-full shadow-md"
                >
                  <icon-lucide-building-2 />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-neutral-200': tab === 2 }"
                >
                  Enterprise
                </div>
              </button>
            </div>
            <div>
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-blue-500/10"
                :class="{
                  'bg-blue-500/10 !opacity-100 ring-1 ring-blue-600': tab === 3,
                }"
                @click="tab = 3"
              >
                <div
                  class="inline-flex p-4 mb-4 bg-blue-600 rounded-full shadow-md"
                >
                  <icon-lucide-server />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-neutral-200': tab === 3 }"
                >
                  Self-Host
                </div>
              </button>
            </div>
            <div>
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-slate-500/10"
                :class="{
                  'bg-slate-500/10 !opacity-100 ring-1 ring-slate-600':
                    tab === 4,
                }"
                @click="tab = 4"
              >
                <div
                  class="inline-flex p-4 mb-4 rounded-full shadow-md bg-slate-600"
                >
                  <icon-lucide-terminal-square />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-slate-200': tab === 4 }"
                >
                  CLI
                </div>
              </button>
            </div>
          </div>
          <!-- Tab items -->
          <div class="relative flex flex-col">
            <Transition
              enter-active-class="order-first transition duration-500 "
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 "
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div v-if="tab === 1" class="w-full">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-primary rounded-[inherit] z-20 overflow-hidden"
                    >
                      <img
                        loading="lazy"
                        src="/images/hero-screenshot.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm border border-transparent rounded-full shadow-xl transition text-neutral-950 backdrop-blur-md bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="text-neutral-500 group-hover:translate-x-0.5 transition-transform ml-1"
                          >
                            <icon-lucide-arrow-right />
                          </span>
                        </RouterLink>
                      </div>
                    </div>
                  </HighlighterItem>
                </Highlighter>
              </div>
            </Transition>
            <Transition
              enter-active-class="order-first transition duration-500 "
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 "
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div v-if="tab === 2" class="w-full">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-primary rounded-[inherit] z-20 overflow-hidden"
                    >
                      <img
                        loading="lazy"
                        src="/images/hero-screenshot.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm border border-transparent rounded-full shadow-xl transition text-neutral-950 backdrop-blur-md bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="text-neutral-500 group-hover:translate-x-0.5 transition-transform ml-1"
                          >
                            <icon-lucide-arrow-right />
                          </span>
                        </RouterLink>
                      </div>
                    </div>
                  </HighlighterItem>
                </Highlighter>
              </div>
            </Transition>
            <Transition
              enter-active-class="order-first transition duration-500 "
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 "
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div v-if="tab === 3" class="w-full">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-primary rounded-[inherit] z-20 overflow-hidden"
                    >
                      <img
                        loading="lazy"
                        src="/images/hero-screenshot.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm border border-transparent rounded-full shadow-xl transition text-neutral-950 backdrop-blur-md bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="text-neutral-500 group-hover:translate-x-0.5 transition-transform ml-1"
                          >
                            <icon-lucide-arrow-right />
                          </span>
                        </RouterLink>
                      </div>
                    </div>
                  </HighlighterItem>
                </Highlighter>
              </div>
            </Transition>
            <Transition
              enter-active-class="order-first transition duration-500 "
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 "
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div v-if="tab === 4" class="w-full">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-primary rounded-[inherit] z-20 overflow-hidden"
                    >
                      <img
                        loading="lazy"
                        src="/images/hero-screenshot.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm border border-transparent rounded-full shadow-xl transition text-neutral-950 backdrop-blur-md bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="text-neutral-500 group-hover:translate-x-0.5 transition-transform ml-1"
                          >
                            <icon-lucide-arrow-right />
                          </span>
                        </RouterLink>
                      </div>
                    </div>
                  </HighlighterItem>
                </Highlighter>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
