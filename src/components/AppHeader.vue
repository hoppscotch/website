<script setup lang="ts">
  import { useScroll } from "@vueuse/gesture"
  import { useMotion } from "@vueuse/motion"

  const isMobileMenuClosed = ref<boolean>(true)
  const router = useRouter()

  watch(router, () => {
    isMobileMenuClosed.value = true
  })

  const targetElem = ref<HTMLElement>()
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

  useScroll(scrollHandler, {
    domTarget: window,
    eventOptions: {
      passive: true,
    },
  })

  const mask = ref<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })

  const maskStyle = computed(() => mask.value)

  const onTabMouseEnter = (e: MouseEvent) => {
    const tab = e.target as HTMLElement
    mask.value = {
      left: tab.offsetLeft,
      width: tab.clientWidth,
    }
  }
</script>

<template>
  <header
    class="fixed top-0 z-30 w-full bg-slate-950/5 backdrop-blur-md"
    :class="{
      'bottom-0': !isMobileMenuClosed,
    }"
  >
    <div
      class="container px-4 py-4 transition sm:px-6 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent"
      :class="{
        'overflow-y-auto h-full overscroll-contain': !isMobileMenuClosed,
      }"
    >
      <!-- Desktop navigation -->
      <nav class="flex grow">
        <!-- Site branding -->
        <div
          class="flex items-center justify-start flex-1 flex-shrink-0 flex-nowrap"
        >
          <!-- Logo -->
          <RouterLink
            v-motion-pop
            class="flex items-center justify-center rounded-full duration-500"
            to="/"
            aria-label="Hoppscotch"
          >
            <img
              src="/images/logo.svg"
              width="38"
              height="38"
              alt="Hoppscotch"
            />
          </RouterLink>
        </div>
        <!-- Desktop menu links -->
        <div
          ref="targetElem"
          class="items-center justify-start flex-shrink-0 hidden p-1 border rounded-full flex-nowrap md:flex border-white/10"
        >
          <div class="relative flex items-center group">
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/products"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-slate-300/75"
                @mouseenter="onTabMouseEnter"
              >
                Products
              </RouterLink>
              <template #content="{ hide }">
                <div class="flex divide-x w-max divide-slate-100">
                  <div class="flex flex-col p-2">
                    <span
                      class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
                    >
                      By Platform
                    </span>
                    <ul class="flex flex-col space-y-2">
                      <li>
                        <RouterLink
                          class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                          to="/products/cloud"
                          @click="hide()"
                        >
                          <icon-lucide-cloudy
                            class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-violet-500 w-9 aspect-square"
                          />
                          <div class="flex flex-col">
                            <span
                              class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                            >
                              Cloud
                            </span>
                            <span
                              class="text-slate-500 group-hover:text-slate-800"
                            >
                              Seamless collaboration, effortless scalability.
                            </span>
                          </div>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                          to="/products/enterprise"
                          @click="hide()"
                        >
                          <icon-lucide-building-2
                            class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-red-500 rounded-md w-9 aspect-square"
                          />
                          <div class="flex flex-col">
                            <span
                              class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                            >
                              Enterprise
                            </span>
                            <span
                              class="text-slate-500 group-hover:text-slate-800"
                            >
                              API management with unparalleled power and
                              control.
                            </span>
                          </div>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                          to="/products/self-host"
                          @click="hide()"
                        >
                          <icon-lucide-server
                            class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-blue-500 rounded-md w-9 aspect-square"
                          />
                          <div class="flex flex-col">
                            <span
                              class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                            >
                              Self-Host
                            </span>
                            <span
                              class="text-slate-500 group-hover:text-slate-800"
                            >
                              Harness the full potential of APIs with complete
                              control.
                            </span>
                          </div>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                          to="/products/cli"
                          @click="hide()"
                        >
                          <icon-lucide-terminal-square
                            class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-slate-500 w-9 aspect-square"
                          />
                          <div class="flex flex-col">
                            <span
                              class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                            >
                              CLI
                            </span>
                            <span
                              class="text-slate-500 group-hover:text-slate-800"
                            >
                              Bring API testing and automation into CI/CD
                              pipelines.
                            </span>
                          </div>
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                  <div class="flex flex-col p-2 bg-slate-50">
                    <span
                      class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
                    >
                      Explore
                    </span>
                    <ul class="flex flex-col">
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
                  </div>
                </div>
              </template>
            </tippy>
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/solutions"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-slate-300/75"
                @mouseenter="onTabMouseEnter"
              >
                Solutions
              </RouterLink>
              <template #content="{ hide }">
                <div class="flex flex-col divide-y divide-slate-100">
                  <div class="flex w-max">
                    <div class="flex flex-col p-2">
                      <span
                        class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
                      >
                        For
                      </span>
                      <ul class="flex flex-col space-y-2">
                        <li>
                          <RouterLink
                            class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                            to="/solutions/developers"
                            @click="hide()"
                          >
                            <icon-lucide-box
                              class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                            />
                            <div class="flex flex-col">
                              <span
                                class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                              >
                                Developers
                              </span>
                              <span
                                class="text-slate-500 group-hover:text-slate-800"
                              >
                                Build and test APIs faster with the complete
                                toolkit.
                              </span>
                            </div>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                            to="/solutions/teams"
                            @click="hide()"
                          >
                            <icon-lucide-package
                              class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                            />
                            <div class="flex flex-col">
                              <span
                                class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                              >
                                Teams
                              </span>
                              <span
                                class="text-slate-500 group-hover:text-slate-800"
                              >
                                Build and scale your API program with
                                confidence.
                              </span>
                            </div>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                            to="/solutions/enterprises"
                            @click="hide()"
                          >
                            <icon-lucide-package-2
                              class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                            />
                            <div class="flex flex-col">
                              <span
                                class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                              >
                                Enterprises
                              </span>
                              <span
                                class="text-slate-500 group-hover:text-slate-800"
                              >
                                Accelerate your business with the modern API
                                platform.
                              </span>
                            </div>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                            to="/solutions/education"
                            @click="hide()"
                          >
                            <icon-lucide-graduation-cap
                              class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                            />
                            <div class="flex flex-col">
                              <span
                                class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                              >
                                Education
                              </span>
                              <span
                                class="text-slate-500 group-hover:text-slate-800"
                              >
                                Empower students and educators with API
                                technology.
                              </span>
                            </div>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex w-max">
                    <div class="flex flex-col p-2">
                      <span
                        class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
                      >
                        Use Cases
                      </span>
                      <ul class="flex flex-col space-y-2">
                        <li>
                          <RouterLink
                            class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                            to="/solutions/cloud"
                            @click="hide()"
                          >
                            <icon-lucide-cloudy
                              class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-cyan-500 w-9 aspect-square"
                            />
                            <div class="flex flex-col">
                              <span
                                class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                              >
                                Cloud
                              </span>
                              <span
                                class="text-slate-500 group-hover:text-slate-800"
                              >
                                Seamless collaboration, effortless scalability.
                              </span>
                            </div>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                            to="/solutions/self-host"
                            @click="hide()"
                          >
                            <icon-lucide-server
                              class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-cyan-500 w-9 aspect-square"
                            />
                            <div class="flex flex-col">
                              <span
                                class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                              >
                                Self-Host
                              </span>
                              <span
                                class="text-slate-500 group-hover:text-slate-800"
                              >
                                Harness the full potential of APIs with complete
                                control.
                              </span>
                            </div>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex p-2 bg-slate-50">
                    <a
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      href="https://docs.hoppscotch.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="hide()"
                    >
                      <icon-lucide-file-text class="mr-3" />
                      Documentation
                    </a>
                    <a
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
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
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-slate-300/75"
                @mouseenter="onTabMouseEnter"
              >
                Company
              </RouterLink>
              <template #content="{ hide }">
                <ul class="flex flex-col p-2">
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
            <tippy interactive theme="popover" class="rounded-full">
              <RouterLink
                to="/resources"
                class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full transition text-slate-300/75"
                @mouseenter="onTabMouseEnter"
              >
                Resources
              </RouterLink>
              <template #content="{ hide }">
                <ul class="flex flex-col p-2">
                  <li>
                    <a
                      class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                      href="https://docs.hoppscotch.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="hide()"
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
            <div
              class="absolute h-full border rounded-full opacity-0 duration-200 group-hover:opacity-100 -z-1 border-white/10 bg-white/5 backdrop-blur-md"
              :style="{
                left: `${maskStyle.left}px`,
                width: `${maskStyle.width}px`,
              }"
            ></div>
          </div>
          <div
            v-if="scrollHeight > 8"
            class="flex overflow-hidden rounded-full"
          >
            <a
              v-motion-slide-right
              class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm text-white border rounded-full transition border-violet-600 backdrop-blur-md bg-gradient-to-br from-violet-600/50 via-violet-700/50 to-violet-800/50"
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
          v-motion-fade
          class="items-center justify-end flex-1 flex-shrink-0 hidden md:flex flex-nowrap"
        >
          <RouterLink
            to="/download"
            class="relative inline-flex items-center justify-center px-4 py-2 text-sm border rounded-xl hero-subtitle-gradient bg-violet-500/10 border-violet-500/50"
          >
            <span
              class="inline-flex text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-100"
            >
              Open App
            </span>
          </RouterLink>
        </div>
        <!-- Mobile CTA links -->
        <ul
          v-motion-fade
          class="flex items-center justify-end flex-1 md:hidden"
        >
          <li
            class="flex border rounded-full bg-white/10 backdrop-blur-md border-white/10"
          >
            <button
              class="flex items-center justify-center px-3 py-1 text-sm rounded-full transition text-slate-200 hover:text-white"
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
          v-motion-fade
          class="flex items-center justify-end flex-1 flex-nowrap"
        >
          <li
            class="flex border rounded-full bg-white/10 backdrop-blur-md border-white/10"
          >
            <a
              class="flex items-center justify-center px-3 py-1 text-sm rounded-full transition text-slate-200 hover:text-white"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-Host
            </a>
          </li>
          <li class="ml-2">
            <a
              class="text-sm inline-flex items-center justify-center border border-transparent rounded-full transition px-3 py-1 text-slate-200 hover:text-white w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-full before:pointer-events-none"
              href="https://hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="relative inline-flex items-center">
                Open app
                <span
                  class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
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
              v-motion-fade
              to="/products"
              class="px-2 py-1 text-sm rounded transition text-slate-200 hover:text-white"
              :delay="50"
            >
              Products
            </RouterLink>
            <div class="flex flex-col">
              <span
                class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
              >
                By Platform
              </span>
              <ul class="flex flex-col space-y-2">
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/products/cloud"
                  >
                    <icon-lucide-cloudy
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-violet-500 w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Cloud
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Seamless collaboration, effortless scalability.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/products/enterprise"
                  >
                    <icon-lucide-building-2
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-red-500 rounded-md w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Enterprise
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        API management with unparalleled power and control.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/products/self-host"
                  >
                    <icon-lucide-server
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-blue-500 rounded-md w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Self-Host
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Harness the full potential of APIs with complete
                        control.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/products/cli"
                  >
                    <icon-lucide-terminal-square
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-slate-500 w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        CLI
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Bring API testing and automation into CI/CD pipelines.
                      </span>
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <span
                class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
              >
                Explore
              </span>
              <ul class="flex-col grid grid-cols-2">
                <li>
                  <RouterLink
                    v-motion-fade
                    class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                    to="/features"
                    :delay="100"
                  >
                    <icon-lucide-sparkles class="mr-3" />
                    Features
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    v-motion-fade
                    class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                    to="/download"
                    :delay="150"
                  >
                    <icon-lucide-download class="mr-3" />
                    Download
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    v-motion-fade
                    class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                    to="/pricing"
                    :delay="200"
                  >
                    <icon-lucide-gem class="mr-3" />
                    Pricing
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    v-motion-fade
                    class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                    to="/changelog"
                    :delay="250"
                  >
                    <icon-lucide-scroll-text class="mr-3" />
                    Changelog
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <RouterLink
              v-motion-fade
              to="/solutions"
              class="px-2 py-1 text-sm rounded transition text-slate-200 hover:text-white"
              :delay="50"
            >
              Solutions
            </RouterLink>
            <div class="flex flex-col">
              <span
                class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
              >
                For
              </span>
              <ul class="flex flex-col space-y-2">
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/solutions/developers"
                  >
                    <icon-lucide-box
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Developers
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Build and test APIs faster with the complete toolkit.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/solutions/teams"
                  >
                    <icon-lucide-package
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Teams
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Build and scale your API program with confidence.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/solutions/enterprises"
                  >
                    <icon-lucide-package-2
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Enterprises
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Accelerate your business with the modern API platform.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/solutions/education"
                  >
                    <icon-lucide-graduation-cap
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white bg-green-500 rounded-md w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Education
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Empower students and educators with API technology.
                      </span>
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <span
                class="mx-4 my-2 font-semibold tracking-tight text-slate-400"
              >
                Use Cases
              </span>
              <ul class="flex flex-col space-y-2">
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/solutions/cloud"
                  >
                    <icon-lucide-cloudy
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-cyan-500 w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Cloud
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Seamless collaboration, effortless scalability.
                      </span>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="flex items-center px-4 py-2 rounded transition group hover:bg-slate-100"
                    to="/solutions/self-host"
                  >
                    <icon-lucide-server
                      class="flex flex-shrink-0 h-full p-2 mr-3 text-white rounded-md bg-cyan-500 w-9 aspect-square"
                    />
                    <div class="flex flex-col">
                      <span
                        class="text-base font-bold text-slate-700 group-hover:text-slate-950"
                      >
                        Self-Host
                      </span>
                      <span class="text-slate-500 group-hover:text-slate-800">
                        Harness the full potential of APIs with complete
                        control.
                      </span>
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="flex">
              <a
                class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icon-lucide-file-text class="mr-3" />
                Documentation
              </a>
              <a
                class="flex items-center px-4 py-2 text-sm rounded transition text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icon-lucide-github class="mr-3" />
                GitHub
              </a>
            </div>
          </li>
          <li>
            <RouterLink
              v-motion-fade
              to="/company"
              class="px-2 py-1 text-sm rounded transition text-slate-200 hover:text-white"
              :delay="300"
            >
              Company
            </RouterLink>
            <ul class="flex flex-col">
              <li>
                <RouterLink
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/about"
                  :delay="350"
                >
                  <icon-lucide-user-circle class="mr-3" />
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/blog"
                  :delay="400"
                >
                  <icon-lucide-file-text class="mr-3" />
                  Blog
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/careers"
                  :delay="450"
                >
                  <icon-lucide-briefcase class="mr-3" />
                  Careers
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/contact"
                  :delay="500"
                >
                  <icon-lucide-mail class="mr-3" />
                  Contact
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              v-motion-fade
              to="/resources"
              class="px-2 py-1 text-sm rounded transition text-slate-200 hover:text-white"
              :delay="550"
            >
              Resources
            </RouterLink>
            <ul class="flex flex-col">
              <li>
                <a
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  href="https://docs.hoppscotch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  :delay="600"
                >
                  <icon-lucide-file-text class="mr-3" />
                  Documentation
                </a>
              </li>
              <li>
                <RouterLink
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/community"
                  :delay="650"
                >
                  <icon-lucide-heart class="mr-3" />
                  Community
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  to="/brand"
                  :delay="700"
                >
                  <icon-lucide-palette class="mr-3" />
                  Brand
                </RouterLink>
              </li>
              <li>
                <a
                  v-motion-fade
                  class="flex items-center px-4 py-2 text-sm rounded transition text-slate-300 hover:text-slate-200 hover:bg-slate-950/50"
                  href="https://shop.hoppscotch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  :delay="750"
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
