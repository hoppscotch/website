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
          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Download
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Take Hoppscotch with you
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Download Hoppscotch for your platform — Web, macOS, Windows, Linux,
            or CLI.
          </p>
        </div>
        <!-- Platform download -->
        <div data-aos="fade-down">
          <Highlighter class="group">
            <HighlighterItem>
              <div
                class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden"
              >
                <!-- Radial gradient -->
                <div
                  class="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                  aria-hidden="true"
                >
                  <div
                    class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]"
                  ></div>
                </div>
                <img
                  src="../images/feature-image-04.png"
                  width="768"
                  height="400"
                  alt="Feature 04"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center p-8 md:items-end md:justify-end"
                >
                  <RouterLink
                    class="shadow-xl transition duration-200 ease-in-out btn text-slate-900 backdrop-blur bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                    to="/download"
                  >
                    Download
                    <span
                      class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out ml-1"
                    >
                      <icon-lucide-arrow-right />
                    </span>
                  </RouterLink>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue"
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
</script>
