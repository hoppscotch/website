<template>
  <header class="absolute z-30 w-full">
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Desktop navigation -->
        <nav class="flex grow">
          <!-- Site branding -->
          <ul class="flex flex-wrap items-center md:flex-1">
            <li>
              <!-- Logo -->
              <RouterLink
                class="flex items-center justify-center rounded-full"
                to="/"
                aria-label="Hoppscotch"
              >
                <img
                  src="/images/logo.svg"
                  width="38"
                  height="38"
                  alt="Stellar"
                />
              </RouterLink>
            </li>
          </ul>
          <!-- Desktop menu links -->
          <ul
            class="flex-wrap items-center justify-center hidden px-3 overflow-hidden rounded-full space-x-2 p- md:flex bg-black/10 backdrop-blur"
          >
            <li>
              <tippy interactive>
                <RouterLink
                  to="/solutions"
                  class="px-2 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
                >
                  Solutions
                </RouterLink>
                <template #content="{ hide }">
                  <ul class="flex flex-col my-1">
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        API Design
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        API Documentation
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        API Testing
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        API Monitoring
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </tippy>
            </li>
            <li>
              <tippy interactive>
                <RouterLink
                  to="/products"
                  class="px-2 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
                >
                  Products
                </RouterLink>
                <template #content="{ hide }">
                  <ul class="flex flex-col my-1">
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/features"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Features
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/download"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Download
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/changelog"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Changelog
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/pricing"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Pricing & Plans
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </tippy>
            </li>
            <li>
              <tippy interactive>
                <RouterLink
                  to="/company"
                  class="px-2 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
                >
                  Company
                </RouterLink>
                <template #content="{ hide }">
                  <ul class="flex flex-col my-1">
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/about"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        About
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/blog"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Blog
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/careers"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Careers
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/contact"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Contact
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </tippy>
            </li>
            <li>
              <tippy interactive>
                <RouterLink
                  to="/resources"
                  class="px-2 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
                >
                  Resources
                </RouterLink>
                <template #content="{ hide }">
                  <ul class="flex flex-col my-1">
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/documentation"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Documentation
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/community"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Community
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/privacy"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Privacy Policy
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                        to="/terms"
                        @click="hide()"
                      >
                        <icon-lucide-box class="mr-3" />
                        Terms of Service
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </tippy>
            </li>
          </ul>
          <!-- Desktop sign in links -->
          <ul class="flex flex-wrap items-center justify-end flex-1">
            <li>
              <RouterLink
                class="px-2 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
                to="/sign-in"
              >
                Sign in
              </RouterLink>
            </li>
            <li class="ml-4">
              <RouterLink
                class="btn-sm text-slate-200 hover:text-white transition w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-full before:pointer-events-none"
                to="/sign-up"
              >
                <span class="relative inline-flex items-center">
                  Sign up
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
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
