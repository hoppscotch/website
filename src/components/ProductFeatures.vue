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
            >
              The security first platform
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Spot issues faster
          </h2>
          <p class="text-lg text-slate-400">
            All the lorem ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
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
                  Community Edition
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
                  Cloud Edition
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
                  Enterprise Edition
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
                  Hoppscotch CLI
                </div>
              </button>
            </div>
          </div>
          <!-- Tab items -->
          <div class="relative flex flex-col" data-aos="fade-up">
            <Transition
              enter-active-class="order-first transition duration-500 ease-in-out"
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div class="w-full" v-if="tab === 1">
                <img
                  class="mx-auto shadow-2xl ring-1 ring-slate-800 rounded-3xl"
                  src="../images/features-home-01.png"
                  width="768"
                  height="474"
                  alt="Features home 01"
                />
              </div>
            </Transition>
            <Transition
              enter-active-class="order-first transition duration-500 ease-in-out"
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div class="w-full" v-if="tab === 2">
                <img
                  class="mx-auto shadow-2xl ring-1 ring-slate-800 rounded-3xl"
                  src="../images/features-home-01.png"
                  width="768"
                  height="474"
                  alt="Features home 02"
                />
              </div>
            </Transition>
            <Transition
              enter-active-class="order-first transition duration-500 ease-in-out"
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div class="w-full" v-if="tab === 3">
                <img
                  class="mx-auto shadow-2xl ring-1 ring-slate-800 rounded-3xl"
                  src="../images/features-home-01.png"
                  width="768"
                  height="474"
                  alt="Features home 03"
                />
              </div>
            </Transition>
            <Transition
              enter-active-class="order-first transition duration-500 ease-in-out"
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div class="w-full" v-if="tab === 4">
                <img
                  class="mx-auto shadow-2xl ring-1 ring-slate-800 rounded-3xl"
                  src="../images/features-home-01.png"
                  width="768"
                  height="474"
                  alt="Features home 04"
                />
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
