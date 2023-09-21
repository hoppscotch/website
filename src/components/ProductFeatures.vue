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
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="max-w-2xl pb-12 mx-auto text-center md:pb-20">
          <div
            v-motion-fade
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full hero-subtitle-gradient bg-violet-500/10 border-violet-500/50"
            :delay="100"
          >
            <span
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
            >
              Products
            </span>
          </div>
          <h2
            v-motion-fade
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
            :delay="200"
          >
            The power to be your best
          </h2>
          <p v-motion-fade class="text-lg text-slate-400" :delay="300">
            We build tools that help you build better products.
          </p>
        </div>
        <!-- Section content -->
        <div class="max-w-4xl mx-auto">
          <!-- Tabs buttons -->
          <div class="pb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div v-motion-fade :delay="100">
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
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-200': tab === 1 }"
                >
                  Cloud
                </div>
              </button>
            </div>
            <div v-motion-fade :delay="200">
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
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-200': tab === 2 }"
                >
                  Enterprise
                </div>
              </button>
            </div>
            <div v-motion-fade :delay="300">
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
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-200': tab === 3 }"
                >
                  Self-Host
                </div>
              </button>
            </div>
            <div v-motion-fade :delay="400">
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
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-200': tab === 4 }"
                >
                  CLI
                </div>
              </button>
            </div>
          </div>
          <!-- Tab items -->
          <div v-motion-fade class="relative flex flex-col">
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
                      class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="/images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm font-medium border border-transparent rounded-full shadow-xl transition text-slate-950 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
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
                      class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="/images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm font-medium border border-transparent rounded-full shadow-xl transition text-slate-950 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
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
                      class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="/images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm font-medium border border-transparent rounded-full shadow-xl transition text-slate-950 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
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
                      class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="/images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="inline-flex items-center justify-center px-3 py-1 text-sm font-medium border border-transparent rounded-full shadow-xl transition text-slate-950 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
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
