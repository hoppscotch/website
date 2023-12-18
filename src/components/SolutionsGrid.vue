<template>
  <section class="relative">
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600"
          >
            Solutions
          </span>
          <h2
            class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            New era for developers
          </h2>
          <p class="text-zinc-400/80">
            Hoppscotch is a collaborative open source API development platform.
          </p>
        </div>
        <!-- Section content -->
        <img
          loading="lazy"
          src="/images/light-cubes.svg"
          alt="Light cubes"
          class="mx-auto -mt-20"
        />
        <!-- Grid -->
        <div class="grid gap-4 lg:grid-cols-4">
          <!-- Feature #1 -->
          <div class="lg:col-span-2">
            <div
              class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-zinc-950/10 to-zinc-600/10 rounded-xl"
            >
              <img loading="lazy" src="/images/solutions-feature-1.svg" />
              <div class="flex flex-col items-start flex-1 w-full mt-8">
                <h5 class="">Real-time</h5>
                <p class="mt-4 text-sm text-zinc-100">
                  Test, share and track the progress of your APIs all in one
                  place. No more switching between tools.
                </p>
              </div>
            </div>
          </div>
          <!-- Feature #2 -->
          <div>
            <div
              class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-zinc-950/10 to-zinc-600/10 rounded-xl"
            >
              <img loading="lazy" src="/images/solutions-feature-2.svg" />
              <div class="flex flex-col items-start flex-1 w-full mt-8">
                <h5 class="">Cloud sync</h5>
                <p class="mt-4 text-sm text-zinc-100">
                  Start from where you left off. Your data is synced across
                  devices.
                </p>
              </div>
            </div>
          </div>
          <!-- Feature #3 -->
          <div>
            <div
              class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-zinc-950/10 to-zinc-600/10 rounded-xl"
            >
              <img loading="lazy" src="/images/solutions-feature-3.svg" />
              <div class="flex flex-col items-start flex-1 w-full mt-8">
                <h5 class="">Multi-platform</h5>
                <p class="mt-4 text-sm text-zinc-100">
                  Hoppscotch is available for all platforms. Download the app or
                  use the web app.
                </p>
              </div>
            </div>
          </div>
          <!-- Feature #4 -->
          <div>
            <div
              class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-zinc-950/10 to-zinc-600/10 rounded-xl"
            >
              <img loading="lazy" src="/images/solutions-feature-4.svg" />
              <div class="flex flex-col items-start flex-1 w-full mt-8">
                <h5 class="">Access levels</h5>
                <p class="mt-4 text-sm text-zinc-100">
                  Share your APIs with your team or keep it private.
                </p>
              </div>
            </div>
          </div>
          <!-- Feature #5 -->
          <div class="lg:col-span-2">
            <div
              class="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-zinc-950/10 to-zinc-600/10 rounded-xl"
            >
              <img loading="lazy" src="/images/solutions-feature-5.svg" />
              <div class="flex flex-col items-start flex-1 w-full mt-8">
                <h5 class="">Collaborate with team</h5>
                <p class="mt-4 text-sm text-zinc-100">
                  Invite your team members to collaborate on your APIs. Work
                  together to build the best APIs.
                </p>
              </div>
            </div>
          </div>
          <!-- Feature #6 -->
          <div>
            <div
              class="flex flex-col items-center justify-center h-full p-8 bg-zinc-500/50 rounded-xl"
            >
              <div class="flex flex-col items-center flex-1 text-center">
                <h5 class="">Get Started</h5>
                <p class="mt-4 text-sm text-zinc-50/30">
                  Start organizing your APIs and projects now.
                </p>
              </div>
              <RouterLink
                to="/download"
                class="px-4 py-2 mt-4 font-semibold bg-white rounded-full text-zinc-950"
              >
                Start for free
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
