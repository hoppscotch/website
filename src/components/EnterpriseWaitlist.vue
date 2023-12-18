<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
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
              loading="lazy"
              src="/images/enterpprise-portal.svg"
              class="w-full h-full"
              alt="Enterprise"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-1 p-8">
            <!-- Content -->
            <div class="max-lg:text-center">
              <span
                class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600"
              >
                Hoppscotch Enterprise Edition
              </span>
              <h3
                class="block pb-3 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
              >
                Your Portal to Everything Hoppscotch
              </h3>
              <p class="mb-8 text-zinc-400/80">
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
                    class="inline-flex flex-1 px-4 py-3 font-semibold border-0 rounded outline-none transition focus:ring-zinc-400 hover:ring-zinc-600 ring-1 ring-zinc-950 placeholder:text-zinc-400 text-zinc-50 font-2xl bg-zinc-500/10"
                    placeholder="Email address"
                    required
                  />
                  <button
                    id="mc-embedded-subscribe"
                    name="subscribe"
                    type="submit"
                    class="inline-flex px-4 py-3 font-semibold border-0 rounded outline-none transition focus:ring-zinc-400 hover:ring-zinc-600 ring-1 ring-zinc-950 placeholder:text-zinc-400 text-zinc-50 font-2xl bg-zinc-500/10"
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
            class="relative p-8 overflow-hidden border border-zinc-500/20 rounded-xl"
          >
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/10 -z-10"
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
              lets you build, publish, and document APIs in minutes.
            </p>
            <p class="mt-4">
              <RouterLink to="/products/cloud" class="flex items-center">
                Learn more <icon-lucide-chevron-right class="ml-2" />
              </RouterLink>
            </p>
          </div>
          <div
            class="relative p-8 overflow-hidden border border-zinc-500/20 rounded-xl"
          >
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/10 -z-10"
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
