<script setup lang="ts">
// const { t } = useI18n()

const showMenu = ref(false)
</script>

<template>
  <header class="sticky top-0 z-20">
    <nav class="flex transition bg-opacity-75 bg-glass backdrop-blur">
      <div class="container flex items-center justify-between max-w-6xl p-4">
        <div class="md:w-0 md:flex-1">
          <router-link
            to="/"
            class="inline-flex items-center px-4 py-2 rounded-lg focus:outline-none"
          >
            <lucide-lightbulb class="h-8" />
          </router-link>
        </div>
        <nav class="hidden md:flex">
          <span>
            <tippy
              trigger="mouseenter click focus"
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                abcd
              </template>
              <template #content>
                <MenuSolutions />
              </template>
            </tippy>
          </span>
          <span>
            <tippy
              trigger="mouseenter click focus"
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                abcd
              </template>
              <template #content>
                <MenuPlatform />
              </template>
            </tippy>
          </span>
          <span>
            <tippy
              trigger="mouseenter click focus"
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                abcd
              </template>
              <template #content>
                <MenuCompany />
              </template>
            </tippy>
          </span>
          <TabPrimary to="/pricing" label="Pricing" />
        </nav>
        <div
          class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0"
        >
          <button>
            Open App
          </button>
        </div>
        <div class="md:hidden">
          <button
            @click="showMenu = !showMenu"
          >
            <lucide-menu v-if="!showMenu" />
            <lucide-x v-else />
          </button>
        </div>
      </div>
    </nav>
    <TranslateDown
      v-if="showMenu"
      class="p-2 mx-4 transition shadow-lg bg-primaryLight md:hidden"
    >
      <MenuMobile />
    </TranslateDown>
  </header>
</template>

<style lang="scss" scoped>
.backdrop-blur {
  backdrop-filter: blur(16px);
}
</style>
