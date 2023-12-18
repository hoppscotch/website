<script setup lang="ts">
  import { useScroll } from "@vueuse/gesture"
  import { useMotion } from "@vueuse/motion"

  const targetElement = ref<HTMLElement>()
  const { apply } = useMotion(targetElement)

  const scrollHeight = ref<number>(0)

  const scrollHandler = ({ xy: [, y] }: { xy: [number, number] }) => {
    scrollHeight.value = y
    if (y > 8) {
      apply({
        width: "522.2px",
        // width: "495px",
      })
    } else {
      apply({
        width: "425.5px",
        // width: "398px",
      })
    }
  }

  useScroll(scrollHandler, {
    domTarget: window,
    eventOptions: {
      passive: true,
    },
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
  <div
    ref="targetElement"
    class="items-center justify-start flex-shrink-0 hidden p-1 border rounded-full flex-nowrap md:flex border-zinc-300/10"
  >
    <div class="relative flex items-center group/nav">
      <RouterLink
        to="/download"
        class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
        @mouseenter="onTabMouseEnter"
      >
        Download
      </RouterLink>
      <RouterLink
        to="/blog"
        class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
        @mouseenter="onTabMouseEnter"
      >
        Blog
      </RouterLink>
      <RouterLink
        to="/changelog"
        class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
        @mouseenter="onTabMouseEnter"
      >
        Changelog
      </RouterLink>
      <RouterLink
        to="/pricing"
        class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
        @mouseenter="onTabMouseEnter"
      >
        Pricing
      </RouterLink>
      <!-- <RouterLink
        to="/careers"
        class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
        @mouseenter="onTabMouseEnter"
      >
        Careers
      </RouterLink> -->
      <a
        href="https://docs.hoppscotch.io"
        target="_blank"
        class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
        @mouseenter="onTabMouseEnter"
      >
        Docs
      </a>
      <div
        class="absolute h-full opacity-0 duration-200 group-hover/nav:opacity-100 -z-1"
        :style="{
          left: `${glider.left}px`,
          width: `${glider.width}px`,
        }"
      >
        <div
          class="w-full h-full border rounded-full opacity-0 duration-200 delay-200 border-zinc-50/10 bg-zinc-200/10 backdrop-blur-md group-hover/nav:opacity-100"
        ></div>
      </div>
    </div>
    <div v-if="scrollHeight > 8" class="flex overflow-hidden rounded-full">
      <a
        v-motion-slide-right
        class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm border rounded-full border-zinc-700 transition text-zinc-50 backdrop-blur-md bg-gradient-to-r from-zinc-600/30 via-zinc-700/30 to-zinc-800/30 hover:from-zinc-600/50 hover:via-zinc-700/50 hover:to-zinc-800/50"
        href="https://github.com/hoppscotch/hoppscotch"
        target="_blank"
        rel="noopener noreferrer"
      >
        Self-Host
      </a>
    </div>
  </div>
  <!-- <div
    ref="targetElement"
    class="items-center justify-start flex-shrink-0 hidden p-1 border rounded-full flex-nowrap md:flex border-zinc-300/10"
  >
    <div class="relative flex items-center group/nav">
      <tippy interactive theme="popover" class="rounded-full">
        <RouterLink
          to="/products"
          class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
          @mouseenter="onTabMouseEnter"
        >
          Products
        </RouterLink>
        <template #content="{ hide }">
          <div class="flex divide-x divide-zinc-800 w-max">
            <div class="flex flex-col p-2">
              <div
                class="mx-3 my-2 font-semibold tracking-tight text-zinc-400"
              >
                By Platform
              </div>
              <div class="flex flex-col group/navitem">
                <RouterLink
                  class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
                  to="/products/cloud"
                  @click="hide()"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                  >
                    <icon-lucide-cloudy class="w-5 h-5" />
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                    >
                      Cloud
                    </div>
                    <div
                      class="text-zinc-400 transition group-hover:text-zinc-300"
                    >
                      Seamless collaboration, effortless scalability.
                    </div>
                  </div>
                </RouterLink>
                <RouterLink
                  class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
                  to="/products/enterprise"
                  @click="hide()"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                  >
                    <icon-lucide-building-2 class="w-5 h-5" />
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                    >
                      Enterprise
                    </div>
                    <div
                      class="text-zinc-400 transition group-hover:text-zinc-300"
                    >
                      API management with unparalleled power and control.
                    </div>
                  </div>
                </RouterLink>
                <RouterLink
                  class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
                  to="/products/self-host"
                  @click="hide()"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                  >
                    <icon-lucide-server class="w-5 h-5" />
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                    >
                      Self-Host
                    </div>
                    <div
                      class="text-zinc-400 transition group-hover:text-zinc-300"
                    >
                      Harness the full potential of APIs with complete control.
                    </div>
                  </div>
                </RouterLink>
                <RouterLink
                  class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
                  to="/products/cli"
                  @click="hide()"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                  >
                    <icon-lucide-terminal-square class="w-5 h-5" />
                  </div>
                  <div class="flex flex-col">
                    <div
                      class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                    >
                      CLI
                    </div>
                    <div
                      class="text-zinc-400 transition group-hover:text-zinc-300"
                    >
                      Bring API testing and automation into CI/CD pipelines.
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="flex flex-col p-2 bg-zinc-900/90">
              <div
                class="mx-3 my-2 font-semibold tracking-tight text-zinc-400"
              >
                Explore
              </div>
              <div class="flex flex-col">
                <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
                  to="/features"
                  @click="hide()"
                >
                  <icon-lucide-sparkles class="mr-3" />
                  Features
                </RouterLink>
                <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
                  to="/download"
                  @click="hide()"
                >
                  <icon-lucide-download class="mr-3" />
                  Download
                </RouterLink>
                <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
                  to="/pricing"
                  @click="hide()"
                >
                  <icon-lucide-gem class="mr-3" />
                  Pricing
                </RouterLink>
                <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
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
          class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
          @mouseenter="onTabMouseEnter"
        >
          Solutions
        </RouterLink>
        <template #content="{ hide }">
          <div class="flex flex-col divide-y divide-zinc-800">
            <div class="flex w-max">
              <div class="flex flex-col p-2">
                <div
                  class="mx-3 my-2 font-semibold tracking-tight text-zinc-400"
                >
                  For
                </div>
                <div class="flex flex-col group/navitem">
                  <RouterLink
                    class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-zinc-800/50"
                    to="/solutions/developers"
                    @click="hide()"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                    >
                      <icon-lucide-box class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                      >
                        Developers
                      </div>
                      <div
                        class="text-zinc-400 transition group-hover:text-zinc-300"
                      >
                        Build and test APIs faster with the complete toolkit.
                      </div>
                    </div>
                  </RouterLink>
                  <RouterLink
                    class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-zinc-800/50"
                    to="/solutions/teams"
                    @click="hide()"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                    >
                      <icon-lucide-package class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                      >
                        Teams
                      </div>
                      <div
                        class="text-zinc-400 transition group-hover:text-zinc-300"
                      >
                        Build and scale your API program with confidence.
                      </div>
                    </div>
                  </RouterLink>
                  <RouterLink
                    class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-zinc-800/50"
                    to="/solutions/enterprises"
                    @click="hide()"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                    >
                      <icon-lucide-package-2 class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                      >
                        Enterprises
                      </div>
                      <div
                        class="text-zinc-400 transition group-hover:text-zinc-300"
                      >
                        Accelerate your business with the modern API platform.
                      </div>
                    </div>
                  </RouterLink>
                  <RouterLink
                    class="group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 flex items-center p-3 transition rounded-lg group hover:bg-zinc-800/50"
                    to="/solutions/education"
                    @click="hide()"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                    >
                      <icon-lucide-graduation-cap class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                      >
                        Education
                      </div>
                      <div
                        class="text-zinc-400 transition group-hover:text-zinc-300"
                      >
                        Empower students and educators with API technology.
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="flex w-max">
              <div class="flex flex-col p-2">
                <div
                  class="mx-3 my-2 font-semibold tracking-tight text-zinc-400"
                >
                  Use Cases
                </div>
                <div class="flex flex-col group/navitem">
                  <RouterLink
                    class="flex group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 items-center p-3 transition rounded-lg group hover:bg-zinc-800/50"
                    to="/solutions/cloud"
                    @click="hide()"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                    >
                      <icon-lucide-cloudy class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                      >
                        Cloud
                      </div>
                      <div
                        class="text-zinc-400 transition group-hover:text-zinc-300"
                      >
                        Seamless collaboration, effortless scalability.
                      </div>
                    </div>
                  </RouterLink>
                  <RouterLink
                    class="flex group-hover/navitem:opacity-25 group-hover/navitem:scale-95 hover:!scale-100 hover:!opacity-100 items-center p-3 transition rounded-lg group hover:bg-zinc-800/50"
                    to="/solutions/self-host"
                    @click="hide()"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
                    >
                      <icon-lucide-server class="w-5 h-5" />
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
                      >
                        Self-Host
                      </div>
                      <div
                        class="text-zinc-400 transition group-hover:text-zinc-300"
                      >
                        Harness the full potential of APIs with complete
                        control.
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="flex p-2 bg-zinc-900/90">
              <a
                class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                @click="hide()"
              >
                <icon-lucide-file-text class="mr-3" />
                Documentation
              </a>
              <a
                class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
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
          class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
          @mouseenter="onTabMouseEnter"
        >
          Company
        </RouterLink>
        <template #content="{ hide }">
          <div class="flex flex-col p-2">
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
              to="/about"
              @click="hide()"
            >
              <icon-lucide-user-circle class="mr-3" />
              About
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
              to="/blog"
              @click="hide()"
            >
              <icon-lucide-file-text class="mr-3" />
              Blog
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
              to="/careers"
              @click="hide()"
            >
              <icon-lucide-briefcase class="mr-3" />
              Careers
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
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
          class="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm border border-transparent rounded-full text-zinc-400 transition hover:text-zinc-100/80"
          @mouseenter="onTabMouseEnter"
        >
          Resources
        </RouterLink>
        <template #content="{ hide }">
          <div class="flex flex-col p-2">
            <a
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
              href="https://docs.hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
              @click="hide()"
            >
              <icon-lucide-file-text class="mr-3" />
              Documentation
            </a>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
              to="/community"
              @click="hide()"
            >
              <icon-lucide-heart class="mr-3" />
              Community
            </RouterLink>
            <RouterLink
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
              to="/brand"
              @click="hide()"
            >
              <icon-lucide-palette class="mr-3" />
              Brand
            </RouterLink>
            <a
              class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
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
          class="w-full h-full border rounded-full opacity-0 duration-200 delay-200 border-zinc-50/10 bg-zinc-200/10 backdrop-blur-md group-hover/nav:opacity-100"
        ></div>
      </div>
    </div>
    <div v-if="scrollHeight > 8" class="flex overflow-hidden rounded-full">
      <a
        v-motion-slide-right
        class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm border rounded-full border-zinc-700 transition text-zinc-50 backdrop-blur-md bg-gradient-to-r from-zinc-600/30 via-zinc-700/30 to-zinc-800/30 hover:from-zinc-600/50 hover:via-zinc-700/50 hover:to-zinc-800/50"
        href="https://github.com/hoppscotch/hoppscotch"
        target="_blank"
        rel="noopener noreferrer"
      >
        Self-Host
      </a>
    </div>
  </div> -->
</template>
