<!-- <script setup lang="ts">
  const videoModalOpen = ref(false)
  const video = ref<HTMLVideoElement | null>(null)

  watch(videoModalOpen, () => {
    videoModalOpen.value ? video.value?.play() : video.value?.pause()
  })
</script> -->

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto overflow-y-clip sm:px-6">
      <!-- Radial gradient -->
      <div
        class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div
          class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-video"
        >
          <div
            class="absolute inset-0 translate-z-0 bg-gray-500 rounded-full blur-[60px] opacity-10"
          ></div>
        </div>
      </div>
      <!-- Particles animation -->
      <ClientOnly>
        <Particles class="absolute inset-0 -z-10" />
      </ClientOnly>
      <!-- Hero content -->
      <div class="relative pt-32 pb-16 overflow-y-clip md:pt-40">
        <div
          class="relative flex flex-col items-center max-w-4xl mx-auto text-center"
        >
          <Announcement />
          <h1
            class="block mb-8 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            Make Better APIs
          </h1>
          <p class="max-w-md mb-8 md:max-w-2xl text-gray-400/80">
            Trusted by millions of developers to build, test and share APIs.
          </p>
          <div
            class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
          >
            <div>
              <a
                href="https://hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                class="relative inline-flex overflow-hidden group rounded-full p-[1px]"
              >
                <span
                  class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.gray.900)_0%,_theme(colors.gray.600)_50%,_theme(colors.gray.900)_100%)]"
                ></span>
                <div
                  class="inline-flex items-center justify-center w-full h-full px-4 py-2 text-sm text-gray-50 rounded-full cursor-pointer animate-background-shine bg-[linear-gradient(110deg,_theme(colors.gray.950),45%,_theme(colors.gray.900),55%,_theme(colors.gray.950))] bg-[length:200%_100%] backdrop-blur-md"
                >
                  Get Started on Cloud
                  <span
                    class="text-gray-500 group-hover:translate-x-0.5 transition-transform ml-1"
                  >
                    <icon-lucide-chevron-right />
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-gray-200 bg-white border rounded-full transition border-gray-500/20 bg-opacity-10 backdrop-blur-md hover:text-gray-50 hover:border-gray-500/20 hover:bg-opacity-20"
                href="https://docs.hoppscotch.io/documentation/self-host/getting-started"
                target="_blank"
              >
                Self-Host from GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero image -->
      <div
        class="relative flex flex-col items-center max-w-4xl mx-auto text-center"
      >
        <span
          class="absolute -top-4 h-1/4 rounded-3xl bg-gray-600/20 -inset-x-1/4 blur-3xl"
        ></span>
        <div class="relative xl:-mx-36">
          <!-- Backdrop image -->
          <div
            class="relative inline-flex p-px overflow-hidden rounded-lg md:rounded-xl"
          >
            <span
              class="absolute inset-[-1000%] animate-[spin_16s_linear_infinite] bg-[conic-gradient(from_225deg_at_50%_50%,_theme(colors.transparent)_0%,_theme(colors.transparent)_92%,_theme(colors.gray.600)_97%,_theme(colors.gray.400)_100%)]"
            ></span>
            <span
              class="absolute inset-[-1000%] animate-[spin_16s_linear_infinite_8s] bg-[conic-gradient(from_225deg_at_50%_50%,_theme(colors.transparent)_0%,_theme(colors.transparent)_92%,_theme(colors.gray.600)_97%,_theme(colors.gray.400)_100%)]"
            ></span>
            <div
              class="relative inline-flex items-center justify-center w-full h-full rounded-lg bg-gray-950 ring ring-gray-500/25 md:rounded-xl"
            >
              <img src="/images/hero-screenshot.png" alt="Screenshot" />
            </div>
          </div>
          <!-- Video modal trigger -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-gray-950 to-95%"
          >
            <!-- <button
              class="overflow-hidden border rounded-full shadow-xl transition border-gray-500/10 bg-gray-500/10 backdrop-blur-md group hover:scale-110"
              @click.stop="videoModalOpen = true"
            >
              <div
                class="flex items-center justify-center p-6 m-4 border rounded-full shadow-xl transition text-gray-50 border-gray-500/90 backdrop-blur-md bg-gradient-to-b from-gray-500/50 to-gray-900/10 group-hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="text-gray-200"
                >
                  <path
                    fill="currentColor"
                    d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z"
                  />
                </svg>
              </div>
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <Modal
      id="video-modal"
      aria-label="modal-headline"
      :modal-open="videoModalOpen"
      @close-modal="videoModalOpen = false"
    >
      <div class="p-1 border rounded-2xl bg-white/10 border-gray-500/20">
        <div
          class="relative w-full h-full overflow-hidden border border-gray-950 rounded-xl"
        >
          <video
            ref="video"
            className="w-full aspect-video"
            width="1920"
            height="1080"
            loop
            controls
          >
            <source src="/videos/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Modal> -->
  </section>
</template>
