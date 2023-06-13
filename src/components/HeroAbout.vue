<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 pt-16 box-content h-128 -z-1">
      <img
        class="absolute inset-0 object-cover w-full h-full opacity-25"
        src="../images/hero-bg-03.jpg"
        width="1440"
        height="577"
        alt="About"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900"
        aria-hidden="true"
      ></div>
    </div>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center">
          <div class="relative flex items-center justify-center">
            <div class="relative inline-flex items-start" data-aos="fade-up">
              <img
                class="opacity-50 rounded-md"
                src="../images/about-hero.jpg"
                width="768"
                height="432"
                alt="About hero"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900"
                aria-hidden="true"
              ></div>
            </div>
            <div class="absolute" data-aos="fade-down">
              <h2
                class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
              >
                Spot issues faster
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
