<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
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
      <!-- Particles animation -->
      <ClientOnly>
        <Particles class="absolute inset-0 -z-10" />
      </ClientOnly>
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Hero content -->
        <div class="flex flex-col flex-1 lg:flex-row">
          <div
            class="relative flex flex-col items-center justify-center flex-1 p-8"
          >
            <div class="absolute inset-0 -z-10">
              <div class="moon"></div>
              <div class="moon"></div>
              <div class="moon"></div>
            </div>
            <img
              src="/images/enterpprise-portal.svg"
              class="w-full h-full"
              alt="Enterprise"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-1 p-8">
            <!-- Content -->
            <div class="max-lg:text-center" data-aos="fade-down">
              <div
                class="relative inline-flex items-center justify-center px-4 py-2 mb-6 text-sm border rounded-full hero-subtitle-gradient bg-violet-500/10 border-violet-500/50"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span
                  class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-600"
                >
                  Hoppscotch Enterprise Edition
                </span>
              </div>
              <h3
                class="pb-3 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
              >
                Your Portal to Everything Hoppscotch
              </h3>
              <p class="mb-8 text-slate-400">
                SAML-based SSO, on-prem deployment, audit logs, and more.<br />
                Join the waitlist for the Hoppscotch Enterprise Edition.
              </p>
              <div class="max-w-sm mt-8 space-y-2 max-lg:mx-auto">
                <form
                  action="https://launchaco.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f"
                  method="post"
                  target="_blank"
                  validate
                  class="flex space-x-4"
                >
                  <input
                    id="mce-email"
                    name="email"
                    type="email"
                    class="inline-flex flex-1 px-4 py-3 font-bold border-0 rounded outline-none transition focus:ring-violet-400 hover:ring-violet-600 ring-1 ring-violet-950 placeholder:text-violet-400 text-violet-50 font-2xl bg-slate-500/10"
                    placeholder="Email address"
                    required
                  />
                  <button
                    id="mc-embedded-subscribe"
                    name="subscribe"
                    type="submit"
                    class="inline-flex px-4 py-3 font-bold border-0 rounded outline-none transition focus:ring-violet-400 hover:ring-violet-600 ring-1 ring-violet-950 placeholder:text-violet-400 text-violet-50 font-2xl bg-slate-500/10"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="px-8 pt-32 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div
            class="relative p-8 overflow-hidden border border-white/10 rounded-xl"
          >
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/10 -z-10"
            >
              <img
                src="/images/enterprise-waitlist-card-bg-1.jpg"
                alt="Cloud"
                class="opacity-10"
              />
            </div>
            <h5 class="font-semibold">Hoppscotch Cloud</h5>
            <p class="mt-4 text-slate-400">
              Hoppscotch Cloud is the easiest way to get started with
              Hoppscotch. It's a fully managed API development platform that
              lets you build, publish, and document APIs in minutes.
            </p>
            <p class="mt-4">
              <RouterLink
                to="/products/cloud"
                class="flex items-center font-medium"
              >
                Learn more <icon-lucide-chevron-right class="ml-2" />
              </RouterLink>
            </p>
          </div>
          <div
            class="relative p-8 overflow-hidden border border-white/10 rounded-xl"
          >
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/10 -z-10"
            >
              <img
                src="/images/enterprise-waitlist-card-bg-2.jpg"
                alt="Self-Host"
                class="opacity-10"
              />
            </div>
            <h5 class="font-semibold">Self-Host Hoppscotch</h5>
            <p class="mt-4 text-slate-400">
              Hoppscotch Self-Host is a free and open-source API development
              platform that you can run on your own infrastructure. It's the
              most flexible way to deploy Hoppscotch.
            </p>
            <p class="mt-4">
              <RouterLink
                to="/products/self-host"
                class="flex items-center font-medium"
              >
                Learn more <icon-lucide-chevron-right class="ml-2" />
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@for $i from 1 through 3 {
  .moon:nth-child(#{$i}) {
    @apply absolute;
    @apply z-10;
    @apply rounded-full;
    @apply bg-slate-700;

    $d: calc($i * 256px);

    width: $d;
    height: $d;
    box-shadow: 0px 0px 32px 0px rgb(0, 0, 0);
    opacity: calc(1 / ($i * 6));
    margin-left: calc(50% - #{$d}/ 2);
    margin-top: calc(50% - #{$d}/ 2);
  }
}
</style>
