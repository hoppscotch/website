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
          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-4xl pb-12 mx-auto text-center md:pb-20">
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-4 border rounded-full hero-subtitle-gradient border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
            >
              Solutions
            </span>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            New era for developers
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hoppscotch is a collaborative open source API development platform.
          </p>
        </div>
        <!-- Section content -->
        <img
          src="/images/light-cubes.svg"
          alt="Light cubes"
          class="mx-auto -mt-40"
          data-aos="fade-up"
        />
        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
          <!-- Grid -->
          <div class="grid gap-4 lg:grid-cols-4">
            <!-- Feature #1 -->
            <div class="lg:col-span-2" data-aos="fade-down">
              <div
                class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-slate-950/10 to-slate-600/10 rounded-xl"
              >
                <img src="/images/solutions-feature-1.svg" />
                <div class="flex flex-col items-start flex-1 w-full mt-8">
                  <h5 class="font-medium">Real-time</h5>
                  <p class="mt-4 text-sm text-slate-500">
                    Test, share and track the progress of your APIs all in one
                    place. No more switching between tools.
                  </p>
                </div>
              </div>
            </div>
            <!-- Feature #2 -->
            <div data-aos="fade-down">
              <div
                class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-slate-950/10 to-slate-600/10 rounded-xl"
              >
                <img src="/images/solutions-feature-2.svg" />
                <div class="flex flex-col items-start flex-1 w-full mt-8">
                  <h5 class="font-medium">Cloud sync</h5>
                  <p class="mt-4 text-sm text-slate-500">
                    Start from where you left off. Your data is synced across
                    devices.
                  </p>
                </div>
              </div>
            </div>
            <!-- Feature #3 -->
            <div data-aos="fade-down">
              <div
                class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-slate-950/10 to-slate-600/10 rounded-xl"
              >
                <img src="/images/solutions-feature-3.svg" />
                <div class="flex flex-col items-start flex-1 w-full mt-8">
                  <h5 class="font-medium">Multi-platform</h5>
                  <p class="mt-4 text-sm text-slate-500">
                    Hoppscotch is available for all platforms. Download the app
                    or use the web app.
                  </p>
                </div>
              </div>
            </div>
            <!-- Feature #4 -->
            <div data-aos="fade-down">
              <div
                class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-slate-950/10 to-slate-600/10 rounded-xl"
              >
                <img src="/images/solutions-feature-4.svg" />
                <div class="flex flex-col items-start flex-1 w-full mt-8">
                  <h5 class="font-medium">Access levels</h5>
                  <p class="mt-4 text-sm text-slate-500">
                    Share your APIs with your team or keep it private.
                  </p>
                </div>
              </div>
            </div>
            <!-- Feature #5 -->
            <div class="lg:col-span-2" data-aos="fade-down">
              <div
                class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-slate-950/10 to-slate-600/10 rounded-xl"
              >
                <img src="/images/solutions-feature-5.svg" />
                <div class="flex flex-col items-start flex-1 w-full mt-8">
                  <h5 class="font-medium">Collaborate with team</h5>
                  <p class="mt-4 text-sm text-slate-500">
                    Invite your team members to collaborate on your APIs. Work
                    together to build the best APIs.
                  </p>
                </div>
              </div>
            </div>
            <!-- Feature #6 -->
            <div data-aos="fade-down">
              <div
                class="flex flex-col items-center justify-center h-full p-8 bg-violet-500/50 rounded-xl"
              >
                <div class="flex flex-col items-center flex-1 text-center">
                  <h5 class="font-medium">Get Started</h5>
                  <p class="mt-4 text-sm text-white/30">
                    Start organizing your APIs and projects now.
                  </p>
                </div>
                <RouterLink
                  to="/download"
                  class="px-4 py-2 mt-4 font-semibold bg-white rounded-full text-slate-950"
                >
                  Start for free
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
