<script setup lang="ts">
const starCount = ref<number | null>(null)
const starCountErrored = ref<boolean>(false)

onMounted(async () => {
  await fetch("https://api.github.com/repos/hoppscotch/hoppscotch")
    .then((response) => response.json())
    .then((data) => (starCount.value = data.stargazers_count))
    .catch((error) => {
      starCountErrored.value = true
      console.error(error)
    })
})

const logoOptions = ref<any | null>(null)
const menuOpen = ref<boolean>(false)

const router = useRouter()

watch(router.currentRoute, () => {
  menuOpen.value = false
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-30 bg-zinc-950/5"
    :class="
      menuOpen
        ? 'bottom-0 backdrop-blur-3xl md:bottom-auto'
        : 'backdrop-blur-md'
    "
  >
    <div
      class="container flex px-4 py-4 transition after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-px after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20 sm:px-6"
      :class="{
        'h-full flex-col overflow-y-auto overscroll-contain md:overflow-y-visible':
          menuOpen,
      }"
    >
      <!-- Navigation -->
      <nav
        class="flex flex-grow"
        :class="{
          'flex-grow-0': menuOpen,
        }"
      >
        <!-- Site branding -->
        <div
          class="flex flex-1 flex-shrink-0 flex-nowrap items-center justify-start"
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
              class="inline-flex items-center justify-center rounded-full border-zinc-500/50 p-2 outline-none transition hover:scale-105 hover:border-zinc-500/80"
              to="/"
              aria-label="Hoppscotch"
              @contextmenu.prevent="logoOptions.tippy.show()"
            >
              <img
                loading="lazy"
                src="/images/logo.svg"
                alt="Hoppscotch"
                class="h-7 w-7"
              />
              <span
                class="ml-2 font-jakarta text-lg font-semibold sm:hidden lg:flex"
                >Hoppscotch</span
              >
            </RouterLink>
            <template #content="{ hide }">
              <div class="flex flex-col p-2">
                <RouterLink
                  class="flex items-center rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800/50 hover:text-zinc-50"
                  to="/images/logo.svg"
                  target="_blank"
                  download="hoppscotch-logo.svg"
                  @click="hide()"
                >
                  <icon-lucide-save class="mr-3" />
                  Save Logo
                </RouterLink>
                <!-- <RouterLink
                  class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
                  to="/brand"
                  @click="hide()"
                >
                  <icon-lucide-palette class="mr-3" />
                  Brand
                </RouterLink> -->
              </div>
            </template>
          </tippy>
        </div>
        <!-- Desktop menu links -->
        <DesktopMenuLinks />
        <!-- Desktop CTA links -->
        <div
          class="hidden flex-1 flex-shrink-0 flex-nowrap items-center justify-end gap-x-2 md:flex"
        >
          <a
            href="https://github.com/hoppscotch/hoppscotch"
            class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl px-3 py-2 text-sm text-zinc-100/80 transition hover:text-zinc-100"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-5 w-5 fill-current"
            >
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            <template v-if="starCountErrored"></template>
            <template v-else-if="starCount">
              {{
                new Intl.NumberFormat("en-GB", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(starCount)
              }}
            </template>
            <icon-lucide-loader-2 v-else class="animate-spin" />
          </a>
          <a
            href="https://hoppscotch.io"
            class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-600/20 px-3 py-2 text-sm transition hover:border-zinc-500/80 hover:bg-zinc-600/30"
            target="_blank"
          >
            Open App
          </a>
        </div>
        <!-- Mobile CTA links -->
        <div class="flex flex-1 items-center justify-end md:hidden">
          <div
            class="flex rounded-full border border-zinc-500/20 bg-white/10 backdrop-blur-md"
          >
            <button
              class="flex items-center justify-center rounded-full px-3 py-1 text-sm text-zinc-200 transition hover:text-zinc-50"
              @click="menuOpen = !menuOpen"
            >
              {{ menuOpen ? "Close" : "Menu" }}
              <icon-lucide-x v-if="menuOpen" class="ml-2" />
              <icon-lucide-menu v-else class="ml-2" />
            </button>
          </div>
        </div>
      </nav>
      <!-- Mobile menu -->
      <div v-if="menuOpen" class="flex flex-col rounded-xl md:hidden">
        <!-- Mobile CTA links -->
        <div class="my-4 flex flex-1 flex-nowrap items-center justify-end">
          <div
            class="flex rounded-full border border-zinc-500/20 bg-white/10 backdrop-blur-md"
          >
            <a
              class="flex items-center justify-center rounded-full px-3 py-1 text-sm text-zinc-200 transition hover:text-zinc-50"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-Host
            </a>
          </div>
          <div class="ml-2">
            <a
              class="group relative inline-flex w-full items-center justify-center rounded-full border border-transparent px-3 py-1 text-sm text-zinc-200 transition [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-zinc-900/30 hover:text-zinc-50"
              href="https://hoppscotch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="relative inline-flex items-center">
                Open app
                <div
                  class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
                >
                  <icon-lucide-arrow-right />
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- Mobile menu links -->
        <MobileMenuLinks />
      </div>
    </div>
  </header>
</template>
