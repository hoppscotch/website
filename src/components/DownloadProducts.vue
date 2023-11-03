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
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full bg-neutral-500/10 border-neutral-500/50"
          >
            <span
              class="inline-flex text-transparent bg-clip-text max-w-max bg-gradient-to-b from-neutral-50 to-neutral-600"
            >
              Download
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
          >
            The power to be your best
          </h2>
          <p class="text-lg text-neutral-200/50">
            Download for — Mac, Windows, Linux, Web and CLI.
          </p>
        </div>
        <!-- Section content -->
        <div class="max-w-4xl mx-auto">
          <!-- Tabs buttons -->
          <div
            class="flex w-full min-w-0 mb-10 overflow-x-auto gap-4 no-scrollbar"
          >
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-neutral-500/10"
              :class="{
                'bg-neutral-500/10 !opacity-100 !border-neutral-400/10':
                  tab === 1,
              }"
              @click="tab = 1"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border rounded-xl border-neutral-600 bg-neutral-900"
              >
                <img
                  loading="lazy"
                  class="w-6 h-6"
                  src="/images/download-apple.svg"
                  alt="Mac"
                />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-neutral-200': tab === 1 }"
              >
                Mac
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-neutral-500/10"
              :class="{
                'bg-neutral-500/10 !opacity-100 !border-neutral-400/10':
                  tab === 2,
              }"
              @click="tab = 2"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border rounded-xl border-neutral-600 bg-neutral-900"
              >
                <img
                  loading="lazy"
                  class="w-6 h-6"
                  src="/images/download-windows.svg"
                  alt="Windows"
                />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-neutral-200': tab === 2 }"
              >
                Windows
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-neutral-500/10"
              :class="{
                'bg-neutral-500/10 !opacity-100 !border-neutral-400/10':
                  tab === 3,
              }"
              @click="tab = 3"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border rounded-xl border-neutral-600 bg-neutral-900"
              >
                <img
                  loading="lazy"
                  class="w-6 h-6"
                  src="/images/download-linux.svg"
                  alt="Linux"
                />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-neutral-200': tab === 3 }"
              >
                Linux
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-neutral-500/10"
              :class="{
                'bg-neutral-500/10 !opacity-100 !border-neutral-400/10':
                  tab === 4,
              }"
              @click="tab = 4"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border rounded-xl border-neutral-600 bg-neutral-900"
              >
                <icon-lucide-globe class="w-6 h-6" />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-neutral-200': tab === 4 }"
              >
                Web App
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-neutral-500/10"
              :class="{
                'bg-neutral-500/10 !opacity-100 !border-neutral-400/10':
                  tab === 5,
              }"
              @click="tab = 5"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border rounded-xl border-neutral-600 bg-neutral-900"
              >
                <icon-lucide-terminal class="w-6 h-6" />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-neutral-200': tab === 5 }"
              >
                CLI
              </div>
            </button>
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
              <div v-if="tab === 1" class="flex justify-center w-full">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://github.com/hoppscotch/hoppscotch/releases"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
                    target="_blank"
                  >
                    Download for Mac &nbsp; ~ &nbsp; Apple Silicon
                  </a>
                  <a
                    href="https://github.com/hoppscotch/hoppscotch/releases"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
                    target="_blank"
                  >
                    Download for Mac &nbsp; ~ &nbsp; Intel
                  </a>
                </div>
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
              <div v-if="tab === 2" class="flex justify-center w-full">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://github.com/hoppscotch/hoppscotch/releases"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
                    target="_blank"
                  >
                    Download for Windows
                  </a>
                </div>
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
              <div v-if="tab === 3" class="flex justify-center w-full">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://github.com/hoppscotch/hoppscotch/releases"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
                    target="_blank"
                  >
                    Download for Linux
                  </a>
                </div>
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
              <div v-if="tab === 4" class="flex justify-center w-full">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://hoppscotch.io"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
                    target="_blank"
                  >
                    Open Web App
                  </a>
                </div>
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
              <div v-if="tab === 5" class="flex justify-center w-full">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://docs.hoppscotch.io/documentation/clients/cli"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
                    target="_blank"
                  >
                    Install CLI
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
