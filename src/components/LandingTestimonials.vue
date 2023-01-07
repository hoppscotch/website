<script setup lang="ts">
import { testimonials } from "~/assets/data/landingTestimonials"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="flex flex-col items-center">
      <h1
        class="my-4 text-center text-secondaryDark leading-none tracking-tighter max-w-2xl transition text-3xl md:text-4xl lg:text-5xl"
      >
        {{ t("home.testimonials.title") }}
      </h1>
    </div>
    <div class="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(testimonialBlock, testimonialBlockIndex) in testimonials"
        :key="`testimonial-${testimonialBlockIndex}`"
        class="flex flex-col flex-1 grid gap-4 grid-cols-1"
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
          class="bg-primaryLight rounded-lg flex flex-col shadow w-full p-8 transition group hover:shadow-md"
        >
          <div class="flex mb-4 w-full items-center">
            <img
              :src="testimonial.picture"
              :alt="testimonial.username"
              class="bg-primaryDark rounded-full flex flex-shrink-0 h-10 shadow-inner transition w-10"
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
          <p
            class="text-secondary w-full transition group-hover:text-secondaryDark"
          >
            {{ testimonial.text }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
