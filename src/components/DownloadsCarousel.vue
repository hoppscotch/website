<script setup lang="ts">
// Import Swiper
import Swiper, { Navigation } from "swiper"
import "swiper/css"

Swiper.use([Navigation])
const swiperInitialized = ref(false)
onMounted(() => {
  new Swiper(".testimonials-carousel", {
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    grabCursor: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".carousel-next",
      prevEl: ".carousel-prev",
    },
  })
  swiperInitialized.value = true
})
</script>

<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
      <div
        class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-950 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-950 after:to-20%"
      >
        <div class="testimonials-carousel swiper-container group">
          <Highlighter
            class="swiper-wrapper w-fit"
            :refresh="swiperInitialized"
          >
            <!-- Carousel items -->
            <HighlighterItem
              class="h-auto swiper-slide group/slide"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div
                class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Particles animation -->
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                  :refresh="swiperInitialized"
                />
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                  ></div>
                </div>
                <div class="flex flex-col h-full p-6">
                  <img
                    class="p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                    src="/images/download-apple.svg"
                    width="40"
                    height="40"
                    alt="Icon 01"
                  />
                  <div class="flex flex-col grow">
                    <div class="mb-1 text-lg font-bold">Download for Mac</div>
                    <div class="mb-3 text-slate-400">
                      Work without distraction on your own or with your team.
                    </div>
                  </div>
                  <div class="text-right">
                    <RouterLink
                      class="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white group"
                      to="/"
                    >
                      Download
                      <span
                        class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                      >
                        <icon-lucide-arrow-right />
                      </span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </HighlighterItem>
            <HighlighterItem
              class="h-auto swiper-slide group/slide"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div
                class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Particles animation -->
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                  :refresh="swiperInitialized"
                />
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                  ></div>
                </div>
                <div class="flex flex-col h-full p-6">
                  <img
                    class="p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                    src="/images/download-windows.svg"
                    width="40"
                    height="40"
                    alt="Icon 01"
                  />
                  <div class="flex flex-col grow">
                    <div class="mb-1 text-lg font-bold">
                      Download for Windows
                    </div>
                    <div class="mb-3 text-slate-400">
                      Work without distraction on your own or with your team.
                    </div>
                  </div>
                  <div class="text-right">
                    <RouterLink
                      class="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white group"
                      to="/"
                    >
                      Download
                      <span
                        class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                      >
                        <icon-lucide-arrow-right />
                      </span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </HighlighterItem>
            <HighlighterItem
              class="h-auto swiper-slide group/slide"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div
                class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Particles animation -->
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                  :refresh="swiperInitialized"
                />
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                  ></div>
                </div>
                <div class="flex flex-col h-full p-6">
                  <img
                    class="p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                    src="/images/download-linux.svg"
                    width="40"
                    height="40"
                    alt="Icon 01"
                  />
                  <div class="flex flex-col grow">
                    <div class="mb-1 text-lg font-bold">Download for Linux</div>
                    <div class="mb-3 text-slate-400">
                      Work without distraction on your own or with your team.
                    </div>
                  </div>
                  <div class="text-right">
                    <RouterLink
                      class="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white group"
                      to="/"
                    >
                      Download
                      <span
                        class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                      >
                        <icon-lucide-arrow-right />
                      </span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </HighlighterItem>
            <HighlighterItem
              class="h-auto swiper-slide group/slide"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div
                class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Particles animation -->
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                  :refresh="swiperInitialized"
                />
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                  ></div>
                </div>
                <div class="flex flex-col h-full p-6">
                  <icon-lucide-globe
                    class="w-10 h-10 p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                  />
                  <div class="flex flex-col grow">
                    <div class="mb-1 text-lg font-bold">Web App</div>
                    <div class="mb-3 text-slate-400">
                      Work without distraction on your own or with your team.
                    </div>
                  </div>
                  <div class="text-right">
                    <a
                      class="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white group"
                      href="https://hoppscotch.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open App
                      <span
                        class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                      >
                        <icon-lucide-arrow-right />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
            <HighlighterItem
              class="h-auto swiper-slide group/slide"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div
                class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Particles animation -->
                <Particles
                  class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                  :quantity="3"
                  :refresh="swiperInitialized"
                />
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 rounded-full bg-slate-900 group-[.swiper-slide-active]/slide:bg-violet-500 transition-colors duration-500 blur-[60px]"
                  ></div>
                </div>
                <div class="flex flex-col h-full p-6">
                  <icon-lucide-terminal
                    class="w-10 h-10 p-3 mb-4 border rounded-xl border-slate-600 bg-slate-900"
                  />
                  <div class="flex flex-col grow">
                    <div class="mb-1 text-lg font-bold">
                      Install for Terminal
                    </div>
                    <div class="mb-3 text-slate-400">
                      Work without distraction on your own or with your team.
                    </div>
                  </div>
                  <div class="text-right">
                    <RouterLink
                      class="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white group"
                      to="/"
                    >
                      Install
                      <span
                        class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
                      >
                        <icon-lucide-arrow-right />
                      </span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </div>
      </div>
      <!-- Arrows -->
      <div class="flex justify-end mt-8">
        <button
          class="relative z-20 flex items-center justify-center w-12 h-12 rounded-full carousel-prev group"
        >
          <span class="sr-only">Previous</span>
          <icon-lucide-arrow-left
            class="w-4 h-4 transition text-slate-500 group-hover:text-violet-500"
          />
        </button>
        <button
          class="relative z-20 flex items-center justify-center w-12 h-12 rounded-full carousel-next group"
        >
          <span class="sr-only">Next</span>
          <icon-lucide-arrow-right
            class="w-4 h-4 transition text-slate-500 group-hover:text-violet-500"
          />
        </button>
      </div>
    </div>
  </section>
</template>
