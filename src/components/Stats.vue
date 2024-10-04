<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
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
            stroke-width=".08"
            paint-order="stroke"
            class="fill-zinc-900/20 stroke-zinc-800"
          >
            500K
          </text>
        </svg>
        <div class="absolute inset-0 z-20 flex items-center justify-center">
          <p
            v-motion-fade-visible-once
            class="text-md max-w-xl text-center font-inter font-semibold tracking-tight text-zinc-500 md:text-4xl"
          >
            Hoppscotch processes over <br />
            <span class="text-zinc-50">500 thousand requests per week</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
