<script setup lang="ts">
  const isDownloading = ref(false)
  function initDownload() {
    isDownloading.value = true
    setTimeout(() => {
      isDownloading.value = false
    }, 2000)
  }
</script>

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
          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="max-w-2xl pb-12 mx-auto text-center md:pb-20">
          <div
            v-motion-fade
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full hero-subtitle-gradient bg-violet-500/10 border-violet-500/50"
            :delay="100"
          >
            <span
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
            >
              Download
            </span>
          </div>
          <h2
            v-motion-fade
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
            :delay="200"
          >
            Take Hoppscotch with you
          </h2>
          <p v-motion-fade class="text-lg text-slate-400" :delay="300">
            Download Hoppscotch for your platform — Web, macOS, Windows, Linux,
            or CLI.
          </p>
        </div>
        <!-- Platform download -->
        <div v-motion-fade>
          <Highlighter class="group">
            <HighlighterItem>
              <div
                class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px]"
                  ></div>
                </div>
                <img
                  src="/images/feature-image-04.png"
                  width="768"
                  height="400"
                  alt="Feature 04"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                >
                  <button
                    v-if="!isDownloading"
                    class="inline-flex items-center justify-center px-3 py-1 text-sm font-medium border border-transparent rounded-full shadow-xl transition text-slate-950 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                    @click="initDownload"
                  >
                    <span class="mr-1"> Download </span>
                    <span
                      class="text-violet-500 group-hover:translate-x-0.5 transition-transform"
                    >
                      <icon-lucide-arrow-right />
                    </span>
                  </button>
                  <icon-lucide-loader v-else class="m-2 animate-spin" />
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </div>
      </div>
    </div>
  </section>
</template>
