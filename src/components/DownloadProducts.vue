<script setup lang="ts">
  const tab = ref(1)
</script>

<template>
  <section class="relative">
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600"
          >
            Download
          </span>
          <h2
            class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            Hoppscotch Client
          </h2>
          <p class="text-zinc-400/80">
            Download (alpha release) for Mac, Windows, Linux — Web and CLI.
          </p>
        </div>
        <!-- Section content -->
        <div class="max-w-4xl mx-auto">
          <!-- Tabs buttons -->
          <div
            class="flex w-full min-w-0 mb-10 overflow-x-auto gap-4 no-scrollbar"
          >
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-zinc-500/10"
              :class="{
                'bg-zinc-500/10 !opacity-100 !border-zinc-400/10': tab === 1,
              }"
              @click="tab = 1"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border bg-zinc-900 border-zinc-600 rounded-xl"
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
                :class="{ 'text-zinc-200': tab === 1 }"
              >
                Mac
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-zinc-500/10"
              :class="{
                'bg-zinc-500/10 !opacity-100 !border-zinc-400/10': tab === 2,
              }"
              @click="tab = 2"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border bg-zinc-900 border-zinc-600 rounded-xl"
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
                :class="{ 'text-zinc-200': tab === 2 }"
              >
                Windows
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-zinc-500/10"
              :class="{
                'bg-zinc-500/10 !opacity-100 !border-zinc-400/10': tab === 3,
              }"
              @click="tab = 3"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border bg-zinc-900 border-zinc-600 rounded-xl"
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
                :class="{ 'text-zinc-200': tab === 3 }"
              >
                Linux
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-zinc-500/10"
              :class="{
                'bg-zinc-500/10 !opacity-100 !border-zinc-400/10': tab === 4,
              }"
              @click="tab = 4"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border bg-zinc-900 border-zinc-600 rounded-xl"
              >
                <icon-lucide-globe class="w-6 h-6" />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-zinc-200': tab === 4 }"
              >
                Web App
              </div>
            </button>
            <button
              class="inline-flex flex-col items-center justify-center flex-shrink-0 px-8 py-4 m-2 text-center border border-transparent opacity-50 transition-opacity grow rounded-xl hover:bg-zinc-500/10"
              :class="{
                'bg-zinc-500/10 !opacity-100 !border-zinc-400/10': tab === 5,
              }"
              @click="tab = 5"
            >
              <div
                class="flex flex-shrink-0 p-4 mb-4 border bg-zinc-900 border-zinc-600 rounded-xl"
              >
                <icon-lucide-terminal class="w-6 h-6" />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-zinc-200': tab === 5 }"
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
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_mac_aarch64.dmg"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
                    target="_blank"
                  >
                    Download for Mac &nbsp; ~ &nbsp; Apple Silicon
                  </a>
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_mac_x64.dmg"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
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
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_win_x64.msi"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
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
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_linux_x64.deb"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
                    target="_blank"
                  >
                    Download for Linux &nbsp; ~ &nbsp; .deb
                  </a>
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_linux_x64.AppImage"
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
                    target="_blank"
                  >
                    Download for Linux &nbsp; ~ &nbsp; .AppImage
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
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
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
                    class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
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
