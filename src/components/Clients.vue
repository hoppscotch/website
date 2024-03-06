<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <!-- Particles animation -->
      <div class="absolute inset-0 mx-auto max-w-5xl px-4 sm:px-6">
        <ClientOnly>
          <Particles class="absolute inset-0 -z-10" :quantity="5" />
        </ClientOnly>
      </div>
      <div class="py-12 md:py-16">
        <div
          class="mx-auto -mt-16 mb-16 max-w-xs items-center text-center text-zinc-400"
        >
          Join the developers and engineers from startups to enterprises who
          trust us.
        </div>
        <div
          class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul class="flex animate-infinite-scroll items-center justify-center">
            <img
              v-for="index in 12"
              :key="index"
              class="mx-8 my-auto w-24 max-w-none"
              loading="lazy"
              :src="`/images/client-${String(index).padStart(2, '0')}.svg`"
              :alt="`Client ${index}`"
            />
          </ul>
          <ul
            class="flex animate-infinite-scroll items-center justify-center md:justify-start"
            aria-hidden="true"
          >
            <img
              v-for="index in 12"
              :key="index"
              class="mx-8 my-auto w-24 max-w-none"
              loading="lazy"
              :src="`/images/client-${String(index).padStart(2, '0')}.svg`"
              :alt="`Client ${index}`"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
