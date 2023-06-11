<template>
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-12 md:pt-20">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
            >
              The security first platform
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
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
        <!-- * Custom styles in src/css/additional-styles/theme.scss -->
        <div
          class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%"
        >
          <div class="testimonials-carousel swiper-container group">
            <Highlighter
              class="swiper-wrapper w-fit"
              :refresh="swiperInitialized"
            >
              <!-- Carousel items -->
              <HighlighterItem class="h-auto swiper-slide group/slide">
                <div
                  class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <Particles
                    class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                    :quantity="3"
                    :refresh="swiperInitialized"
                  />
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"
                    ></div>
                  </div>
                  <div class="flex flex-col h-full p-6">
                    <img
                      class="mb-3"
                      src="../images/carousel-icon-01.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="grow">
                      <div class="mb-1 text-lg font-bold">Anonymous User</div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div class="text-right">
                      <a
                        class="inline-flex items-center px-2 text-sm font-medium rounded-full transition duration-150 ease-in-out text-slate-300 hover:text-white group"
                        href="#0"
                        >Learn More
                        <span
                          class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >
                          <icon-lucide-arrow-right />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="h-auto swiper-slide group/slide">
                <div
                  class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <Particles
                    class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                    :quantity="3"
                    :refresh="swiperInitialized"
                  />
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"
                    ></div>
                  </div>
                  <div class="flex flex-col h-full p-6">
                    <img
                      class="mb-3"
                      src="../images/carousel-icon-02.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="grow">
                      <div class="mb-1 text-lg font-bold">Bot Detection</div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div class="text-right">
                      <a
                        class="inline-flex items-center px-2 text-sm font-medium rounded-full transition duration-150 ease-in-out text-slate-300 hover:text-white group"
                        href="#0"
                        >Learn More
                        <span
                          class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >
                          <icon-lucide-arrow-right />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="h-auto swiper-slide group/slide">
                <div
                  class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <Particles
                    class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                    :quantity="3"
                    :refresh="swiperInitialized"
                  />
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"
                    ></div>
                  </div>
                  <div class="flex flex-col h-full p-6">
                    <img
                      class="mb-3"
                      src="../images/carousel-icon-03.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="grow">
                      <div class="mb-1 text-lg font-bold">
                        Social integrations
                      </div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div class="text-right">
                      <a
                        class="inline-flex items-center px-2 text-sm font-medium rounded-full transition duration-150 ease-in-out text-slate-300 hover:text-white group"
                        href="#0"
                        >Learn More
                        <span
                          class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >
                          <icon-lucide-arrow-right />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="h-auto swiper-slide group/slide">
                <div
                  class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <Particles
                    class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                    :quantity="3"
                    :refresh="swiperInitialized"
                  />
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"
                    ></div>
                  </div>
                  <div class="flex flex-col h-full p-6">
                    <img
                      class="mb-3"
                      src="../images/carousel-icon-04.svg"
                      width="56"
                      height="56"
                      alt="Icon 01"
                    />
                    <div class="grow">
                      <div class="mb-1 text-lg font-bold">
                        Progressive Profiling
                      </div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div class="text-right">
                      <a
                        class="inline-flex items-center px-2 text-sm font-medium rounded-full transition duration-150 ease-in-out text-slate-300 hover:text-white group"
                        href="#0"
                        >Learn More
                        <span
                          class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >
                          <icon-lucide-arrow-right />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem class="h-auto swiper-slide group/slide">
                <div
                  class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
                >
                  <!-- Particles animation -->
                  <Particles
                    class="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                    :quantity="3"
                    :refresh="swiperInitialized"
                  />
                  <!-- Radial gradient -->
                  <div
                    class="absolute bottom-0 w-1/3 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div
                      class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]"
                    ></div>
                  </div>
                  <div class="flex flex-col h-full p-6">
                    <img
                      class="mb-3"
                      src="../images/carousel-icon-05.svg"
                      width="56"
                      height="56"
                      alt="Icon 05"
                    />
                    <div class="grow">
                      <div class="mb-1 text-lg font-bold">Secure Access</div>
                      <div class="mb-3 text-slate-400">
                        Incorporate rich user profiling, and facilitate more
                        transactions.
                      </div>
                    </div>
                    <div class="text-right">
                      <a
                        class="inline-flex items-center px-2 text-sm font-medium rounded-full transition duration-150 ease-in-out text-slate-300 hover:text-white group"
                        href="#0"
                        >Learn More
                        <span
                          class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >
                          <icon-lucide-arrow-right />
                        </span>
                      </a>
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
              class="w-4 h-4 transition duration-150 ease-in-out fill-slate-500 group-hover:fill-purple-500"
            />
          </button>
          <button
            class="relative z-20 flex items-center justify-center w-12 h-12 rounded-full carousel-next group"
          >
            <span class="sr-only">Next</span>
            <icon-lucide-arrow-right
              class="w-4 h-4 transition duration-150 ease-in-out fill-slate-500 group-hover:fill-purple-500"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue"
import Particles from "./Particles.vue"
import Highlighter from "./Highlighter.vue"
import HighlighterItem from "./HighlighterItem.vue"

// Import Swiper
import Swiper, { Navigation } from "swiper"
import "swiper/css"
Swiper.use([Navigation])

export default {
  name: "TestimonialsCarousel",
  components: {
    Particles,
    Highlighter,
    HighlighterItem,
  },
  setup() {
    const swiperInitialized = ref(false)

    onMounted(() => {
      const carousel = new Swiper(".testimonials-carousel", {
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
        loop: false,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 24,
        navigation: {
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        },
      })
      swiperInitialized.value = true
    })

    return {
      swiperInitialized,
    }
  },
}
</script>
