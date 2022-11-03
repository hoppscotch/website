<script setup lang="ts">
import { banners } from '~/assets/data/platformBanners'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative">
      <div class="absolute inset-0 flex items-center justify-center z-5">
        <span class="shadow-xl rounded-2xl">
          <img
            src="/assets/images/logo.svg"
            :alt="t('logo')"
            class="w-32 h-32 shadow-2xl rounded-2xl"
          >
        </span>
      </div>
      <div class="space-y-8">
        <div
          class="relative grid w-full h-auto overflow-hidden place-items-center slider"
        >
          <div class="w-full space-x-8 slide-track1">
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
          </div>
        </div>
        <div class="relative grid w-full h-auto overflow-hidden place-items-center slider">
          <div class="w-full space-x-8 slide-track2">
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
          </div>
        </div>
        <div
          class="relative grid w-full h-auto overflow-hidden place-items-center slider"
        >
          <div class="w-full space-x-8 slide-track3">
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
          </div>
        </div>
        <div class="relative grid w-full h-auto overflow-hidden place-items-center slider">
          <div class="w-full space-x-8 slide-track4">
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
            <!-- same 10 slides doubled (duplicate) -->
            <div
              v-for="(banner, index) in banners"
              :key="`banner-${index}`"
              class="inline-flex items-center justify-center rounded-xl bg-primaryLight"
            >
              <component :is="banner.icon" class="w-8 h-8 m-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider::before,
.slider::after{
  position:absolute;
  background-image: linear-gradient(to right, var(--color-primary) 0%, rgba(255,255,255,0) 100%);
  content: '';
  height: 100%;
  width: 128px;
  z-index: 2;
  pointer-events: none;
}
.slider::before{
  left:0;
  top:0;
}
.slider::after{
  right:0;
  top:0;
  transform:rotateZ(180deg);
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
