<template>
  <section class="relative">
    <!-- Illustration -->
    <div
      class="absolute pointer-events-none -translate-x-1/2 md:block left-1/2 -mt-36 blur-2xl opacity-70 -z-10"
      aria-hidden="true"
    >
      <img
        src="../images/auth-illustration.svg"
        class="max-w-none"
        width="1440"
        height="450"
        alt="Page Illustration"
      />
    </div>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 mx-auto text-center">
          <!-- Logo -->
          <div class="mb-5">
            <RouterLink class="inline-flex" to="/">
              <div
                class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-2xl"
              >
                <img
                  class="relative"
                  src="../images/logo.svg"
                  width="42"
                  height="42"
                  alt="Stellar"
                />
              </div>
            </RouterLink>
          </div>
          <!-- Page title -->
          <h1
            class="text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Reset your password
          </h1>
        </div>
        <!-- Form -->
        <div class="max-w-sm mx-auto">
          <form>
            <div class="space-y-4">
              <div>
                <label
                  class="block mb-1 text-sm font-medium text-slate-200"
                  for="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  class="w-full form-input"
                  type="email"
                  required
                />
              </div>
            </div>
            <div class="mt-6">
              <button
                class="w-full text-sm text-white bg-purple-500 shadow-sm btn hover:bg-purple-600 group"
              >
                Reset Password
                <span
                  class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform ml-1"
                >
                  <icon-lucide-arrow-right />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<route lang="yaml">
meta:
  layout: empty
</route>
