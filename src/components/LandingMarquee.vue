<template>
  <div class="flex flex-col px-8 py-16">
    <div class="marquee">
      <div class="marquee-group">
        <p><CircleText /></p>
        <p aria-hidden="true"><CircleText /></p>
        <p aria-hidden="true"><CircleText /></p>
        <p aria-hidden="true"><CircleText /></p>
        <p aria-hidden="true"><CircleText /></p>
        <p aria-hidden="true"><CircleText /></p>
        <p aria-hidden="true"><CircleText /></p>
      </div>
      <div aria-hidden="true" class="marquee-group">
        <p><CircleText /></p>
        <p><CircleText /></p>
        <p><CircleText /></p>
        <p><CircleText /></p>
        <p><CircleText /></p>
        <p><CircleText /></p>
        <p><CircleText /></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marquee {
  @apply flex;
  @apply border-y-8;
  @apply border-accentLight;
  @apply w-screen;
  @apply select-none;

  --space: 2rem;
  --duration: 16s;
  --gap: var(--space);

  margin-left: calc(-50vw + 50%);
  gap: var(--gap);
  // transform: skewY(-3deg);

  &:hover {
    .marquee-group {
      animation-play-state: paused;
    }
  }
}

.marquee-group {
  @apply flex;
  @apply flex-shrink-0;
  @apply items-center;
  @apply justify-around;
  @apply min-w-full;

  gap: var(--gap);
  animation: marquee-scroll var(--duration) linear infinite;
}

.marquee-reverse .marquee-group {
  animation-direction: reverse;
  animation-delay: calc(var(--duration) / -2);
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
