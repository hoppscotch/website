<template>
  <div class="relative">
    <div v-for="index in 15" :key="index" :class="`meteor-${index}`"></div>
  </div>
</template>

<style lang="scss" scoped>
$n: 15; // number of meteors
$s: 300; // number of stars
@for $i from 1 through $n {
  $v: calc(random(90) + 9); // left
  $h: calc(random(250) + 50); // top
  $d: calc(random(70) / 10 + 3); // seconds
  .meteor-#{$i} {
    @apply absolute;
    @apply w-64;
    @apply h-px;
    top: $h + px;
    left: $v * 1%;
    transform: rotate(-45deg);
    background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
    animation: meteor $d + s linear infinite;
    &:before {
      content: "";
      @apply absolute;
      @apply w-1;
      @apply h-1;
      @apply rounded-full;
      @apply bg-white/70;
      margin-top: -2px;
      box-shadow: 0 0 15px 3px #fff;
    }
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
    @apply mt-64;
    margin-left: -512px;
    @apply opacity-0;
  }
  100% {
    @apply opacity-0;
  }
}
</style>
