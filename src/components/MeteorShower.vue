<template>
  <div class="relative">
    <div v-for="index in 15" :key="index" :class="`meteor-${index}`"></div>
  </div>
</template>

<style lang="scss" scoped>
$n: 15; // number of meteors
@for $i from 1 through $n {
  $v: calc(random(90) + 9); // left
  $h: calc(random(250) + 50); // top
  $d: calc(random(70) / 10 + 6); // seconds
  .meteor-#{$i} {
    @apply absolute;
    @apply w-64;
    @apply h-0.5;
    @apply bg-gradient-to-r;
    @apply from-white/50;
    @apply to-transparent;
    @apply transform;
    @apply -rotate-45;
    top: $h + px;
    left: $v * 1%;
    animation: meteor $d + s linear infinite;
    @apply before:content-[''];
    @apply before:absolute;
    @apply before:w-0.5;
    @apply before:h-0.5;
    @apply before:rounded-full;
    @apply before:bg-white/90;
  }
}
@keyframes meteor {
  0% {
    @apply opacity-100;
    @apply -mt-64;
    @apply -mr-64;
  }
  12% {
    @apply opacity-0;
  }
  15% {
    @apply opacity-0;
    @apply mt-64;
    margin-left: -512px;
  }
  100% {
    @apply opacity-0;
  }
}
</style>
