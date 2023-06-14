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
          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Products
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The power to be your best
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We build tools that help you build better products.
          </p>
        </div>
        <!-- Section content -->
        <div class="max-w-3xl mx-auto">
          <!-- Tabs buttons -->
          <div class="pb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-blue-500/10"
                :class="{
                  'bg-blue-500/10 !opacity-100 ring-1 ring-blue-600': tab === 1,
                }"
                @click="tab = 1"
              >
                <div
                  class="inline-flex p-4 mb-4 bg-blue-600 rounded-full shadow-md"
                >
                  <icon-lucide-rocket />
                </div>
                <div
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-100': tab === 1 }"
                >
                  Self-Host
                </div>
              </button>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-purple-500/10"
                :class="{
                  'bg-purple-500/10 !opacity-100 ring-1 ring-purple-600':
                    tab === 2,
                }"
                @click="tab = 2"
              >
                <div
                  class="inline-flex p-4 mb-4 bg-purple-600 rounded-full shadow-md"
                >
                  <icon-lucide-rocket />
                </div>
                <div
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-100': tab === 2 }"
                >
                  Cloud
                </div>
              </button>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <button
                class="w-full p-4 text-center opacity-50 transition-opacity grow rounded-xl hover:bg-red-500/10"
                :class="{
                  'bg-red-500/10 !opacity-100 ring-1 ring-red-600': tab === 3,
                }"
                @click="tab = 3"
              >
                <div
                  class="inline-flex p-4 mb-4 bg-red-600 rounded-full shadow-md"
                >
                  <icon-lucide-rocket />
                </div>
                <div
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-100': tab === 3 }"
                >
                  Enterprise
                </div>
              </button>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
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
                  <icon-lucide-rocket />
                </div>
                <div
                  class="text-sm font-medium leading-tight"
                  :class="{ 'text-slate-100': tab === 4 }"
                >
                  CLI
                </div>
              </button>
            </div>
          </div>
          <!-- Tab items -->
          <div class="relative flex flex-col" data-aos="fade-up">
            <Transition
              enter-active-class="order-first transition duration-500 "
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 "
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div class="w-full" v-if="tab === 1">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="../images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="shadow-xl transition btn text-slate-900 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
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
              <div class="w-full" v-if="tab === 2">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="../images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="shadow-xl transition btn text-slate-900 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
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
              <div class="w-full" v-if="tab === 3">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="../images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="shadow-xl transition btn text-slate-900 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
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
              <div class="w-full" v-if="tab === 4">
                <Highlighter class="group">
                  <HighlighterItem>
                    <div
                      class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                    >
                      <!-- Radial gradient -->
                      <div
                        class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div
                          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]"
                        ></div>
                      </div>
                      <img
                        src="../images/feature-image-04.png"
                        alt="Feature 04"
                      />
                      <div
                        class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                      >
                        <RouterLink
                          class="shadow-xl transition btn text-slate-900 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          to="/download"
                        >
                          Download
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
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

<script setup>
import { ref } from "vue"
const tab = ref(1)
</script>
