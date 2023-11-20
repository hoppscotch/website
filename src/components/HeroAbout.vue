<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 pt-16 box-content h-128 -z-1">
      <img
        loading="lazy"
        class="absolute inset-0 object-cover w-full h-full opacity-25"
        src="/images/company-hero-bg.jpg"
        width="1440"
        height="577"
        alt="About"
      />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-gray-950"
      aria-hidden="true"
    ></div>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center">
          <div class="relative flex items-center justify-center">
            <div class="relative inline-flex items-start">
              <img
                loading="lazy"
                class="opacity-50 rounded-md"
                src="/images/company-team.jpg"
                height="432"
                alt="About hero"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-950"
                aria-hidden="true"
              ></div>
            </div>
            <div class="absolute">
              <h2
                class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-200/50 via-gray-100/80 to-gray-50/80"
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
