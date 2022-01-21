<script setup lang="ts">
import { contributors } from '~/assets/data/LandingContributors'
const { t } = useI18n()


// Number of circles we are trying to fit (not guaranteed if we don't have space)
const CIRCLE_COUNT = contributors.length;
// Size of the biggest allowed circle
const MAX_CIRCLE_SIZE = window.innerWidth > 900 ? 90 : 50;
// Size of the smallest allowed circle
const MIN_CIRCLE_SIZE = window.innerWidth > 900 ? 40 : 20;
// How relatively sized sizes should be
// Keep this greater than one
// Bigger values mean more strong drop-off in size
const SIZE_FACTOR = 1.001;
// Template Ref
const parent = ref(null);
// Square
const sqr = (x) => x * x;
// Euclidean Distance
const distance = (x1, y1, x2, y2) => Math.sqrt(sqr(x2 - x1) + sqr(y2 - y1));
// Check if there is an overlap
const hasOverlap = (currentCircles, cx, cy, cr) =>
  currentCircles.findIndex(({ x, y, r }) => distance(x, y, cx, cy) < r + cr) !==
  -1;
// Checks if the circle is outside the bounding box
const isOutsideBox = (bWidth, bHeight, cx, cy, cr) =>
  cx - cr < 0 || cx + cr > bWidth || cy - cr < 0 || cy + cr > bHeight;
// Gets the maximum size a circle at this position in the current state can take
// The size is not exact, we start with the maximum size, and then tone down by SIZE_FACTOR
// -1 means the position itself is invalid and can't even fit the minimum
const getMaximumCircleSize = (currentCircles, bWidth, bHeight, cx, cy) => {
  if (cx < MIN_CIRCLE_SIZE || cy < MIN_CIRCLE_SIZE) return -1;

  let decidedSize = MAX_CIRCLE_SIZE;
  while (
    (hasOverlap(currentCircles, cx, cy, decidedSize) ||
      isOutsideBox(bWidth, bHeight, cx, cy, decidedSize)) &&
    decidedSize > MIN_CIRCLE_SIZE
  )
    decidedSize /= SIZE_FACTOR;
  if (decidedSize < MIN_CIRCLE_SIZE) return -1;
  return decidedSize;
};
const random = (min, max) => Math.random() * (max - min) + min;
const circles = computed(() => {
  if (!parent.value) return;
  const bWidth = parent.value.clientWidth;
  const bHeight = parent.value.clientHeight;
  const result = [];
  for (let i = 0; i < CIRCLE_COUNT; i++) {
    // If we couldn't fit in a circle in 1000 tries, it may just not be possible and hence we stop adding circles
    let attempt = 0;
    let pX = random(MIN_CIRCLE_SIZE, bWidth - MIN_CIRCLE_SIZE);
    let pY = random(MIN_CIRCLE_SIZE, bHeight - MIN_CIRCLE_SIZE);
    let size = getMaximumCircleSize(result, bWidth, bHeight, pX, pY);
    while (size === -1 && attempt < 1000) {
      attempt++;
      pX = random(MIN_CIRCLE_SIZE, bWidth - MIN_CIRCLE_SIZE);
      pY = random(MIN_CIRCLE_SIZE, bHeight - MIN_CIRCLE_SIZE);
      size = getMaximumCircleSize(result, bWidth, bHeight, pX, pY);
    }
    if (attempt >= 1000) break;
    result.push({
      x: pX,
      y: pY,
      r: random(MIN_CIRCLE_SIZE, size),
    });
  }
  return result;
});
</script>

<template>
  <div class="px-2 py-5 md:py-16">
    <div
      class="h-min-100vh md:h-min-90vh relative w-full flex items-center justify-between overflow-hidden"
    >
      <div
        class="flex flex-col items-center justify-center mx-auto 50vw md:w-25vw h-50vh xl:h-min-33vh relative py-6 px-5 md:p-5 z-2"
      >
        <h2
          class="max-w-xl my-4 text-4xl font-bold leading-tight tracking-tight text-center text-secondaryDark"
        >{{ t("home.contributors.title") }}</h2>
        <p
          class="my-2 text-sm font-semibold tracking-widest text-center uppercase text-accent"
        >{{ t("home.contributors.description") }}</p>
      </div>
      <div class="absolute h-full w-full mx-auto">
        <div ref="parent" class="relative h-full w-full">
         <a  v-for="(circle, index) in circles"
            :key="index"
            :href="contributors[index]?.link"
            >
            <img
            :src="contributors[index]?.image"
            :username="contributors[index]?.username"
            loading="lazy"
            class="contributor-bubble absolute rounded-full object-cover "
            :class="`contributor-bubble-${index+1}`" 
            :style="{
              width: `${circle.r * 2}px`,
              height: `${circle.r * 2}px`,
              top: `${circle.y - circle.r}px`,
              left: `${circle.x - circle.r}px`,
            }"
          />
         </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//random animation movement with index
$CIRCLE-COUNT:50;
@for $i from 1 through $CIRCLE_COUNT {
  .contributor-bubble-#{$i} {
    animation: randomBubbleMovement 10s #{$i * 1.5}s ease-in-out infinite alternate;
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