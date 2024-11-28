<template>
  <div class="relative">
    <div v-for="index in 15" :key="index" :class="`meteor-${index}`" />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:math";

$n: 3; // number of meteors
@for $i from 1 through $n {
  $v: calc(math.random(100)); // left
  $h: calc(math.random(250)); // top
  $d: calc(math.random(80) / 20 + 10); // seconds
  .meteor-#{$i} {
    @apply absolute;
    @apply w-64;
    @apply h-0.5;
    @apply bg-gradient-to-r;
    @apply from-zinc-50;
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
    @apply before:bg-zinc-50;
    @apply before:z-10;
  }
}
@keyframes meteor {
  0% {
    opacity: 1;
    margin-top: -12rem;
    margin-right: -12rem;
  }
  12% {
    opacity: 0;
  }
  15% {
    opacity: 0;
    margin-top: 12rem;
    margin-left: -512px;
  }
  100% {
    opacity: 0;
  }
}
</style>
