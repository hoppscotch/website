<template>
  <header
    class="fixed top-0 z-30 w-full"
    :class="{
      'bottom-0': !isMobileMenuClosed,
    }"
  >
    <div
      class="max-w-6xl px-4 py-3 mx-auto transition"
      :class="{
        'max-md:bg-slate-950/90 overflow-y-auto h-full overscroll-contain max-md:backdrop-blur-md':
          !isMobileMenuClosed,
      }"
    >
      <!-- Desktop navigation -->
      <nav class="flex grow">
        <!-- Site branding -->
        <ul class="flex items-center flex-nowrap md:flex-1">
          <li>
            <!-- Logo -->
            <RouterLink
              class="flex items-center justify-center rounded-full"
              to="/"
              aria-label="Hoppscotch"
              data-aos="zoom-in"
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
          class="items-center justify-center hidden px-3 rounded-full space-x-2 flex-nowrap md:flex bg-black/25 backdrop-blur-md"
          data-aos="fade-down"
        >
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
                      <icon-lucide-sparkles class="mr-3" />
                      Features
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/download"
                      @click="hide()"
                    >
                      <icon-lucide-download class="mr-3" />
                      Download
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/pricing"
                      @click="hide()"
                    >
                      <icon-lucide-gem class="mr-3" />
                      Pricing
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/changelog"
                      @click="hide()"
                    >
                      <icon-lucide-scroll-text class="mr-3" />
                      Changelog
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
                      <icon-lucide-user-circle class="mr-3" />
                      About
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/blog"
                      @click="hide()"
                    >
                      <icon-lucide-file-text class="mr-3" />
                      Blog
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/careers"
                      @click="hide()"
                    >
                      <icon-lucide-briefcase class="mr-3" />
                      Careers
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/contact"
                      @click="hide()"
                    >
                      <icon-lucide-mail class="mr-3" />
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
                    <a
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      href="https://docs.hoppscotch.io"
                      @click="hide()"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <icon-lucide-file-text class="mr-3" />
                      Documentation
                    </a>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/community"
                      @click="hide()"
                    >
                      <icon-lucide-heart class="mr-3" />
                      Community
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      to="/brand"
                      @click="hide()"
                    >
                      <icon-lucide-palette class="mr-3" />
                      Brand
                    </RouterLink>
                  </li>
                  <li>
                    <a
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      href="https://shop.hoppscotch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="hide()"
                    >
                      <icon-lucide-shopping-bag class="mr-3" />
                      Shop
                    </a>
                  </li>
                </ul>
              </template>
            </tippy>
          </li>
        </ul>
        <!-- Desktop CTA links -->
        <ul
          class="items-center justify-end flex-1 hidden md:flex flex-nowrap"
          data-aos="fade-down"
        >
          <li class="flex rounded-full bg-black/25 backdrop-blur-md">
            <a
              class="flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-Host
            </a>
          </li>
          <li class="ml-2">
            <a
              class="btn-sm flex text-slate-200 hover:text-white transition w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-full before:pointer-events-none"
              href="https://hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="relative inline-flex items-center">
                Open app
                <span
                  class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
                >
                  <icon-lucide-arrow-right />
                </span>
              </span>
            </a>
          </li>
        </ul>
        <!-- Mobile CTA links -->
        <ul
          class="flex items-center justify-end flex-1 md:hidden"
          data-aos="fade-down"
        >
          <li class="flex rounded-full bg-black/25 backdrop-blur-md">
            <button
              class="flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
              @click="isMobileMenuClosed = !isMobileMenuClosed"
            >
              {{ isMobileMenuClosed ? "Menu" : "Close" }}
              <icon-lucide-menu v-if="isMobileMenuClosed" class="ml-2" />
              <icon-lucide-x v-else class="ml-2" />
            </button>
          </li>
        </ul>
      </nav>
      <!-- Mobile menu -->
      <div
        v-if="!isMobileMenuClosed"
        class="flex flex-col mt-4 md:hidden rounded-xl"
      >
        <!-- Mobile CTA links -->
        <ul
          class="flex items-center justify-end flex-1 flex-nowrap"
          data-aos="fade-left"
        >
          <li class="flex rounded-full bg-black/25 backdrop-blur-md">
            <a
              class="flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full transition text-slate-200 hover:text-white"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-Host
            </a>
          </li>
          <li class="ml-2">
            <a
              class="btn-sm flex text-slate-200 hover:text-white transition w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-full before:pointer-events-none"
              href="https://hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="relative inline-flex items-center">
                Open app
                <span
                  class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
                >
                  <icon-lucide-arrow-right />
                </span>
              </span>
            </a>
          </li>
        </ul>
        <!-- Mobile menu links -->
        <ul class="flex flex-col space-y-4 flex-nowrap">
          <li>
            <RouterLink
              to="/products"
              class="px-2 text-sm font-medium rounded transition text-slate-200 hover:text-white"
              data-aos="fade-right"
              data-aos-delay="50"
            >
              Products
            </RouterLink>
            <ul class="flex flex-col my-1">
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/features"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <icon-lucide-sparkles class="mr-3" />
                  Features
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/download"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <icon-lucide-download class="mr-3" />
                  Download
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/pricing"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <icon-lucide-gem class="mr-3" />
                  Pricing
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/changelog"
                  data-aos="fade-right"
                  data-aos-delay="250"
                >
                  <icon-lucide-scroll-text class="mr-3" />
                  Changelog
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              to="/company"
              class="px-2 text-sm font-medium rounded transition text-slate-200 hover:text-white"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Company
            </RouterLink>
            <ul class="flex flex-col my-1">
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/about"
                  data-aos="fade-right"
                  data-aos-delay="350"
                >
                  <icon-lucide-user-circle class="mr-3" />
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/blog"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <icon-lucide-file-text class="mr-3" />
                  Blog
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/careers"
                  data-aos="fade-right"
                  data-aos-delay="450"
                >
                  <icon-lucide-briefcase class="mr-3" />
                  Careers
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/contact"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <icon-lucide-mail class="mr-3" />
                  Contact
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              to="/resources"
              class="px-2 text-sm font-medium rounded transition text-slate-200 hover:text-white"
              data-aos="fade-right"
              data-aos-delay="550"
            >
              Resources
            </RouterLink>
            <ul class="flex flex-col my-1">
              <li>
                <a
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  href="https://docs.hoppscotch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <icon-lucide-file-text class="mr-3" />
                  Documentation
                </a>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/community"
                  data-aos="fade-right"
                  data-aos-delay="650"
                >
                  <icon-lucide-heart class="mr-3" />
                  Community
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/brand"
                  data-aos="fade-right"
                  data-aos-delay="700"
                >
                  <icon-lucide-palette class="mr-3" />
                  Brand
                </RouterLink>
              </li>
              <li>
                <a
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  href="https://shop.hoppscotch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-right"
                  data-aos-delay="750"
                >
                  <icon-lucide-shopping-bag class="mr-3" />
                  Shop
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
const isMobileMenuClosed = ref(true)
const router = useRouter()
watch(router.currentRoute, () => {
  isMobileMenuClosed.value = true
})
</script>
