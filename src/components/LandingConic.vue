<template>
  <div class="flex flex-col px-8 py-16">
    <AnimatedComponent
      animation-type="zoom"
      :threshold="0.1"
      class="overflow-x-visible overflow-y-clip"
    >
      <div class="conic-divider1">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
      <div class="conic-divider2">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
    </AnimatedComponent>
  </div>
</template>

<style lang="scss" scoped>
.conic-divider1 {
  @apply w-screen;
  margin-top: -50vw;
  margin-left: calc(-50vw + 50%);
}

.conic-divider2 {
  @apply w-screen;
  margin-bottom: -50vw;
  margin-left: calc(-50vw + 50%);
  transform: rotate(180deg);
}

.grad1 {
  width: 50vw;
  height: 100vw;
  background-image: conic-gradient(
    from 270deg at 30% 50%,
    transparent,
    transparent,
    var(--color-dividerLight)
  );
  transform: scaleX(-1);
}

.grad2 {
  width: 50vw;
  height: 100vw;
  background-image: conic-gradient(
    from 270deg at 30% 50%,
    transparent,
    transparent,
    var(--color-dividerLight)
  );
}
</style>
