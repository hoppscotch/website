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
  @apply border-y-2;
  @apply border-accentLight;
  @apply py-4;

  margin-left: calc(-50vw + 50%);
  width: 100vw;

  --space: 2rem;
  --duration: 16s;
  --gap: var(--space);

  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  transform: skewY(-3deg);

  &:hover {
    .marquee-group {
      animation-play-state: paused;
    }
  }
}
.marquee-group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
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
