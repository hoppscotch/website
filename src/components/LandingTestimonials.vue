<script setup lang="ts">
import { testimonials } from '~/assets/data/landingTestimonials'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("home.testimonials.title") }}
      </h1>
    </div>
    <div class="flex flex-wrap mt-8">
      <div
        v-for="(testimonialBlock, testimonialBlockIndex) in testimonials" :key="`testimonial-${testimonialBlockIndex}`" class="flex flex-col w-full px-2 md:w-1/2 lg:w-1/3"
        :class="{
          'hidden lg:flex': testimonialBlockIndex === 2
        }"
      >
        <a
          v-for="(testimonial, index) in testimonialBlock" :key="`testimonial-${index}`"
          :href="testimonial.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col w-full p-4 mb-4 rounded-lg shadow bg-primaryLight transition group hover:shadow-md"
        >
          <div class="flex items-center w-full mb-4">
            <img :src="testimonial.picture" :alt="testimonial.username" class="w-10 h-10 rounded-full shadow-inner bg-primaryDark transition">
            <div class="flex-grow pl-4">
              <h6 class="font-bold text-secondaryDark">
                {{ testimonial.author }}
              </h6>
              <span class="text-xs text-secondaryLight">{{ testimonial.username }}</span>
            </div>
            <component :is="testimonial.icon" />
          </div>
          <p class="w-full text-xs text-secondary transition group-hover:text-secondaryDark">
            {{ testimonial.text }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
