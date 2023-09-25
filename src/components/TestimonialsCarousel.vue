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
      <div class="pt-12 md:pt-20">
        <!-- Section header -->
        <div class="max-w-2xl pb-12 mx-auto text-center md:pb-20">
          <div
            v-motion-fade
            class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full bg-violet-500/10 border-violet-500/50"
            :delay="100"
          >
            <span
              class="inline-flex text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
            >
              The security first platform
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
          >
            Spot issues faster
          </h2>
          <p class="text-lg text-slate-400">
            All the lorem ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
          </p>
        </div>
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
                v-motion-fade
                class="h-auto swiper-slide group/slide"
                :delay="100"
              >
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <ClientOnly>
                    <Particles
                      class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                      :quantity="3"
                      :refresh="swiperInitialized"
                    />
                  </ClientOnly>
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
                      class="mb-3"
                      src="/images/carousel-icon-01.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="flex flex-col grow">
                      <div class="mb-1 text-lg font-bold">
                        Fast and reliable
                      </div>
                      <div class="mb-3 text-slate-400">
                        Hoppscotch is built from the ground up to be fast and
                        reliable.
                      </div>
                    </div>
                    <div>
                      <RouterLink
                        class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-200 hover:text-white group"
                        to="/"
                      >
                        Learn More
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
                v-motion-fade
                class="h-auto swiper-slide group/slide"
                :delay="200"
              >
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <ClientOnly>
                    <Particles
                      class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                      :quantity="3"
                      :refresh="swiperInitialized"
                    />
                  </ClientOnly>
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
                      class="mb-3"
                      src="/images/carousel-icon-02.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="flex flex-col grow">
                      <div class="mb-1 text-lg font-bold">Open Source</div>
                      <div class="mb-3 text-slate-400">
                        Open-source and audited by the community.
                      </div>
                    </div>
                    <div>
                      <RouterLink
                        class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-200 hover:text-white group"
                        to="/"
                      >
                        Learn More
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
                v-motion-fade
                class="h-auto swiper-slide group/slide"
                :delay="300"
              >
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <ClientOnly>
                    <Particles
                      class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                      :quantity="3"
                      :refresh="swiperInitialized"
                    />
                  </ClientOnly>
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
                      class="mb-3"
                      src="/images/carousel-icon-03.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="flex flex-col grow">
                      <div class="mb-1 text-lg font-bold">On-premise ready</div>
                      <div class="mb-3 text-slate-400">
                        Self-host Hoppscotch on your own infrastructure.
                      </div>
                    </div>
                    <div>
                      <RouterLink
                        class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-200 hover:text-white group"
                        to="/"
                      >
                        Learn More
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
                v-motion-fade
                class="h-auto swiper-slide group/slide"
                :delay="400"
              >
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <ClientOnly>
                    <Particles
                      class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                      :quantity="3"
                      :refresh="swiperInitialized"
                    />
                  </ClientOnly>
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
                      class="mb-3"
                      src="/images/carousel-icon-04.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="flex flex-col grow">
                      <div class="mb-1 text-lg font-bold">
                        Progressive Profiling
                      </div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div>
                      <RouterLink
                        class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-200 hover:text-white group"
                        to="/"
                      >
                        Learn More
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
                v-motion-fade
                class="h-auto swiper-slide group/slide"
                :delay="500"
              >
                <div
                  class="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <ClientOnly>
                    <Particles
                      class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500"
                      :quantity="3"
                      :refresh="swiperInitialized"
                    />
                  </ClientOnly>
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
                      class="mb-3"
                      src="/images/carousel-icon-05.svg"
                      width="56"
                      height="56"
                      alt="Icon 05"
                    />
                    <div class="flex flex-col grow">
                      <div class="mb-1 text-lg font-bold">Secure Access</div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div>
                      <RouterLink
                        class="inline-flex items-center px-2 py-1 text-sm rounded-full transition text-slate-200 hover:text-white group"
                        to="/"
                      >
                        Learn More
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
    </div>
  </section>
</template>
