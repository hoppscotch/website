<script setup lang="ts">
const tab = ref(1)
</script>

<template>
  <section class="relative">
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Products
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            The power to be your best
          </h2>
          <p class="text-zinc-400/80">
            We build tools that help you build better products.
          </p>
        </div>
        <!-- Section content -->
        <div class="mx-auto max-w-4xl">
          <!-- Tabs buttons -->
          <div class="grid grid-cols-2 gap-6 pb-8 sm:grid-cols-4">
            <div>
              <button
                class="w-full grow rounded-xl p-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
                :class="{
                  'bg-zinc-500/10 !opacity-100 ring-1 ring-zinc-600': tab === 1,
                }"
                @click="tab = 1"
              >
                <div
                  class="mb-4 inline-flex rounded-full bg-zinc-600 p-4 shadow-md"
                >
                  <icon-lucide-cloudy />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-zinc-200': tab === 1 }"
                >
                  Cloud
                </div>
              </button>
            </div>
            <div>
              <button
                class="w-full grow rounded-xl p-4 text-center opacity-50 transition-opacity hover:bg-red-500/10"
                :class="{
                  'bg-red-500/10 !opacity-100 ring-1 ring-red-600': tab === 2,
                }"
                @click="tab = 2"
              >
                <div
                  class="mb-4 inline-flex rounded-full bg-red-600 p-4 shadow-md"
                >
                  <icon-lucide-building-2 />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-zinc-200': tab === 2 }"
                >
                  Enterprise
                </div>
              </button>
            </div>
            <div>
              <button
                class="w-full grow rounded-xl p-4 text-center opacity-50 transition-opacity hover:bg-blue-500/10"
                :class="{
                  'bg-blue-500/10 !opacity-100 ring-1 ring-blue-600': tab === 3,
                }"
                @click="tab = 3"
              >
                <div
                  class="mb-4 inline-flex rounded-full bg-blue-600 p-4 shadow-md"
                >
                  <icon-lucide-server />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-zinc-200': tab === 3 }"
                >
                  Self-Host
                </div>
              </button>
            </div>
            <div>
              <button
                class="w-full grow rounded-xl p-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
                :class="{
                  'bg-zinc-500/10 !opacity-100 ring-1 ring-zinc-600': tab === 4,
                }"
                @click="tab = 4"
              >
                <div
                  class="mb-4 inline-flex rounded-full bg-zinc-600 p-4 shadow-md"
                >
                  <icon-lucide-terminal-square />
                </div>
                <div
                  class="text-sm leading-tight"
                  :class="{ 'text-zinc-200': tab === 4 }"
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
                      class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950"
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
                          class="group inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-white/80 via-white to-white/80 px-3 py-1 text-sm text-zinc-950 shadow-xl backdrop-blur-md transition hover:bg-white"
                          to="/download"
                        >
                          Download
                          <span
                            class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
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
                      class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950"
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
                          class="group inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-white/80 via-white to-white/80 px-3 py-1 text-sm text-zinc-950 shadow-xl backdrop-blur-md transition hover:bg-white"
                          to="/download"
                        >
                          Download
                          <span
                            class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
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
                      class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950"
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
                          class="group inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-white/80 via-white to-white/80 px-3 py-1 text-sm text-zinc-950 shadow-xl backdrop-blur-md transition hover:bg-white"
                          to="/download"
                        >
                          Download
                          <span
                            class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
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
                      class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950"
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
                          class="group inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-white/80 via-white to-white/80 px-3 py-1 text-sm text-zinc-950 shadow-xl backdrop-blur-md transition hover:bg-white"
                          to="/download"
                        >
                          Download
                          <span
                            class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
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
