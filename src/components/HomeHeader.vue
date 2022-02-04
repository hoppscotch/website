<script setup lang="ts">
const showMenu = ref(false)
const { t } = useI18n()
</script>

<template>
  <header class="max-h-screen top-0 z-20 sticky <md:overflow-auto">
    <nav
      class="flex transition backdrop-blur backdrop-filter"
    >
      <div class="flex items-center justify-between flex-1 p-4">
        <div class="md:flex-1 md:w-0">
          <router-link
            to="/"
            class="inline-flex items-center px-4 py-2 rounded-lg focus:outline-none"
          >
            <img
              src="/assets/images/logo.svg"
              :alt="t('logo')"
              class="w-8 h-8 mr-4"
            >
            <span class="font-semibold">
              {{ t("logo") }}
            </span>
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
                <SmartItem label="Solutions" />
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
                <SmartItem label="Platform" to="/platforms" />
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
                <SmartItem label="Company" />
              </template>
              <template #content>
                <MenuCompany />
              </template>
            </tippy>
          </span>
          <SmartItem to="/pricing" :label="t('header.pricing')" />
        </nav>
        <div
          class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0"
        >
          <span>
            <ButtonPrimary to="/" :label="t('header.open')" rounded />
          </span>
        </div>
        <div class="md:hidden">
          <button @click="showMenu = !showMenu">
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
