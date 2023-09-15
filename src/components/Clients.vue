<script setup lang="ts">
  // Import Swiper
  import Swiper, { Autoplay } from "swiper"
  import "swiper/css"

  Swiper.use([Autoplay])
  onMounted(() => {
    new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    })
  })
</script>

<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl px-4 mx-auto sm:px-6">
        <ClientOnly>
          <Particles class="absolute inset-0 -z-10" :quantity="5" />
        </ClientOnly>
      </div>
      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
          <div
            class="relative clients-carousel swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="swiper-wrapper !ease-linear select-none items-center">
              <!-- Carousel items -->
              <div
                v-for="index in 12"
                :key="index"
                class="swiper-slide !w-auto"
              >
                <img
                  :src="`/images/client-${String(index).padStart(2, '0')}.svg`"
                  :alt="`Client ${index}`"
                  class="w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
