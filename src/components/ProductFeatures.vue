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
      <div class="pt-16 pb-12 md:pt-32 md:pb-20">
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
          <div class="pb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <button
              class="p-4 text-center transition-opacity rounded-xl"
              :class="tab === 1 || 'opacity-50 hover:opacity-75'"
              @click="tab = 1"
            >
              <div
                class="inline-flex p-4 mb-4 rounded-full shadow-md bg-slate-800"
              >
                <icon-lucide-rocket />
              </div>
              <div
                class="font-medium leading-tight md:text-md"
                :class="tab === 1 || 'text-slate-100'"
              >
                Internal Feedback
              </div>
            </button>
            <button
              class="p-4 text-center transition-opacity rounded-xl"
              :class="tab === 2 || 'opacity-50 hover:opacity-75'"
              @click="tab = 2"
            >
              <div
                class="inline-flex p-4 mb-4 rounded-full shadow-md bg-slate-800"
              >
                <icon-lucide-rocket />
              </div>
              <div
                class="font-medium leading-tight md:text-md"
                :class="tab === 2 || 'text-slate-100'"
              >
                Internal Feedback
              </div>
            </button>
            <button
              class="p-4 text-center transition-opacity rounded-xl"
              :class="tab === 3 || 'opacity-50 hover:opacity-75'"
              @click="tab = 3"
            >
              <div
                class="inline-flex p-4 mb-4 rounded-full shadow-md bg-slate-800"
              >
                <icon-lucide-rocket />
              </div>
              <div
                class="font-medium leading-tight md:text-md"
                :class="tab === 3 || 'text-slate-100'"
              >
                Internal Feedback
              </div>
            </button>
            <button
              class="p-4 text-center transition-opacity rounded-xl"
              :class="tab === 4 || 'opacity-50 hover:opacity-75'"
              @click="tab = 4"
            >
              <div
                class="inline-flex p-4 mb-4 rounded-full shadow-md bg-slate-800"
              >
                <icon-lucide-rocket />
              </div>
              <div
                class="font-medium leading-tight md:text-md"
                :class="tab === 4 || 'text-slate-100'"
              >
                Internal Feedback
              </div>
            </button>
          </div>

          <!-- Tab items -->
          <div class="relative flex flex-col" data-aos="fade-up">
            <transition
              enter-active-class="order-first transition duration-700 ease-in-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-300 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 1">
                <img
                  class="mx-auto shadow-2xl rounded-md"
                  src="../images/features-home-01.jpg"
                  width="768"
                  height="474"
                  alt="Features home 01"
                />
              </div>
            </transition>
            <transition
              enter-active-class="order-first transition duration-700 ease-in-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-300 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 2">
                <img
                  class="mx-auto shadow-2xl rounded-md"
                  src="../images/features-home-01.jpg"
                  width="768"
                  height="474"
                  alt="Features home 02"
                />
              </div>
            </transition>
            <transition
              enter-active-class="order-first transition duration-700 ease-in-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-300 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 3">
                <img
                  class="mx-auto shadow-2xl rounded-md"
                  src="../images/features-home-01.jpg"
                  width="768"
                  height="474"
                  alt="Features home 03"
                />
              </div>
            </transition>
            <transition
              enter-active-class="order-first transition duration-700 ease-in-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-300 ease-in-out"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 4">
                <img
                  class="mx-auto shadow-2xl rounded-md"
                  src="../images/features-home-01.jpg"
                  width="768"
                  height="474"
                  alt="Features home 04"
                />
              </div>
            </transition>
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
