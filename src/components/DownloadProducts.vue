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
            Download
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Hoppscotch Client
          </h2>
          <p class="text-zinc-400/80">
            Download (alpha release) for Mac, Windows, Linux — Web and CLI.
          </p>
        </div>
        <!-- Section content -->
        <div class="mx-auto max-w-4xl">
          <!-- Tabs buttons -->
          <div
            class="no-scrollbar mb-10 flex w-full min-w-0 gap-4 overflow-x-auto"
          >
            <button
              class="m-2 inline-flex flex-shrink-0 grow flex-col items-center justify-center rounded-xl border border-transparent px-8 py-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
              :class="{
                '!border-zinc-400/10 bg-zinc-500/10 !opacity-100': tab === 1,
              }"
              @click="tab = 1"
            >
              <div
                class="mb-4 flex flex-shrink-0 rounded-xl border border-zinc-600 bg-zinc-900 p-4"
              >
                <img
                  loading="lazy"
                  class="h-6 w-6"
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
              class="m-2 inline-flex flex-shrink-0 grow flex-col items-center justify-center rounded-xl border border-transparent px-8 py-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
              :class="{
                '!border-zinc-400/10 bg-zinc-500/10 !opacity-100': tab === 2,
              }"
              @click="tab = 2"
            >
              <div
                class="mb-4 flex flex-shrink-0 rounded-xl border border-zinc-600 bg-zinc-900 p-4"
              >
                <img
                  loading="lazy"
                  class="h-6 w-6"
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
              class="m-2 inline-flex flex-shrink-0 grow flex-col items-center justify-center rounded-xl border border-transparent px-8 py-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
              :class="{
                '!border-zinc-400/10 bg-zinc-500/10 !opacity-100': tab === 3,
              }"
              @click="tab = 3"
            >
              <div
                class="mb-4 flex flex-shrink-0 rounded-xl border border-zinc-600 bg-zinc-900 p-4"
              >
                <img
                  loading="lazy"
                  class="h-6 w-6"
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
              class="m-2 inline-flex flex-shrink-0 grow flex-col items-center justify-center rounded-xl border border-transparent px-8 py-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
              :class="{
                '!border-zinc-400/10 bg-zinc-500/10 !opacity-100': tab === 4,
              }"
              @click="tab = 4"
            >
              <div
                class="mb-4 flex flex-shrink-0 rounded-xl border border-zinc-600 bg-zinc-900 p-4"
              >
                <icon-lucide-globe class="h-6 w-6" />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-zinc-200': tab === 4 }"
              >
                Web App
              </div>
            </button>
            <button
              class="m-2 inline-flex flex-shrink-0 grow flex-col items-center justify-center rounded-xl border border-transparent px-8 py-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
              :class="{
                '!border-zinc-400/10 bg-zinc-500/10 !opacity-100': tab === 5,
              }"
              @click="tab = 5"
            >
              <div
                class="mb-4 flex flex-shrink-0 rounded-xl border border-zinc-600 bg-zinc-900 p-4"
              >
                <icon-lucide-terminal class="h-6 w-6" />
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
              <div v-if="tab === 1" class="flex w-full justify-center">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_mac_aarch64.dmg"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
                    target="_blank"
                  >
                    Download for Mac &nbsp; ~ &nbsp; Apple Silicon
                  </a>
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_mac_x64.dmg"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
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
              <div v-if="tab === 2" class="flex w-full justify-center">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_win_x64.msi"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
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
              <div v-if="tab === 3" class="flex w-full justify-center">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_linux_x64.deb"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
                    target="_blank"
                  >
                    Download for Linux &nbsp; ~ &nbsp; .deb
                  </a>
                  <a
                    href="https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_linux_x64.AppImage"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
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
              <div v-if="tab === 4" class="flex w-full justify-center">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://hoppscotch.io"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
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
              <div v-if="tab === 5" class="flex w-full justify-center">
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    href="https://docs.hoppscotch.io/documentation/clients/cli"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
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
