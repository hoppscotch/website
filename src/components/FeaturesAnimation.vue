<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Features
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Designed to help you
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Better features for better products.
          </p>
        </div>
        <!-- Custom animation -->
        <div class="relative flex items-center justify-center overflow-hidden">
          <div class="flex flex-col space-y-8">
            <div class="overflow-hidden">
              <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
              <!-- * Custom styles in src/css/additional-styles/theme.scss -->
              <div
                class="relative features-carousel-1 swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
              >
                <div
                  class="swiper-wrapper !ease-linear select-none items-center"
                >
                  <!-- Carousel items -->
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-layers class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-box class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-code class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-users-2 class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-download class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-badge-check class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-flask-conical class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-folder-open class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-history class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-globe class="w-6 h-6" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="overflow-hidden">
              <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
              <!-- * Custom styles in src/css/additional-styles/theme.scss -->
              <div
                class="relative features-carousel-2 swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
              >
                <div
                  class="swiper-wrapper !ease-linear select-none items-center"
                >
                  <!-- Carousel items -->
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-box class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-badge-check class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-history class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-flask-conical class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-layers class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-folder-open class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-users-2 class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-download class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-globe class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-code class="w-6 h-6" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="overflow-hidden">
              <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
              <!-- * Custom styles in src/css/additional-styles/theme.scss -->
              <div
                class="relative features-carousel-3 swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
              >
                <div
                  class="swiper-wrapper !ease-linear select-none items-center"
                >
                  <!-- Carousel items -->
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-badge-check class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-flask-conical class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-users-2 class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-folder-open class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-box class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-globe class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-download class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-history class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-code class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-layers class="w-6 h-6" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="overflow-hidden">
              <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
              <!-- * Custom styles in src/css/additional-styles/theme.scss -->
              <div
                class="relative features-carousel-4 swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-950 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-950"
              >
                <div
                  class="swiper-wrapper !ease-linear select-none items-center"
                >
                  <!-- Carousel items -->
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-layers class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-box class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-code class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-users-2 class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-download class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-badge-check class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-flask-conical class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-folder-open class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-history class="w-6 h-6" />
                    </span>
                  </span>
                  <span
                    class="swiper-slide !w-auto btn-sm aspect-square rounded-xl text-slate-500 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-xl pointer-events-none"
                    to="/"
                  >
                    <span class="relative inline-flex items-center">
                      <icon-lucide-globe class="w-6 h-6" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Logo -->
          <div
            class="absolute inset-0 z-10 flex items-center justify-center m-auto w-80 h-80 deep-shadow"
          >
            <img
              src="/images/logo.svg"
              width="96"
              height="96"
              alt="Stellar"
              class="relative"
            />
          </div>
          <!-- Side gradients -->
          <div
            class="absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-950"
            aria-hidden="true"
          ></div>
          <div
            class="absolute top-0 bottom-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-950"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.deep-shadow::before {
  @apply absolute;
  @apply inset-0;
  @apply rounded-full;
  content: "";
  background: radial-gradient(
    theme("colors.slate.950") 0px,
    theme("colors.slate.950") 20%,
    transparent 50%
  );
}
</style>
<script setup>
import { onMounted } from "vue"
// Import Swiper
import Swiper, { Autoplay } from "swiper"
import "swiper/css"
Swiper.use([Autoplay])
onMounted(() => {
  new Swiper(".features-carousel-1", {
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    speed: 3000,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  })
  new Swiper(".features-carousel-2", {
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    speed: 4500,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  })
  new Swiper(".features-carousel-3", {
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    speed: 3500,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  })
  new Swiper(".features-carousel-4", {
    slidesPerView: "auto",
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  })
})
</script>
