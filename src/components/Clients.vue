<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-5xl px-4 mx-auto sm:px-6">
        <ClientOnly>
          <Particles class="absolute inset-0 -z-10" :quantity="5" />
        </ClientOnly>
      </div>
      <div class="py-12 md:py-16">
        <div
          class="items-center max-w-xs mx-auto mb-16 -mt-16 text-center text-neutral-400"
        >
          Join the developers and engineers from startups to enterprises who
          trust us.
        </div>
        <div
          class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul class="flex items-center justify-center animate-infinite-scroll">
            <img
              v-for="index in 12"
              :key="index"
              class="w-24 mx-8 my-auto max-w-none"
              loading="lazy"
              :src="`/images/client-${String(index).padStart(2, '0')}.svg`"
              :alt="`Client ${index}`"
            />
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start animate-infinite-scroll"
            aria-hidden="true"
          >
            <img
              v-for="index in 12"
              :key="index"
              class="w-24 mx-8 my-auto max-w-none"
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
