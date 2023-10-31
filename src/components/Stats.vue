<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="py-10">
        <svg
          preserveAspectRatio="xMinYMin"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46 16"
          class="relative z-10"
        >
          <text
            xmlns="http://www.w3.org/2000/svg"
            x="50%"
            y="50%"
            fill="transparent"
            dominant-baseline="central"
            font-weight="bold"
            text-anchor="middle"
            text-rendering="geometricPrecision"
            stroke-width=".05"
            paint-order="stroke"
            class="stroke-neutral-400/20 fill-neutral-500/5"
          >
            800K
          </text>
        </svg>
        <div class="absolute inset-0 z-20 flex items-center justify-center">
          <p
            v-motion-fade-visible-once
            class="max-w-xl font-semibold tracking-tight text-center text-neutral-500 text-md md:text-4xl font-inter"
          >
            Hoppscotch processes over <br />
            <span class="text-neutral-50">800 thousand requests</span> per month
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
