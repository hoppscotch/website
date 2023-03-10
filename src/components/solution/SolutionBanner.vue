<script setup lang="ts">
import { banners } from "~/assets/data/solutionBanners"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative">
      <div class="absolute inset-0 flex items-center justify-center z-5">
        <span class="rounded-lg shadow-xl">
          <img
            src="/assets/images/logo.svg"
            :alt="t('logo')"
            class="w-32 h-32 rounded-lg shadow-2xl"
          />
        </span>
      </div>
      <div
        class="relative w-full h-auto overflow-hidden grid place-items-center slider"
      >
        <div class="w-full py-4 space-x-8 slide-track1">
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-auto overflow-hidden grid place-items-center slider"
      >
        <div class="w-full py-4 space-x-8 slide-track2">
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-auto overflow-hidden grid place-items-center slider"
      >
        <div class="w-full py-4 space-x-8 slide-track3">
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-auto overflow-hidden grid place-items-center slider"
      >
        <div class="w-full py-4 space-x-8 slide-track4">
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
          <!-- same 10 slides doubled (duplicate) -->
          <div
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="inline-flex items-center justify-center rounded-lg shadow-md bg-primaryLight"
          >
            <component :is="banner.icon" class="w-8 h-8 m-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider::before,
.slider::after {
  @apply transition;
  @apply absolute;
  @apply content-DEFAULT;
  @apply h-full;
  @apply w-32;
  @apply z-2;
  @apply pointer-events-none;

  background-image: linear-gradient(
    to right,
    var(--color-primary) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.slider::before {
  @apply left-0;
  @apply top-0;
}
.slider::after {
  @apply right-0;
  @apply top-0;

  transform: rotateZ(180deg);
}

.slide-track1 {
  display: flex;
  animation: scroll 18s linear infinite;
  justify-content: space-between;
}

.slide-track2 {
  display: flex;
  animation: scroll 16s linear infinite;
  justify-content: space-between;
}

.slide-track3 {
  display: flex;
  animation: scroll 20s linear infinite;
  justify-content: space-between;
}

.slide-track4 {
  display: flex;
  animation: scroll 19s linear infinite;
  justify-content: space-between;
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-96px * 15));
  }
}
</style>
