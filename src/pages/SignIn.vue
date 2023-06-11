<template>
  <main class="grow">
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
              <router-link class="inline-flex" to="/">
                <div
                  class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl"
                >
                  <img
                    class="relative"
                    src="../images/logo.svg"
                    width="42"
                    height="42"
                    alt="Stellar"
                  />
                </div>
              </router-link>
            </div>
            <!-- Page title -->
            <h1
              class="text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            >
              Sign in to your account
            </h1>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">
            <form>
              <div class="space-y-4">
                <div>
                  <label
                    class="block mb-1 text-sm font-medium text-slate-300"
                    for="email"
                    >Email</label
                  >
                  <input
                    id="email"
                    class="w-full form-input"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <div class="flex justify-between">
                    <label
                      class="block mb-1 text-sm font-medium text-slate-300"
                      for="password"
                      >Password</label
                    >
                    <router-link
                      class="ml-2 text-sm font-medium text-purple-500 transition duration-150 ease-in-out hover:text-purple-400"
                      to="/reset-password"
                      >Forgot?</router-link
                    >
                  </div>
                  <input
                    id="password"
                    class="w-full form-input"
                    type="password"
                    autocomplete="on"
                    required
                  />
                </div>
              </div>
              <div class="mt-6">
                <button
                  class="w-full text-sm text-white bg-purple-500 shadow-sm btn hover:bg-purple-600 group"
                >
                  Sign In
                  <span
                    class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                  >
                    <icon-lucide-arrow-right />
                  </span>
                </button>
              </div>
            </form>

            <div class="mt-4 text-center">
              <div class="text-sm text-slate-400">
                Don't have an account?
                <router-link
                  class="font-medium text-purple-500 transition duration-150 ease-in-out hover:text-purple-400"
                  to="/signup"
                  >Sign up</router-link
                >
              </div>
            </div>

            <!-- Divider -->
            <div class="flex items-center my-6">
              <div
                class="mr-3 border-t border-slate-800 grow"
                aria-hidden="true"
              ></div>
              <div class="text-sm italic text-slate-500">or</div>
              <div
                class="ml-3 border-t border-slate-800 grow"
                aria-hidden="true"
              ></div>
            </div>

            <!-- Social login -->
            <div class="flex space-x-3">
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9"
              >
                <span class="relative">
                  <span class="sr-only">Continue with Twitter</span>
                  <icon-lucide-twitter />
                </span>
              </button>
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9"
              >
                <span class="relative">
                  <span class="sr-only">Continue with GitHub</span>
                  <icon-lucide-github />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "SignIn",
}
</script>
