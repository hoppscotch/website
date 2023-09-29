<template>
  <div class="relative">
    <div v-for="index in 15" :key="index" :class="`meteor-${index}`" />
  </div>
</template>

<style lang="scss" scoped>
  $n: 6; // number of meteors
  @for $i from 1 through $n {
    $v: calc(random(100)); // left
    $h: calc(random(250)); // top
    $d: calc(random(80) / 20 + 10); // seconds
    .meteor-#{$i} {
      @apply absolute;
      @apply w-64;
      @apply h-0.5;
      @apply bg-gradient-to-r;
      @apply from-violet-400;
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
      @apply before:bg-violet-400;
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
