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
        <div class="max-w-3xl mx-auto">
          <div
            class="relative flex items-center justify-center overflow-hidden"
          >
            <!-- Big circle behind -->
            <svg
              class="block"
              width="320"
              height="320"
              viewBox="0 0 432 432"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="zoom-in"
            >
              <defs>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="50%"
                  id="circleill_a"
                >
                  <stop stop-color="#3b0764" stop-opacity="0" offset="0%" />
                  <stop stop-color="#581c87" stop-opacity=".32" offset="100%" />
                </radialGradient>
              </defs>
              <circle
                cx="216"
                cy="216"
                r="216"
                fill="url(#circleill_a)"
                fill-rule="evenodd"
              />
            </svg>
            <!-- Moving tags -->
            <div class="absolute inset-0" data-aos="fade-right">
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-indigo-500 bg-indigo-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation mt-28"
              >
                Custom Support
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-teal-500 bg-teal-500 rounded-full bg-opacity-25 text-md from-transparent to-transparent tags-animation tags-1 mt-72"
              >
                Components
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 mt-40 font-medium text-pink-500 bg-pink-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-2"
              >
                Items
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-indigo-500 bg-indigo-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-3 mt-80 top-4"
              >
                Tools
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 mt-56 font-medium text-indigo-500 bg-indigo-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-4"
              >
                Development
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-pink-500 bg-pink-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-4"
              >
                Project Settings
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-teal-500 bg-teal-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-5 mt-14"
              >
                Tools & Widgets
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-purple-500 bg-purple-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-5 mt-80 top-4"
              >
                Getting Started
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 mt-40 font-medium text-indigo-500 bg-indigo-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-6"
              >
                Templates
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-indigo-500 bg-indigo-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-7"
              >
                Frameworks
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-pink-500 bg-pink-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-7 mt-72"
              >
                Custom UI
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-purple-500 bg-purple-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-8 mt-28"
              >
                Layout & Design
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 font-medium text-teal-500 bg-teal-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-9 mt-80 top-4"
              >
                Perks
              </div>
              <div
                class="absolute inline-flex items-center justify-center px-4 py-1 mt-56 font-medium text-teal-500 bg-teal-500 rounded-full bg-opacity-25 text-md bg-gradient-to-tr from-transparent to-transparent tags-animation tags-10"
              >
                Product & Design
              </div>
            </div>
            <!-- Inner small cricle -->
            <svg
              class="absolute text-purple-200 rounded-full shadow-xl"
              width="160"
              height="160"
              viewBox="0 0 148 148"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="zoom-in"
            >
              <circle
                cx="74"
                cy="74"
                r="74"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
            <!-- Logo -->
            <icon-lucide-orbit
              class="absolute w-16 h-16 text-purple-800 animate-spin"
            />
            <!-- Side gradients -->
            <div
              class="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-900"
              aria-hidden="true"
            ></div>
            <div
              class="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-900"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Tags animation */
.tags-animation {
  animation: tagsmove 30000ms linear infinite;
}
.tags-1 {
  animation-delay: calc(
    30000ms * -0.1
  ); /* -0.1 will make the tag move 76px right (i.e. 768px container size * -0.1) */
}
.tags-2 {
  animation-delay: calc(30000ms * -0.16);
}
.tags-3 {
  animation-delay: calc(30000ms * -0.23);
}
.tags-4 {
  animation-delay: calc(30000ms * -0.27);
}
.tags-5 {
  animation-delay: calc(30000ms * -0.44);
}
.tags-6 {
  animation-delay: calc(30000ms * -0.55);
}
.tags-7 {
  animation-delay: calc(30000ms * -0.63);
}
.tags-8 {
  animation-delay: calc(30000ms * -0.73);
}
.tags-9 {
  animation-delay: calc(30000ms * -0.76);
}
.tags-10 {
  animation-delay: calc(30000ms * -0.8);
}
@keyframes tagsmove {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(768px);
  }
}
</style>
