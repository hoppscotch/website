<script setup>
  import { register } from "swiper/element/bundle"
  register()
</script>

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-5xl px-4 mx-auto sm:px-6">
        <ClientOnly>
          <Particles class="absolute inset-0 -z-10" :quantity="5" />
        </ClientOnly>
      </div>
      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
          <swiper-container
            :slides-per-view="'auto'"
            :space-between="64"
            :loop="true"
            :speed="5000"
            :autoplay-delay="0"
            :autoplay-disable-on-interaction="false"
            class="before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
          >
            <!-- Carousel items -->
            <swiper-slide v-for="index in 12" :key="index" class="w-24 my-auto">
              <img
                loading="lazy"
                :src="`/images/client-${String(index).padStart(2, '0')}.svg`"
                :alt="`Client ${index}`"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </section>
</template>
