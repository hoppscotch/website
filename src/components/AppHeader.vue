<script setup lang="ts">
  import { useScroll } from "@vueuse/gesture"
  import { useMotion } from "@vueuse/motion"

  const logoOptions = ref<any | null>(null)
  const isMobileMenuClosed = ref<boolean>(true)
  const router = useRouter()

  watch(router.currentRoute, () => {
    isMobileMenuClosed.value = true
  })

  const targetElem = ref<HTMLElement | null>(null)
  const { apply } = useMotion(targetElem)

  const scrollHeight = ref<number>(0)

  const scrollHandler = ({ xy: [, y] }: { xy: [number, number] }) => {
    scrollHeight.value = y
    if (y > 8) {
      apply({
        width: "495px",
      })
    } else {
      apply({
        width: "398px",
      })
    }
  }

  onMounted(() => {
    useScroll(scrollHandler, {
      domTarget: window,
      eventOptions: {
        passive: true,
      },
    })
  })

  const glider = ref<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })

  const onTabMouseEnter = (e: MouseEvent) => {
    const tab = e.target as HTMLElement
    glider.value = {
      left: tab.offsetLeft,
      width: tab.clientWidth,
    }
  }
</script>

<template>
  <header
    class="fixed top-0 z-30 w-full bg-neutral-950/5 backdrop-blur-md"
    :class="{
      'bottom-0 md:bottom-auto': !isMobileMenuClosed,
    }"
  >
    <div
      class="container px-4 py-4 transition sm:px-6 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-neutral-500/20 after:to-transparent"
      :class="{
        'overflow-y-auto md:overflow-y-visible h-full overscroll-contain':
          !isMobileMenuClosed,
      }"
    >
      <!-- Navigation -->
      <nav class="flex grow">
        <!-- Site branding -->
        <div
          class="flex items-center justify-start flex-1 flex-shrink-0 flex-nowrap"
        >
          <!-- Logo -->
          <tippy
            ref="logoOptions"
            interactive
            trigger="manual"
            theme="popover"
            class="rounded-full"
          >
            <RouterLink
              class="inline-flex items-center justify-center p-2 border rounded-full outline-none transition border-neutral-500/50 hover:border-neutral-500/80 hover:scale-110"
              to="/"
              aria-label="Hoppscotch"
              @contextmenu.prevent="logoOptions.tippy.show()"
            >
              <img
                loading="lazy"
                src="/images/logo.svg"
                alt="Hoppscotch"
                class="w-7 h-7"
              />
            </RouterLink>
            <template #content="{ hide }">
              <div class="flex flex-col p-2">
                <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-full transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                  to="/images/logo.svg"
                  target="_blank"
                  download="hoppscotch-logo.svg"
                  @click="hide()"
                >
                  <icon-lucide-save class="mr-3" />
                  Save Logo
                </RouterLink>
                <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                  to="/brand"
                  @click="hide()"
                >
                  <icon-lucide-palette class="mr-3" />
                  Brand
                </RouterLink>
              </div>
            </template>
          </tippy>
        </div>
        <!-- Desktop menu links -->
        <div
          ref="targetElem"
          class="items-center justify-start flex-shrink-0 hidden p-1 border rounded-full flex-nowrap md:flex border-neutral-300/10"
        >
          <div class="relative flex items-center group/nav">
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/products"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-neutral-200/60 hover:text-neutral-100/80"
                @mouseenter="onTabMouseEnter"
              >
                Products
              </RouterLink>
              <template #content="{ hide }">
                <div class="flex divide-x w-max divide-neutral-800">
                  <div class="flex flex-col p-2">
                    <div
                      class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
                    >
                      By Platform
                    </div>
                    <div class="flex flex-col group/navitem">
                      <RouterLink
                        class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                        to="/products/cloud"
                        @click="hide()"
                      >
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                        >
                          <icon-lucide-cloudy class="w-5 h-5" />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                          >
                            Cloud
                          </div>
                          <div
                            class="transition text-neutral-400 group-hover:text-neutral-300"
                          >
                            Seamless collaboration, effortless scalability.
                          </div>
                        </div>
                      </RouterLink>
                      <RouterLink
                        class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                        to="/products/enterprise"
                        @click="hide()"
                      >
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                        >
                          <icon-lucide-building-2 class="w-5 h-5" />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                          >
                            Enterprise
                          </div>
                          <div
                            class="transition text-neutral-400 group-hover:text-neutral-300"
                          >
                            API management with unparalleled power and control.
                          </div>
                        </div>
                      </RouterLink>
                      <RouterLink
                        class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                        to="/products/self-host"
                        @click="hide()"
                      >
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                        >
                          <icon-lucide-server class="w-5 h-5" />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                          >
                            Self-Host
                          </div>
                          <div
                            class="transition text-neutral-400 group-hover:text-neutral-300"
                          >
                            Harness the full potential of APIs with complete
                            control.
                          </div>
                        </div>
                      </RouterLink>
                      <RouterLink
                        class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                        to="/products/cli"
                        @click="hide()"
                      >
                        <div
                          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                        >
                          <icon-lucide-terminal-square class="w-5 h-5" />
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                          >
                            CLI
                          </div>
                          <div
                            class="transition text-neutral-400 group-hover:text-neutral-300"
                          >
                            Bring API testing and automation into CI/CD
                            pipelines.
                          </div>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                  <div class="flex flex-col p-2 bg-neutral-900/90">
                    <div
                      class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
                    >
                      Explore
                    </div>
                    <div class="flex flex-col">
                      <RouterLink
                        class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                        to="/features"
                        @click="hide()"
                      >
                        <icon-lucide-sparkles class="mr-3" />
                        Features
                      </RouterLink>
                      <RouterLink
                        class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                        to="/download"
                        @click="hide()"
                      >
                        <icon-lucide-download class="mr-3" />
                        Download
                      </RouterLink>
                      <RouterLink
                        class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                        to="/pricing"
                        @click="hide()"
                      >
                        <icon-lucide-gem class="mr-3" />
                        Pricing
                      </RouterLink>
                      <RouterLink
                        class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                        to="/changelog"
                        @click="hide()"
                      >
                        <icon-lucide-scroll-text class="mr-3" />
                        Changelog
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </template>
            </tippy>
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/solutions"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-neutral-200/60 hover:text-neutral-100/80"
                @mouseenter="onTabMouseEnter"
              >
                Solutions
              </RouterLink>
              <template #content="{ hide }">
                <div class="flex flex-col divide-y divide-neutral-800">
                  <div class="flex w-max">
                    <div class="flex flex-col p-2">
                      <div
                        class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
                      >
                        For
                      </div>
                      <div class="flex flex-col group/navitem">
                        <RouterLink
                          class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-neutral-800/50"
                          to="/solutions/developers"
                          @click="hide()"
                        >
                          <div
                            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                          >
                            <icon-lucide-box class="w-5 h-5" />
                          </div>
                          <div class="flex flex-col">
                            <div
                              class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                            >
                              Developers
                            </div>
                            <div
                              class="transition text-neutral-400 group-hover:text-neutral-300"
                            >
                              Build and test APIs faster with the complete
                              toolkit.
                            </div>
                          </div>
                        </RouterLink>
                        <RouterLink
                          class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-neutral-800/50"
                          to="/solutions/teams"
                          @click="hide()"
                        >
                          <div
                            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                          >
                            <icon-lucide-package class="w-5 h-5" />
                          </div>
                          <div class="flex flex-col">
                            <div
                              class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                            >
                              Teams
                            </div>
                            <div
                              class="transition text-neutral-400 group-hover:text-neutral-300"
                            >
                              Build and scale your API program with confidence.
                            </div>
                          </div>
                        </RouterLink>
                        <RouterLink
                          class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-neutral-800/50"
                          to="/solutions/enterprises"
                          @click="hide()"
                        >
                          <div
                            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                          >
                            <icon-lucide-package-2 class="w-5 h-5" />
                          </div>
                          <div class="flex flex-col">
                            <div
                              class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                            >
                              Enterprises
                            </div>
                            <div
                              class="transition text-neutral-400 group-hover:text-neutral-300"
                            >
                              Accelerate your business with the modern API
                              platform.
                            </div>
                          </div>
                        </RouterLink>
                        <RouterLink
                          class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-neutral-800/50"
                          to="/solutions/education"
                          @click="hide()"
                        >
                          <div
                            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                          >
                            <icon-lucide-graduation-cap class="w-5 h-5" />
                          </div>
                          <div class="flex flex-col">
                            <div
                              class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                            >
                              Education
                            </div>
                            <div
                              class="transition text-neutral-400 group-hover:text-neutral-300"
                            >
                              Empower students and educators with API
                              technology.
                            </div>
                          </div>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-max">
                    <div class="flex flex-col p-2">
                      <div
                        class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
                      >
                        Use Cases
                      </div>
                      <div class="flex flex-col group/navitem">
                        <RouterLink
                          class="flex group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 items-center p-3 transition rounded-lg group hover:bg-neutral-800/50"
                          to="/solutions/cloud"
                          @click="hide()"
                        >
                          <div
                            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                          >
                            <icon-lucide-cloudy class="w-5 h-5" />
                          </div>
                          <div class="flex flex-col">
                            <div
                              class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                            >
                              Cloud
                            </div>
                            <div
                              class="transition text-neutral-400 group-hover:text-neutral-300"
                            >
                              Seamless collaboration, effortless scalability.
                            </div>
                          </div>
                        </RouterLink>
                        <RouterLink
                          class="flex group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 items-center p-3 transition rounded-lg group hover:bg-neutral-800/50"
                          to="/solutions/self-host"
                          @click="hide()"
                        >
                          <div
                            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                          >
                            <icon-lucide-server class="w-5 h-5" />
                          </div>
                          <div class="flex flex-col">
                            <div
                              class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                            >
                              Self-Host
                            </div>
                            <div
                              class="transition text-neutral-400 group-hover:text-neutral-300"
                            >
                              Harness the full potential of APIs with complete
                              control.
                            </div>
                          </div>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                  <div class="flex p-2 bg-neutral-900/90">
                    <a
                      class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                      href="https://docs.hoppscotch.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="hide()"
                    >
                      <icon-lucide-file-text class="mr-3" />
                      Documentation
                    </a>
                    <a
                      class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                      href="https://github.com/hoppscotch/hoppscotch"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="hide()"
                    >
                      <icon-lucide-github class="mr-3" />
                      GitHub
                    </a>
                  </div>
                </div>
              </template>
            </tippy>
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/company"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-neutral-200/60 hover:text-neutral-100/80"
                @mouseenter="onTabMouseEnter"
              >
                Company
              </RouterLink>
              <template #content="{ hide }">
                <div class="flex flex-col p-2">
                  <RouterLink
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    to="/about"
                    @click="hide()"
                  >
                    <icon-lucide-user-circle class="mr-3" />
                    About
                  </RouterLink>
                  <RouterLink
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    to="/blog"
                    @click="hide()"
                  >
                    <icon-lucide-file-text class="mr-3" />
                    Blog
                  </RouterLink>
                  <RouterLink
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    to="/careers"
                    @click="hide()"
                  >
                    <icon-lucide-briefcase class="mr-3" />
                    Careers
                  </RouterLink>
                  <RouterLink
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    to="/contact"
                    @click="hide()"
                  >
                    <icon-lucide-mail class="mr-3" />
                    Contact
                  </RouterLink>
                </div>
              </template>
            </tippy>
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/resources"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-neutral-200/60 hover:text-neutral-100/80"
                @mouseenter="onTabMouseEnter"
              >
                Resources
              </RouterLink>
              <template #content="{ hide }">
                <div class="flex flex-col p-2">
                  <a
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    href="https://docs.hoppscotch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="hide()"
                  >
                    <icon-lucide-file-text class="mr-3" />
                    Documentation
                  </a>
                  <RouterLink
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    to="/community"
                    @click="hide()"
                  >
                    <icon-lucide-heart class="mr-3" />
                    Community
                  </RouterLink>
                  <RouterLink
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    to="/brand"
                    @click="hide()"
                  >
                    <icon-lucide-palette class="mr-3" />
                    Brand
                  </RouterLink>
                  <a
                    class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
                    href="https://shop.hoppscotch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="hide()"
                  >
                    <icon-lucide-shopping-bag class="mr-3" />
                    Shop
                  </a>
                </div>
              </template>
            </tippy>
            <div
              class="absolute h-full opacity-0 duration-200 group-hover/nav:opacity-100 -z-1"
              :style="{
                left: `${glider.left}px`,
                width: `${glider.width}px`,
              }"
            >
              <div
                class="w-full h-full border rounded-full opacity-0 duration-200 delay-200 border-neutral-50/10 bg-neutral-200/10 backdrop-blur-md group-hover/nav:opacity-100"
              ></div>
            </div>
          </div>
          <div
            v-if="scrollHeight > 8"
            class="flex overflow-hidden rounded-full"
          >
            <a
              v-motion-slide-right
              class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm border rounded-full transition text-neutral-50 border-neutral-600 backdrop-blur-md bg-gradient-to-br from-neutral-600/30 via-neutral-700/30 to-neutral-800/30 hover:from-neutral-600/50 hover:via-neutral-700/50 hover:to-neutral-800/50"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-Host
            </a>
          </div>
        </div>
        <!-- Desktop CTA links -->
        <div
          class="items-center justify-end flex-1 flex-shrink-0 hidden md:flex flex-nowrap"
        >
          <RouterLink
            to="/download"
            class="relative inline-flex items-center justify-center px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
          >
            Open App
          </RouterLink>
        </div>
        <!-- Mobile CTA links -->
        <div class="flex items-center justify-end flex-1 md:hidden">
          <div
            class="flex border rounded-full bg-white/10 backdrop-blur-md border-neutral-500/20"
          >
            <button
              class="flex items-center justify-center px-3 py-1 text-sm rounded-full transition text-neutral-200 hover:text-neutral-50"
              @click="isMobileMenuClosed = !isMobileMenuClosed"
            >
              {{ isMobileMenuClosed ? "Menu" : "Close" }}
              <icon-lucide-menu v-if="isMobileMenuClosed" class="ml-2" />
              <icon-lucide-x v-else class="ml-2" />
            </button>
          </div>
        </div>
      </nav>
      <!-- Mobile menu -->
      <div
        v-if="!isMobileMenuClosed"
        class="flex flex-col mt-4 md:hidden rounded-xl"
      >
        <!-- Mobile CTA links -->
        <div class="flex items-center justify-end flex-1 flex-nowrap">
          <div
            class="flex border rounded-full bg-white/10 backdrop-blur-md border-neutral-500/20"
          >
            <a
              class="flex items-center justify-center px-3 py-1 text-sm rounded-full transition text-neutral-200 hover:text-neutral-50"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-Host
            </a>
          </div>
          <div class="ml-2">
            <a
              class="text-sm inline-flex items-center justify-center border border-transparent rounded-full transition px-3 py-1 text-neutral-200 hover:text-neutral-50 w-full group [background:linear-gradient(theme(colors.neutral.900),_theme(colors.neutral.900))_padding-box,_conic-gradient(theme(colors.neutral.400),_theme(colors.neutral.700)_25%,_theme(colors.neutral.700)_75%,_theme(colors.neutral.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-neutral-900/30 before:rounded-full before:pointer-events-none"
              href="https://hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="relative inline-flex items-center">
                Open app
                <div
                  class="text-neutral-500 group-hover:translate-x-0.5 transition-transform ml-1"
                >
                  <icon-lucide-arrow-right />
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- Mobile menu links -->
        <div class="flex flex-col space-y-4 flex-nowrap">
          <RouterLink
            to="/products"
            class="px-2 py-1 text-sm rounded-lg transition text-neutral-200 hover:text-neutral-50"
          >
            Products
          </RouterLink>
          <div class="flex flex-col">
            <div
              class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
            >
              By Platform
            </div>
            <div class="flex flex-col">
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/products/cloud"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-cloudy class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Cloud
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Seamless collaboration, effortless scalability.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/products/enterprise"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-building-2 class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Enterprise
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    API management with unparalleled power and control.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/products/self-host"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-server class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Self-Host
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Harness the full potential of APIs with complete control.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/products/cli"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-terminal-square class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    CLI
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Bring API testing and automation into CI/CD pipelines.
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
            >
              Explore
            </div>
            <div class="flex-col grid grid-cols-2">
              <RouterLink
                class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
                to="/features"
              >
                <icon-lucide-sparkles class="mr-3" />
                Features
              </RouterLink>
              <RouterLink
                class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
                to="/download"
              >
                <icon-lucide-download class="mr-3" />
                Download
              </RouterLink>
              <RouterLink
                class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
                to="/pricing"
              >
                <icon-lucide-gem class="mr-3" />
                Pricing
              </RouterLink>
              <RouterLink
                class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
                to="/changelog"
              >
                <icon-lucide-scroll-text class="mr-3" />
                Changelog
              </RouterLink>
            </div>
          </div>
          <RouterLink
            to="/solutions"
            class="px-2 py-1 text-sm rounded-lg transition text-neutral-200 hover:text-neutral-50"
          >
            Solutions
          </RouterLink>
          <div class="flex flex-col">
            <div
              class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
            >
              For
            </div>
            <div class="flex flex-col">
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/solutions/developers"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-box class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Developers
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Build and test APIs faster with the complete toolkit.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/solutions/teams"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-package class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Teams
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Build and scale your API program with confidence.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/solutions/enterprises"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-package-2 class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Enterprises
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Accelerate your business with the modern API platform.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/solutions/education"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-graduation-cap class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Education
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Empower students and educators with API technology.
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="mx-3 my-2 font-semibold tracking-tight text-neutral-400"
            >
              Use Cases
            </div>
            <div class="flex flex-col">
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/solutions/cloud"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-cloudy class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Cloud
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Seamless collaboration, effortless scalability.
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                class="flex items-center p-3 rounded-lg transition group hover:bg-neutral-800/50"
                to="/solutions/self-host"
              >
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-neutral-500 bg-gradient-to-br from-neutral-950 to-neutral-950/80"
                >
                  <icon-lucide-server class="w-5 h-5" />
                </div>
                <div class="flex flex-col">
                  <div
                    class="text-base font-bold transition text-neutral-100 group-hover:text-neutral-50"
                  >
                    Self-Host
                  </div>
                  <div
                    class="transition text-neutral-400 group-hover:text-neutral-300"
                  >
                    Harness the full potential of APIs with complete control.
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="flex">
            <a
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
              href="https://docs.hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-lucide-file-text class="mr-3" />
              Documentation
            </a>
            <a
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800/50"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-lucide-github class="mr-3" />
              GitHub
            </a>
          </div>
          <RouterLink
            to="/company"
            class="px-2 py-1 text-sm rounded-lg transition text-neutral-200 hover:text-neutral-50"
          >
            Company
          </RouterLink>
          <div class="flex flex-col">
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              to="/about"
            >
              <icon-lucide-user-circle class="mr-3" />
              About
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              to="/blog"
            >
              <icon-lucide-file-text class="mr-3" />
              Blog
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              to="/careers"
            >
              <icon-lucide-briefcase class="mr-3" />
              Careers
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              to="/contact"
            >
              <icon-lucide-mail class="mr-3" />
              Contact
            </RouterLink>
          </div>
          <RouterLink
            to="/resources"
            class="px-2 py-1 text-sm rounded-lg transition text-neutral-200 hover:text-neutral-50"
          >
            Resources
          </RouterLink>
          <div class="flex flex-col">
            <a
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              href="https://docs.hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-lucide-file-text class="mr-3" />
              Documentation
            </a>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              to="/community"
            >
              <icon-lucide-heart class="mr-3" />
              Community
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              to="/brand"
            >
              <icon-lucide-palette class="mr-3" />
              Brand
            </RouterLink>
            <a
              class="flex items-center px-3 py-2 text-sm rounded-lg transition text-neutral-200/80 hover:text-neutral-200 hover:bg-neutral-950/50"
              href="https://shop.hoppscotch.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon-lucide-shopping-bag class="mr-3" />
              Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
