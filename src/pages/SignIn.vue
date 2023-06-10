<template>
  <main class="grow">
    <section class="relative">
      <!-- Illustration -->
      <div
        class="absolute -translate-x-1/2 pointer-events-none md:block left-1/2 -mt-36 blur-2xl opacity-70 -z-10"
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
                    >-&gt;</span
                  >
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
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                  >
                    <path
                      d="M14.77 1.385c-.555.277-1.108.369-1.755.461.647-.37 1.108-.923 1.293-1.661-.554.369-1.2.553-1.939.738A3.223 3.223 0 0 0 10.154 0C8.584 0 7.2 1.385 7.2 3.046c0 .277 0 .462.092.646C4.8 3.6 2.492 2.4 1.015.554c-.277.461-.369.923-.369 1.57 0 1.014.554 1.938 1.385 2.491-.462 0-.923-.184-1.385-.369a2.98 2.98 0 0 0 2.4 2.954c-.277.092-.554.092-.83.092-.185 0-.37 0-.554-.092a2.99 2.99 0 0 0 2.861 2.123c-1.015.83-2.308 1.292-3.785 1.292H0C1.385 11.446 2.954 12 4.615 12c5.539 0 8.585-4.615 8.585-8.585v-.369c.646-.461 1.2-1.015 1.57-1.661Z"
                    />
                  </svg>
                </span>
              </button>
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9"
              >
                <span class="relative">
                  <span class="sr-only">Continue with GitHub</span>
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                  >
                    <path
                      d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z"
                    />
                  </svg>
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
