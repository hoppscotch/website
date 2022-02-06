<script setup lang="ts">
import { contributors } from '~/assets/data/landingContributors'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h2
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center text-secondaryDark transition md:text-4xl lg:text-5xl"
      >
        {{ t("home.contributors.title") }}
      </h2>
      <p class="max-w-md mt-4 mb-16 text-lg text-center md:w-3/5">
        {{ t("home.contributors.description") }}
      </p>
    </div>
    <div
      class="flex items-center justify-between w-full overflow-hidden"
    >
      <div class="flex w-full h-full mx-auto">
        <div class="grid gap-4 grid-cols-5 md:grid-cols-8 lg:grid-cols-10">
          <a
            v-for="(contributor, index) in contributors"
            :key="index"
            :href="`https://github.com/${contributor.username}`"
            class="inline-flex flex-col items-center justify-center p-3"
          >
            <img
              :src="contributor.image"
              :username="contributor.username"
              loading="lazy"
              class="object-cover rounded-full shadow-inner ring-accentDark transition contributor-bubble hover:ring-3"
              :class="`contributor-bubble-${index+1}`"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//random animation movement with index
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));
  @return $randomNum;
}

$CIRCLE_COUNT:40;

@for $i from 1 through $CIRCLE_COUNT {
  .contributor-bubble-#{$i} {
    animation: randomBubbleMovement 10s #{randomNum(1, 10)}s ease-in-out infinite alternate;
  }
}

@keyframes randomBubbleMovement {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(8px, 8px) rotate(1deg);
  }
  40% {
    transform: translate(12px, 12px) rotate(2deg);
  }
  60% {
    transform: translate(16px, 16px) rotate(3deg);
  }
  80% {
    transform: translate(12px, 12px) rotate(2deg);
  }
  80% {
    transform: translate(8px, 8px) rotate(1deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}

.contributor-bubble:hover{
  animation-play-state: paused;
}
</style>
