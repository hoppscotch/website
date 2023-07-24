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
      <!-- Particles animation -->
      <Particles class="absolute inset-0 -z-10" />
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
            class="mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white/90 via-white/80 to-white/20"
            data-aos="fade-down"
          >
            Make Better APIs
          </h1>
          <p
            class="w-2/3 mb-8 text-xl text-slate-300"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Trusted by millions of developers to build, test and share APIs.
          </p>
          <div
            class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div>
              <a
                href="https://hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                class="relative inline-block overflow-hidden group rounded-full p-[1px]"
              >
                <span
                  class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                ></span>
                <div
                  class="inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium text-white rounded-full cursor-pointer animate-background-shine bg-slate-950/90 bg-[linear-gradient(110deg,_theme(colors.slate.950/90),45%,#393BB2,55%,_theme(colors.slate.950/90))] bg-[length:250%_100%] backdrop-blur-xl"
                >
                  Get Started for free with Cloud
                  <span
                    class="text-white group-hover:translate-x-0.5 transition-transform ml-1"
                  >
                    <icon-lucide-chevron-right />
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                class="inline-flex items-center justify-center w-full px-3 py-1 text-sm font-medium bg-white border border-transparent rounded-full transition bg-opacity-10 text-slate-200 hover:text-white hover:bg-opacity-20"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Self-Host on GitHub</span>
              </a>
            </div>
          </div>
          <div
            class="relative my-16 -mx-28"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/screenshot-1.png"
              alt="Screenshot"
              class="rounded-xl bg-gradient-to-b from-slate-950 to-transparent backdrop-blur-xl"
            />
            <div
              class="absolute inset-0 flex items-center justify-center after:content-[''] after:h-16 after:w-px after:absolute after:left-0 after:top-3/4 after:duration-700 after:bg-gradient-to-b after:from-transparent after:via-white/50 after:to-transparent after:opacity-0 hover:after:top-1/4 hover:after:opacity-100"
            >
              <div
                class="border rounded-full transition border-white/10 bg-black/10 backdrop-blur-xl group hover:scale-110"
              >
                <button
                  class="flex items-center justify-center p-4 m-4 text-white rounded-full transition outline outline-white/50 backdrop-blur-xl bg-gradient-to-b from-white/50 to-white/10 group-hover:scale-110"
                  @click.stop="videoModalOpen = true"
                >
                  <icon-lucide-play />
                </button>
              </div>
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
      <div class="relative w-full h-full overflow-hidden rounded-xl">
        <video
          ref="video"
          className="w-full aspect-video"
          width="1920"
          height="1080"
          loop
          controls
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  </section>
</template>
