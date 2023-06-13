<template>
  <header class="absolute z-30 w-full">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Desktop navigation -->
        <nav class="flex grow">
          <!-- Site branding -->
          <div class="flex flex-wrap items-center flex-1">
            <!-- Logo -->
            <RouterLink
              class="flex items-center justify-center rounded-full"
              to="/"
              aria-label="Hoppscotch"
            >
              <img
                src="../images/logo.svg"
                width="38"
                height="38"
                alt="Stellar"
              />
            </RouterLink>
          </div>
          <!-- Desktop menu links -->
          <ul
            class="flex-wrap items-center justify-center hidden px-3 overflow-hidden rounded-full space-x-2 p- md:flex bg-black/10 backdrop-blur"
          >
            <li>
              <RouterLink
                to="/solutions"
                class="px-2 text-sm font-medium rounded-full transition duration-200 ease-in-out text-slate-300 hover:text-white"
                >Solutions</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/products"
                class="px-2 text-sm font-medium rounded-full transition duration-200 ease-in-out text-slate-300 hover:text-white"
                >Product</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/company"
                class="px-2 text-sm font-medium rounded-full transition duration-200 ease-in-out text-slate-300 hover:text-white"
                >Company</RouterLink
              >
            </li>
          </ul>
          <!-- Desktop sign in links -->
          <ul class="flex flex-wrap items-center justify-end flex-1">
            <li>
              <RouterLink
                class="px-2 text-sm font-medium rounded-full transition duration-200 ease-in-out text-slate-300 hover:text-white"
                to="/sign-in"
                >Sign in</RouterLink
              >
            </li>
            <li class="ml-4">
              <RouterLink
                class="btn-sm text-slate-300 hover:text-white transition duration-200 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                to="/sign-up"
              >
                <span class="relative inline-flex items-center">
                  Sign up
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out ml-1"
                  >
                    <icon-lucide-arrow-right />
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
