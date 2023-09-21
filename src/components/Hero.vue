<script setup lang="ts">
  const videoModalOpen = ref(false)
  const video = ref<HTMLVideoElement | null>(null)

  watch(videoModalOpen, () => {
    videoModalOpen.value ? video.value?.play() : video.value?.pause()
  })
</script>

<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Radial gradient -->
      <div
        class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div
          class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
        >
          <div
            class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-50"
          ></div>
        </div>
      </div>
      <!-- Particles animation -->
      <ClientOnly>
        <Particles class="absolute inset-0 -z-10" />
      </ClientOnly>
      <!-- Illustration -->
      <div
        class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div class="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
          <img
            src="/images/glow-bottom.svg"
            class="max-w-none"
            width="2146"
            height="774"
            alt="Hero Illustration"
          />
        </div>
      </div>
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Hero content -->
        <div class="flex flex-col items-center max-w-4xl mx-auto text-center">
          <Announcement />
          <h1
            v-motion-fade
            class="mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
          >
            Make Better APIs
          </h1>
          <p
            v-motion-fade
            class="w-2/3 mb-8 text-xl text-slate-300"
            :delay="200"
          >
            Trusted by millions of developers to build, test and share APIs.
          </p>
          <div
            v-motion-fade
            class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
            :delay="400"
          >
            <div>
              <a
                href="https://hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                class="relative inline-block overflow-hidden group rounded-full p-[1px]"
              >
                <span
                  class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.purple.200)_0%,_theme(colors.blue.800)_50%,_theme(colors.purple.200)_100%)]"
                ></span>
                <div
                  class="inline-flex items-center justify-center w-full h-full px-4 py-2 text-sm font-medium text-white rounded-full cursor-pointer animate-background-shine bg-[linear-gradient(110deg,_theme(colors.slate.950/90),45%,_theme(colors.blue.800),55%,_theme(colors.slate.950/90))] bg-[length:250%_100%] backdrop-blur-2xl"
                >
                  Get Started for free on Cloud
                  <span
                    class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                  >
                    <icon-lucide-chevron-right />
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-transparent rounded-full transition bg-opacity-10 text-slate-200 hover:text-white hover:bg-opacity-20"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Self-Host from GitHub
              </a>
            </div>
          </div>
          <div v-motion-fade class="relative my-16 xl:-mx-36" :delay="400">
            <!-- Radial gradient -->
            <div
              class="absolute inset-0 z-10 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <div
                class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
              >
                <div
                  class="absolute inset-0 translate-z-0 bg-violet-500/50 rounded-full blur-[120px] opacity-50"
                ></div>
              </div>
            </div>
            <img
              src="/images/screenshot-1.png"
              alt="Screenshot"
              class="rounded-xl bg-gradient-to-b from-slate-950 to-transparent backdrop-blur-2xl"
            />
            <div
              class="absolute inset-0 flex items-center justify-center after:content-[''] after:h-16 after:w-px after:absolute after:left-0 after:top-3/4 after:duration-700 after:bg-gradient-to-b after:from-transparent after:via-white/50 after:to-transparent after:opacity-0 hover:after:top-1/4 hover:after:opacity-100"
            >
              <button
                class="border rounded-full shadow-xl transition border-violet-500/10 bg-violet-500/10 backdrop-blur-2xl group hover:scale-110"
                @click.stop="videoModalOpen = true"
              >
                <div
                  class="flex items-center justify-center p-4 m-4 text-white rounded-full shadow-xl transition outline outline-violet-500/90 backdrop-blur-2xl bg-gradient-to-b from-violet-500/50 to-violet-900/10 group-hover:scale-110"
                >
                  <icon-lucide-play />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      id="video-modal"
      aria-label="modal-headline"
      :modal-open="videoModalOpen"
      @close-modal="videoModalOpen = false"
    >
      <div class="p-1 border rounded-2xl bg-white/10 border-white/10">
        <div
          class="relative w-full h-full overflow-hidden border border-slate-950 rounded-xl"
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
    </Modal>
  </section>
</template>
