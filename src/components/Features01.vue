<script setup lang="ts">
const tab = ref("1")
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <div>
          <!-- Section content -->
          <div
            class="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20"
          >
            <!-- Content -->
            <div
              class="order-1 max-md:text-center md:order-none md:w-7/12 lg:w-1/2"
            >
              <!-- Content #1 -->
              <span
                class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
              >
                Developer-First API Platform
              </span>
              <h3
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-3 text-transparent"
              >
                Essential Tools for API Development
              </h3>
              <p class="mb-8 text-zinc-400/80">
                Hoppscotch makes it easy to create and test your APIs, helping
                you to ship products faster.
              </p>
              <div class="mt-8 max-w-xs space-y-2 max-md:mx-auto">
                <button
                  class="flex w-full items-center rounded-md border bg-zinc-900/25 px-3 py-2 text-sm text-zinc-100 transition hover:opacity-100"
                  :class="
                    tab !== '1'
                      ? 'border-zinc-800 opacity-50'
                      : 'border-zinc-700 shadow shadow-zinc-500/25'
                  "
                  @click.prevent="tab = '1'"
                >
                  <icon-lucide-zap class="mr-3" />
                  <span>Built to be Fast</span>
                </button>
                <button
                  class="flex w-full items-center rounded-md border bg-zinc-900/25 px-3 py-2 text-sm text-zinc-100 transition hover:opacity-100"
                  :class="
                    tab !== '2'
                      ? 'border-zinc-800 opacity-50'
                      : 'border-zinc-700 shadow shadow-zinc-500/25'
                  "
                  @click.prevent="tab = '2'"
                >
                  <icon-lucide-heart class="mr-3" />
                  <span>Made with Open-Source</span>
                </button>
                <button
                  class="flex w-full items-center rounded-md border bg-zinc-900/25 px-3 py-2 text-sm text-zinc-100 transition hover:opacity-100"
                  :class="
                    tab !== '3'
                      ? 'border-zinc-800 opacity-50'
                      : 'border-zinc-700 shadow shadow-zinc-500/25'
                  "
                  @click.prevent="tab = '3'"
                >
                  <icon-lucide-users-2 class="mr-3" />
                  <span>Designed for Teams</span>
                </button>
              </div>
            </div>
            <!-- Image -->
            <div class="md:w-5/12 lg:w-1/2">
              <div class="relative py-24">
                <!-- Particles animation -->
                <ClientOnly>
                  <Particles
                    class="absolute inset-0 -z-10"
                    :quantity="8"
                    :staticity="30"
                  />
                </ClientOnly>
                <div class="flex items-center justify-center">
                  <div
                    class="relative flex h-48 w-48 items-center justify-center"
                  >
                    <!-- Halo effect -->
                    <svg
                      class="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform blur-md will-change-transform"
                      width="480"
                      height="480"
                      viewBox="0 0 480 480"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="pulse-a"
                          x1="50%"
                          x2="50%"
                          y1="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#000" />
                          <stop offset="50%" stop-color="#fff" />
                          <stop offset="100%" stop-color="#000" />
                        </linearGradient>
                      </defs>
                      <g fill-rule="evenodd">
                        <path
                          class="pulse"
                          fill="url(#pulse-a)"
                          fill-rule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                        />
                        <path
                          class="pulse pulse-1"
                          fill="url(#pulse-a)"
                          fill-rule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                        />
                        <path
                          class="pulse pulse-2"
                          fill="url(#pulse-a)"
                          fill-rule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                        />
                      </g>
                    </svg>
                    <!-- Grid -->
                    <div
                      class="pointer-events-none absolute inset-0 left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full [mask-image:_radial-gradient(black,_transparent_60%)]"
                    >
                      <div class="h-[200%] animate-endless-wave">
                        <div
                          class="absolute inset-0 opacity-20 blur-[2px] [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)]"
                        ></div>
                        <div
                          class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.zinc.500)_48px,_theme(colors.zinc.500)_49px)]"
                        ></div>
                        <div
                          class="absolute inset-0 opacity-20 blur-[2px] [background:_repeating-linear-gradient(90deg,_transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)]"
                        ></div>
                        <div
                          class="absolute inset-0 [background:_repeating-linear-gradient(90deg,_transparent,_transparent_48px,_theme(colors.zinc.500)_48px,_theme(colors.zinc.500)_49px)]"
                        ></div>
                      </div>
                    </div>
                    <!-- Icons -->
                    <Transition
                      enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 order-first"
                      enter-from-class="opacity-0 -rotate-[60deg]"
                      enter-to-class="opacity-100 rotate-0"
                      leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 absolute"
                      leave-from-class="opacity-100 rotate-0"
                      leave-to-class="opacity-0 rotate-[60deg]"
                    >
                      <div v-if="tab === '1'" class="absolute">
                        <div
                          class="relative flex h-16 w-16 -rotate-[14deg] items-center justify-center rounded-2xl border border-transparent shadow-2xl [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] before:absolute before:inset-0 before:rounded-2xl before:bg-zinc-900/30"
                        >
                          <icon-lucide-zap
                            class="relative h-8 w-8 fill-zinc-200"
                          />
                        </div>
                      </div>
                    </Transition>
                    <Transition
                      enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 order-first"
                      enter-from-class="opacity-0 -rotate-[60deg]"
                      enter-to-class="opacity-100 rotate-0"
                      leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 absolute"
                      leave-from-class="opacity-100 rotate-0"
                      leave-to-class="opacity-0 rotate-[60deg]"
                    >
                      <div v-if="tab === '2'" class="absolute">
                        <div
                          class="relative flex h-16 w-16 -rotate-[14deg] items-center justify-center rounded-2xl border border-transparent shadow-2xl [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] before:absolute before:inset-0 before:rounded-2xl before:bg-zinc-900/30"
                        >
                          <icon-lucide-heart
                            class="relative h-8 w-8 fill-zinc-200"
                          />
                        </div>
                      </div>
                    </Transition>
                    <Transition
                      enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 order-first"
                      enter-from-class="opacity-0 -rotate-[60deg]"
                      enter-to-class="opacity-100 rotate-0"
                      leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 absolute"
                      leave-from-class="opacity-100 rotate-0"
                      leave-to-class="opacity-0 rotate-[60deg]"
                    >
                      <div v-if="tab === '3'" class="absolute">
                        <div
                          class="relative flex h-16 w-16 -rotate-[14deg] items-center justify-center rounded-2xl border border-transparent shadow-2xl [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] before:absolute before:inset-0 before:rounded-2xl before:bg-zinc-900/30"
                        >
                          <icon-lucide-users-2
                            class="relative h-8 w-8 fill-zinc-200"
                          />
                        </div>
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Pulsing animation */
@keyframes pulseLoop {
  0% {
    opacity: 0;
    transform: scale(0.25) translateZ(0);
  }
  30% {
    opacity: 0.4;
  }
  70% {
    opacity: 0;
  }
  80% {
    transform: scale(1) translateZ(0);
  }
}
.pulse {
  opacity: 0;
  transform-origin: center;
  animation: pulseLoop 12000ms linear infinite;
}
.pulse-1 {
  animation-delay: -4000ms;
}
.pulse-2 {
  animation-delay: -8000ms;
}
</style>
