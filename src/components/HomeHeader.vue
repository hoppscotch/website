<script setup lang="ts">
import x from '~icons/lucide/x'
import menu from '~icons/lucide/menu'
const showMenu = ref(false)
const { t } = useI18n()
</script>

<template>
  <header class="max-h-screen top-0 z-20 sticky <md:overflow-auto">
    <nav
      class="bg-white flex transition backdrop-blur backdrop-filter !bg-opacity-90 dark:bg-dark-900"
    >
      <div class="flex items-center justify-between flex-1 px-8 py-4">
        <div class="flex md:flex-1 md:w-0">
          <router-link
            to="/"
            class="inline-flex items-center rounded-lg text-secondaryDark focus:outline-none"
          >
            <img
              src="/assets/images/logo.svg"
              :alt="t('logo')"
              class="w-8 h-8 mr-4"
            >
            <span class="font-semibold uppercase">
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
          <SmartItem to="/pricing" :label="t('header.menu.pricing.title')" />
        </nav>
        <div
          class="items-center justify-end hidden md:flex md:flex-1 lg:w-0"
        >
          <ButtonPrimary to="/" :label="t('button.open-app')" />
        </div>
        <div class="md:hidden">
          <SmartItem :icon="showMenu ? x : menu" @click="showMenu = !showMenu" />
        </div>
      </div>
    </nav>
    <TranslateDown
      v-if="showMenu"
      class="p-2 mx-4 shadow-lg transition bg-primaryLight md:hidden"
    >
      <MenuMobile />
    </TranslateDown>
  </header>
</template>
