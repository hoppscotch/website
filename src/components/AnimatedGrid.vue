<template>
  <div
    class="absolute inset-0 flex items-center justify-center border-y border-dividerLight -z-1 animated-grid"
  ></div>
</template>

<style lang="scss" scoped>
.animated-grid {
  @apply w-screen;

  margin-left: calc(-50vw + 50%);
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 15, 248, 0.1) 25%,
      rgba(255, 15, 248, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 15, 248, 0.1) 75%,
      rgba(255, 15, 248, 0.1) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 15, 248, 0.1) 25%,
      rgba(255, 15, 248, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 15, 248, 0.1) 75%,
      rgba(255, 15, 248, 0.1) 76%,
      transparent 77%,
      transparent
    );
  background-size: 2rem 2rem;
  animation: 16s infinite linear moving_grid;
}

.animated-grid:after {
  @apply content-DEFAULT;
  @apply absolute;
  @apply w-full;
  @apply h-full;
  @apply opacity-50;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 135, 252, 0) 45%,
    rgba(255, 255, 255, 0) 100%
  );
}

@keyframes moving_grid {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}
</style>
