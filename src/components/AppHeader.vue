<script setup lang="ts">
  const logoOptions = ref<any | null>(null)
  const menuOpen = ref<boolean>(false)

  const router = useRouter()

  watch(router.currentRoute, () => {
    menuOpen.value = false
  })
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-30 bg-neutral-950/5"
    :class="
      menuOpen
        ? 'bottom-0 md:bottom-auto backdrop-blur-3xl'
        : 'backdrop-blur-md'
    "
  >
    <div
      class="container flex px-4 py-4 transition sm:px-6 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-neutral-500/20"
      :class="{
        'overflow-y-auto flex-col md:overflow-y-visible h-full overscroll-contain':
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
              class="inline-flex items-center justify-center p-2 rounded-full outline-none transition border-neutral-500/50 hover:border-neutral-500/80 hover:scale-105"
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
              <span
                class="ml-2 text-lg font-bold sm:hidden lg:flex font-jakarta"
                >Hoppscotch</span
              >
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
        <DesktopMenuLinks />
        <!-- Desktop CTA links -->
        <div
          class="items-center justify-end flex-1 flex-shrink-0 hidden md:flex flex-nowrap"
        >
          <a
            href="https://hoppscotch.io"
            class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
            target="_blank"
          >
            Open App
          </a>
        </div>
        <!-- Mobile CTA links -->
        <div class="flex items-center justify-end flex-1 md:hidden">
          <div
            class="flex border rounded-full bg-white/10 backdrop-blur-md border-neutral-500/20"
          >
            <button
              class="flex items-center justify-center px-3 py-1 text-sm rounded-full transition text-neutral-200 hover:text-neutral-50"
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
      <div v-if="menuOpen" class="flex flex-col md:hidden rounded-xl">
        <!-- Mobile CTA links -->
        <div class="flex items-center justify-end flex-1 my-4 flex-nowrap">
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
        <MobileMenuLinks />
      </div>
    </div>
  </header>
</template>
