<script setup lang="ts">
  const tab = ref("1")
</script>

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <div>
          <!-- Section content -->
          <div
            class="flex flex-col max-w-xl mx-auto space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 md:space-y-0"
          >
            <!-- Content -->
            <div
              class="order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center"
            >
              <!-- Content #1 -->
              <span
                class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-50 to-gray-600"
              >
                Developer-First API Platform
              </span>
              <h3
                class="pb-3 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-200/50 via-gray-100/80 to-gray-50/80"
              >
                Essential Tools for API Development
              </h3>
              <p class="mb-8 text-gray-400/80">
                Hoppscotch makes it easy to create and test your APIs, helping
                you to ship products faster.
              </p>
              <div class="max-w-xs mt-8 space-y-2 max-md:mx-auto">
                <button
                  class="flex items-center w-full px-3 py-2 text-sm text-gray-100 border transition rounded-md bg-gray-900/25 hover:opacity-100"
                  :class="
                    tab !== '1'
                      ? 'border-gray-800 opacity-50'
                      : 'border-gray-700 shadow shadow-gray-500/25'
                  "
                  @click.prevent="tab = '1'"
                >
                  <icon-lucide-zap class="mr-3" />
                  <span>Built to be Fast</span>
                </button>
                <button
                  class="flex items-center w-full px-3 py-2 text-sm text-gray-100 border transition rounded-md bg-gray-900/25 hover:opacity-100"
                  :class="
                    tab !== '2'
                      ? 'border-gray-800 opacity-50'
                      : 'border-gray-700 shadow shadow-gray-500/25'
                  "
                  @click.prevent="tab = '2'"
                >
                  <icon-lucide-heart class="mr-3" />
                  <span>Made with Open-Source</span>
                </button>
                <button
                  class="flex items-center w-full px-3 py-2 text-sm text-gray-100 border transition rounded-md bg-gray-900/25 hover:opacity-100"
                  :class="
                    tab !== '3'
                      ? 'border-gray-800 opacity-50'
                      : 'border-gray-700 shadow shadow-gray-500/25'
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
                    class="relative flex items-center justify-center w-48 h-48"
                  >
                    <!-- Halo effect -->
                    <svg
                      class="absolute inset-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 will-change-transform blur-md"
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
                      class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]"
                    >
                      <div class="h-[200%] animate-endless-wave">
                        <div
                          class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"
                        ></div>
                        <div
                          class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.gray.500)_48px,_theme(colors.gray.500)_49px)]"
                        ></div>
                        <div
                          class="absolute inset-0 [background:_repeating-linear-gradient(90deg,_transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"
                        ></div>
                        <div
                          class="absolute inset-0 [background:_repeating-linear-gradient(90deg,_transparent,_transparent_48px,_theme(colors.gray.500)_48px,_theme(colors.gray.500)_49px)]"
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
                          class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] before:absolute before:inset-0 before:bg-gray-900/30 before:rounded-2xl"
                        >
                          <icon-lucide-zap
                            class="relative w-8 h-8 fill-gray-200"
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
                          class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] before:absolute before:inset-0 before:bg-gray-900/30 before:rounded-2xl"
                        >
                          <icon-lucide-heart
                            class="relative w-8 h-8 fill-gray-200"
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
                          class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] before:absolute before:inset-0 before:bg-gray-900/30 before:rounded-2xl"
                        >
                          <icon-lucide-users-2
                            class="relative w-8 h-8 fill-gray-200"
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
