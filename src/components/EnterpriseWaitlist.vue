<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <!-- Particles animation -->
      <ClientOnly>
        <Particles class="absolute inset-0 -z-10" />
      </ClientOnly>
      <div class="pb-12 pt-32 md:pb-20 md:pt-40">
        <!-- Hero content -->
        <div class="flex flex-1 flex-col lg:flex-row">
          <div
            class="relative flex flex-1 flex-col items-center justify-center p-8"
          >
            <div class="absolute inset-0 -z-10">
              <div class="moon"></div>
              <div class="moon"></div>
              <div class="moon"></div>
            </div>
            <img
              loading="lazy"
              src="/images/enterpprise-portal.svg"
              class="h-full w-full"
              alt="Enterprise"
            />
          </div>
          <div class="flex flex-1 flex-col items-center justify-center p-8">
            <!-- Content -->
            <div class="max-lg:text-center">
              <span
                class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
              >
                Hoppscotch Enterprise Edition
              </span>
              <h3
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-3 text-transparent"
              >
                Your Portal to Everything Hoppscotch
              </h3>
              <p class="mb-8 text-zinc-400/80">
                SAML-based SSO, on-prem deployment, audit logs and more.<br />
                Join the waitlist for the Hoppscotch Enterprise Edition.
              </p>
              <div class="mt-8 max-w-sm space-y-2 max-lg:mx-auto">
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
                    class="font-2xl inline-flex flex-1 rounded border-0 bg-zinc-500/10 px-4 py-3 font-semibold text-zinc-50 outline-none ring-1 ring-zinc-950 transition placeholder:text-zinc-400 hover:ring-zinc-600 focus:ring-zinc-400"
                    placeholder="Email address"
                    required
                  />
                  <button
                    id="mc-embedded-subscribe"
                    name="subscribe"
                    type="submit"
                    class="font-2xl inline-flex rounded border-0 bg-zinc-500/10 px-4 py-3 font-semibold text-zinc-50 outline-none ring-1 ring-zinc-950 transition placeholder:text-zinc-400 hover:ring-zinc-600 focus:ring-zinc-400"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 px-8 pt-32 md:grid-cols-2">
          <div
            class="relative overflow-hidden rounded-xl border border-zinc-500/20 p-8"
          >
            <div
              class="absolute inset-0 -z-10 flex items-center justify-center bg-black/10"
            >
              <img
                loading="lazy"
                src="/images/enterprise-waitlist-card-bg-1.jpg"
                alt="Cloud"
                class="opacity-10"
              />
            </div>
            <h5 class="font-semibold">Hoppscotch Cloud</h5>
            <p class="mt-4 text-zinc-400/80">
              Hoppscotch Cloud is the easiest way to get started with
              Hoppscotch. It's a fully managed API development platform that
              lets you build, publish and document APIs in minutes.
            </p>
            <p class="mt-4">
              <RouterLink to="/products/cloud" class="flex items-center">
                Learn more <icon-lucide-chevron-right class="ml-2" />
              </RouterLink>
            </p>
          </div>
          <div
            class="relative overflow-hidden rounded-xl border border-zinc-500/20 p-8"
          >
            <div
              class="absolute inset-0 -z-10 flex items-center justify-center bg-black/10"
            >
              <img
                loading="lazy"
                src="/images/enterprise-waitlist-card-bg-2.jpg"
                alt="Self-Host"
                class="opacity-10"
              />
            </div>
            <h5 class="font-semibold">Self-Host Hoppscotch</h5>
            <p class="mt-4 text-zinc-400/80">
              Hoppscotch Self-Host is an open-source API development platform
              that you can run on your own infrastructure. It's the most
              flexible way to deploy Hoppscotch.
            </p>
            <p class="mt-4">
              <RouterLink to="/products/self-host" class="flex items-center">
                Learn more <icon-lucide-chevron-right class="ml-2" />
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@for $i from 1 through 3 {
  .moon:nth-child(#{$i}) {
    @apply absolute;
    @apply z-10;
    @apply rounded-full;
    @apply bg-zinc-700;

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
