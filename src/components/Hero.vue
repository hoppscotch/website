<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Particles animation -->
      <Particles class="absolute inset-0 -z-10" :quantity="50" />
      <!-- Illustration -->
      <div
        class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div class="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
          <img
            src="/images/glow-bottom.svg"
            class="opacity-10 max-w-none"
            width="2146"
            height="774"
            alt="Hero Illustration"
          />
        </div>
      </div>
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Hero content -->
        <div class="flex flex-col items-center max-w-5xl mx-auto text-center">
          <Announcement />
          <h1
            class="mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white/90 via-white/80 to-white/20"
            data-aos="fade-down"
          >
            Make better APIs
          </h1>
          <p
            class="w-2/3 mb-8 text-xl text-slate-300"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Trusted by millions of developers to build, test, and maintain their
            APIs.
          </p>
          <div
            class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div>
              <RouterLink
                class="w-full transition btn text-slate-950 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                to="/products"
              >
                Get Started
                <span
                  class="tracking-normal text-slate-500 group-hover:translate-x-0.5 transition-transform ml-1"
                >
                  <icon-lucide-arrow-right />
                </span>
              </RouterLink>
            </div>
            <div>
              <a
                class="w-full bg-white transition bg-opacity-10 btn text-slate-200 hover:text-white hover:bg-opacity-20"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Documentation</span>
              </a>
            </div>
          </div>
          <div class="relative" data-aos="fade-up" data-aos-delay="400">
            <img
              src="/images/screenshot.png"
              alt="Screenshot"
              class="mx-auto my-16 shadow-2xl rounded-xl bg-slate-950/90"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
