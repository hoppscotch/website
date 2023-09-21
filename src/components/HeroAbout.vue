<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 pt-16 box-content h-128 -z-1">
      <img
        class="absolute inset-0 object-cover w-full h-full opacity-25"
        src="/images/company-hero-bg.jpg"
        width="1440"
        height="577"
        alt="About"
      />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-slate-950"
      aria-hidden="true"
    ></div>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center">
          <div class="relative flex items-center justify-center">
            <div v-motion-fade class="relative inline-flex items-start">
              <img
                class="opacity-50 rounded-md"
                src="/images/company-team.jpg"
                height="432"
                alt="About hero"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-950"
                aria-hidden="true"
              ></div>
            </div>
            <div v-motion-fade class="absolute">
              <h2
                class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
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
