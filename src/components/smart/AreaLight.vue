<template>
  <div class="relative mt-16">
    <div
      class="absolute inset-0 flex items-center justify-center -z-1 full-width animated-grid"
    >
      <div class="arealight w-full h-screen"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arealight {
  background-image: conic-gradient(
      from 90deg at 70% 50%,
      var(--color-primary),
      var(--color)
    ),
    conic-gradient(from 270deg at 30% 50%, var(--color), var(--color-primary));
  -webkit-mask-image: radial-gradient(
    100% 50% at center center,
    black,
    transparent
  );
  background-position-x: 0%, 100%;
  background-position-y: 0%, 0%;
  background-size: 50% 100%, 50% 100%;
  transform: rotate(180deg) translate3d(0, 0, 0);
  transform-origin: center center;
  background-repeat: no-repeat;
}
</style>
