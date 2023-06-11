<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Particles animation -->
      <Particles class="absolute inset-0 -z-10" />

      <!-- Illustration -->
      <div
        class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div class="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
          <img
            src="../images/glow-bottom.svg"
            class="max-w-none"
            width="2146"
            height="774"
            alt="Hero Illustration"
          />
        </div>
      </div>

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-6" data-aos="fade-down">
            <div
              class="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
            >
              <a
                class="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow"
                href="https://docs.hoppscotch.io/documentation/self-host/getting-started"
                target="_blank"
              >
                <span class="relative inline-flex items-center">
                  Self-Host support is now in beta
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                  >
                    <icon-lucide-arrow-right />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <h1
            class="pb-4 text-transparent h1 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            data-aos="fade-down"
          >
            Open Source API Platform
          </h1>
          <p
            class="mb-8 text-lg text-slate-300"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Trusted by millions of developers and companies to build, ship, and
            maintain their APIs.
          </p>
          <div
            class="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div>
              <a
                class="w-full transition duration-150 ease-in-out btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                href="https://hoppscotch.io"
                target="_blank"
              >
                Get Started
                <span
                  class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                >
                  <icon-lucide-arrow-right />
                </span>
              </a>
            </div>
            <div>
              <a
                class="w-full transition duration-150 ease-in-out bg-opacity-10 btn text-slate-200 hover:text-white bg-slate-900 hover:bg-opacity-20"
                href="https://docs.hoppscotch.io"
                target="_blank"
              >
                <icon-lucide-wand-2 class="mr-2" />
                <span>Read the docs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
