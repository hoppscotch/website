<script setup lang="ts">
import x from '~icons/lucide/x'
import menu from '~icons/lucide/menu'
const showMenu = ref(false)
const { t } = useI18n()
</script>

<template>
  <header class="max-h-screen top-0 z-20 sticky <md:overflow-auto">
    <nav
      class="bg-white flex transition backdrop-blur backdrop-filter !bg-opacity-75 dark:bg-dark-900"
    >
      <div class="container flex items-center justify-between flex-1 px-8 py-4">
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
            <span class="font-semibold">
              {{ t("logo") }}
            </span>
          </router-link>
        </div>
        <nav class="hidden space-x-2 md:flex">
          <span>
            <tippy
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem :label="t('header.menu.solutions.title')" to="/solutions" />
              </template>
              <template #content>
                <MenuSolutions />
              </template>
            </tippy>
          </span>
          <span>
            <tippy
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem :label="t('header.menu.platform.title')" to="/platforms" />
              </template>
              <template #content>
                <MenuPlatform />
              </template>
            </tippy>
          </span>
          <span>
            <tippy
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem :label="t('header.menu.company.title')" to="/company" />
              </template>
              <template #content>
                <MenuCompany />
              </template>
            </tippy>
          </span>
          <SmartItem :label="t('header.menu.pricing.title')" to="/pricing" />
        </nav>
        <div
          class="items-center justify-end hidden space-x-4 md:flex md:flex-1 lg:w-0"
        >
          <ButtonSecondary to="https://github.com/hoppscotch/hoppscotch" blank label="GitHub" outline />
          <ButtonPrimary to="https://hoppscotch.io" :label="t('action.open_app')" outline />
        </div>
        <div class="md:hidden">
          <SmartItem :icon="showMenu ? x : menu" @click="showMenu = !showMenu" />
        </div>
      </div>
    </nav>
    <MenuMobile
      v-if="showMenu"
    />
  </header>
</template>
