<template>
  <header class="sticky top-0 z-30 w-full">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div
        class="flex items-center justify-between h-16 -mb-16 md:h-20 md:-mb-20"
      >
        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Site branding -->
          <div class="flex flex-wrap items-center flex-1">
            <!-- Logo -->
            <router-link class="block" to="/" aria-label="Cruip">
              <img
                src="../images/logo.svg"
                width="38"
                height="38"
                alt="Stellar"
              />
            </router-link>
          </div>
          <!-- Desktop menu links -->
          <ul
            class="flex flex-wrap items-center justify-center mx-4 font-medium rounded-full backdrop-blur-lg bg-black/20"
          >
            <li>
              <router-link
                to="/product"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white"
                >Product</router-link
              >
            </li>
            <li>
              <router-link
                to="/solutions"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white"
                >Solutions</router-link
              >
            </li>
            <li>
              <router-link
                to="/testimonials"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white"
                >Pricing</router-link
              >
            </li>
            <li>
              <router-link
                to="/company"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white"
                >Company</router-link
              >
            </li>
          </ul>
          <!-- Desktop sign in links -->
          <ul class="flex flex-wrap items-center justify-end flex-1">
            <li>
              <router-link
                class="text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white"
                to="/signin"
                >Sign in</router-link
              >
            </li>
            <li class="ml-6">
              <router-link
                class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                to="/signup"
              >
                <span class="relative inline-flex items-center">
                  Sign up
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="flex grow md:hidden">
          <!-- Site branding -->
          <div class="flex shrink-0">
            <!-- Logo -->
            <router-link class="block" to="/" aria-label="Cruip">
              <img
                src="../images/logo.svg"
                width="38"
                height="38"
                alt="Stellar"
              />
            </router-link>
          </div>
          <!-- Mobile sign in links -->
          <ul class="flex flex-wrap items-center justify-end mr-8 grow">
            <li>
              <router-link
                class="text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white"
                to="/signin"
                >Sign in</router-link
              >
            </li>
            <li class="ml-6">
              <router-link
                class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                to="/signup"
              >
                <span class="relative inline-flex items-center">
                  Sign up
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </span>
              </router-link>
            </li>
          </ul>
          <!-- Hamburger button -->
          <button
            class="hamburger"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 text-gray-900 transition duration-150 ease-in-out fill-current hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition duration-200 ease-out transform"
            enter-from-class="-translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="transition duration-200 ease-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              v-show="mobileNavOpen"
              id="mobile-nav"
              ref="mobileNav"
              class="fixed top-0 left-0 z-20 w-full h-screen max-w-sm -ml-16 overflow-scroll bg-white shadow-lg dark:bg-gray-900 no-scrollbar"
            >
              <div class="py-6 pl-20 pr-4">
                <!-- Logo -->
                <router-link
                  to="/"
                  class="inline-block mb-4"
                  aria-label="Cruip"
                >
                  <svg
                    class="w-8 h-8"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="26%"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        id="menulogo_a"
                      >
                        <stop stop-color="#3ABAB4" offset="0%" />
                        <stop stop-color="#7F9CF5" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="26%"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        id="menulogo_b"
                      >
                        <stop stop-color="#3ABAB4" offset="0%" />
                        <stop
                          stop-color="#3ABAB4"
                          stop-opacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                      fill="url(#menulogo_a)"
                    />
                    <path
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                      fill="url(#menulogo_b)"
                    />
                  </svg>
                </router-link>
                <!-- Links -->
                <ul>
                  <li>
                    <router-link
                      to="/about"
                      class="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >About</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/blog"
                      class="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >Blog</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/testimonials"
                      class="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >Testimonials</router-link
                    >
                  </li>
                  <li
                    class="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800"
                  >
                    <span class="flex py-2 text-gray-600 dark:text-gray-400"
                      >Resources</span
                    >
                    <ul class="pl-4">
                      <li>
                        <router-link
                          to="/help"
                          class="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                          >Help center</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/404"
                          class="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                          >404</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link
                      to="/contact"
                      class="inline-flex items-center justify-center w-full px-4 py-2 my-2 font-medium text-white transition duration-150 ease-in-out bg-teal-500 border border-transparent rounded hover:bg-teal-400"
                      >Request code</router-link
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      mobileNavOpen: false,
    }
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return
      this.mobileNavOpen = false
    },
    keyPress(e) {
      if (!this.mobileNavOpen || e.keyCode !== 27) return
      this.mobileNavOpen = false
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside)
    document.addEventListener("keydown", this.keyPress)
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside)
    document.removeEventListener("keydown", this.keyPress)
  },
}
</script>
