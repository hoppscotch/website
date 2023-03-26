<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { testimonials } from "~/assets/data/landingTestimonials"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl text-4xl tracking-tighter text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-5xl lg:text-6xl !leading-[initial]"
        :class="gradients.gray"
      >
        {{ t("home.testimonials.title") }}
      </div>
    </div>
    <div class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(testimonialBlock, testimonialBlockIndex) in testimonials"
        :key="`testimonial-${testimonialBlockIndex}`"
        class="flex flex-col flex-1 grid grid-cols-1 gap-4"
        :class="{
          'hidden lg:flex': testimonialBlockIndex === 2,
        }"
      >
        <a
          v-for="(testimonial, index) in testimonialBlock"
          :key="`testimonial-${index}`"
          :href="testimonial.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col w-full p-8 bg-primary transition rounded-lg border border-divider hover:border-dividerDark transition bg-primaryLigh transition group"
        >
          <div class="flex items-center w-full mb-4">
            <img
              :src="testimonial.picture"
              :alt="testimonial.username"
              class="flex flex-shrink-0 w-10 h-10 rounded-full shadow-inner transition bg-primaryDark"
            />
            <div class="flex-grow pl-4">
              <div class="flex items-center justify-between">
                <h6 class="font-bold text-secondaryDark">
                  {{ testimonial.author }}
                </h6>
                <component :is="testimonial.icon" />
              </div>
              <span class="text-secondaryLight">{{
                testimonial.username
              }}</span>
            </div>
          </div>
          <div
            class="w-full transition text-secondaryLight group-hover:text-secondary"
          >
            {{ testimonial.text }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
