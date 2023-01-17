<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative overflow-x-visible overflow-y-clip">
      <div class="conic-divider1">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
      <div class="absolute inset-0 z-1">
        <div class="flex flex-col px-8 pt-32 pb-16">
          <div class="flex flex-col items-center">
            <h1
              class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
            >
              {{ t("home.platforms.title") }}
            </h1>
            <p
              class="max-w-md my-4 text-2xl tracking-tighter text-center md:w-2/3"
            >
              {{ t("home.platforms.description") }}
            </p>
          </div>
        </div>
        <div
          class="relative flex max-w-6xl mx-auto md:rounded-lg h-256 lg:h-128"
        >
          <div
        class="flex grid flex-1 grid-cols-6 grid-rows-10 gap-2"
          >
            <div class="flex flex-1 row-span-2 col-span-6 lg:col-span-2 lg:row-span-10 border rounded border-dividerLight">1</div>
            <div class="flex flex-1 row-span-2 col-span-6 lg:col-span-2 lg:row-span-5 border rounded border-dividerLight">2</div>
            <div class="flex flex-1 row-span-2 col-span-6 lg:col-span-2 lg:row-span-5 border rounded border-dividerLight">3</div>
            <div class="flex flex-1 row-span-2 col-span-6 lg:col-span-2 lg:row-span-5 border rounded border-dividerLight">4</div>
            <div class="flex flex-1 row-span-2 col-span-6 lg:col-span-2 lg:row-span-5 border rounded border-dividerLight">5</div>
          </div>
        </div>
      </div>
      <div class="conic-divider2">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conic-divider1 {
  @apply w-screen;
  @apply -mt-200 lg:-mt-128;
  margin-left: calc(-50vw + 50%);
}

.conic-divider2 {
  @apply w-screen;
  @apply -mb-200 lg:-mb-128;
  margin-left: calc(-50vw + 50%);
  transform: rotate(180deg);
}

.grad1 {
  width: 50vw;
  @apply h-400 lg:h-256;
  background-image: conic-gradient(
    from 270deg at 25% 50%,
    transparent,
    transparent,
    var(--color-dividerLight)
  );
  transform: scaleX(-1);
}

.grad2 {
  width: 50vw;
  @apply h-400 lg:h-256;
  background-image: conic-gradient(
    from 270deg at 25% 50%,
    transparent,
    transparent,
    var(--color-dividerLight)
  );
}
</style>
