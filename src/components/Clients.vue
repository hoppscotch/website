<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl px-4 mx-auto sm:px-6">
        <Particles class="absolute inset-0 -z-10" :quantity="5" />
      </div>
      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
          <div
            class="relative clients-carousel swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
          >
            <div
              class="swiper-wrapper flex flex-nowrap !ease-linear select-none items-center"
            >
              <!-- Carousel items -->
              <div class="swiper-slide !w-auto">
                <img src="/images/client-01.svg" alt="Client 01" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-02.svg" alt="Client 02" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-03.svg" alt="Client 03" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-04.svg" alt="Client 04" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-05.svg" alt="Client 05" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-06.svg" alt="Client 06" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-07.svg" alt="Client 07" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-08.svg" alt="Client 08" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-09.svg" alt="Client 09" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-10.svg" alt="Client 10" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-11.svg" alt="Client 11" class="w-24" />
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-12.svg" alt="Client 12" class="w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from "vue"
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
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  })
})
</script>
