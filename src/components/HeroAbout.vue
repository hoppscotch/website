<template>
  <section class="relative">
    <!-- Background image -->
    <div class="h-128 -z-1 absolute inset-0 box-content pt-16">
      <img
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover opacity-25"
        src="/images/company-hero-bg.jpg"
        width="1440"
        height="577"
        alt="About"
      />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-zinc-950"
      aria-hidden="true"
    ></div>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-12 pt-32 md:pb-20 md:pt-40">
        <div class="text-center">
          <div class="relative flex items-center justify-center">
            <div class="relative inline-flex items-start">
              <img
                loading="lazy"
                class="rounded-md opacity-50"
                src="/images/company-team.jpg"
                height="432"
                alt="About hero"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-zinc-950"
                aria-hidden="true"
              ></div>
            </div>
            <div class="absolute">
              <h2
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
              >
                Simplicity is the ultimate sophistication
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
