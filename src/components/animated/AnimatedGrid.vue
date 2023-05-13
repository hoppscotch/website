<template>
  <div
    class="absolute bg-primary inset-0 flex items-center justify-center border-y border-dividerLight -z-1 full-width animated-grid"
  ></div>
</template>

<style lang="scss" scoped>
.animated-grid {
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(0, 172, 238, 0.1) 25%,
      rgba(0, 172, 238, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 172, 238, 0.1) 75%,
      rgba(0, 172, 238, 0.1) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(0, 172, 238, 0.1) 25%,
      rgba(0, 172, 238, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 172, 238, 0.1) 75%,
      rgba(0, 172, 238, 0.1) 76%,
      transparent 77%,
      transparent
    );
  background-size: 3rem 3rem;
  animation: 32s infinite linear moving_grid;
}

@keyframes moving_grid {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
}
</style>
