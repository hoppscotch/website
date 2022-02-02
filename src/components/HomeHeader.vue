<script setup lang="ts">
const showMenu = ref(false)
const { t } = useI18n()
</script>

<template>
  <header class="max-h-screen top-0 z-20 sticky <md:overflow-auto">
    <nav class="bg-glass flex bg-opacity-75 transition backdrop-blur">
      <div class="flex flex-1 p-4 items-center justify-between">
        <div class="md:flex-1 md:w-0">
          <router-link
            to="/"
            class="rounded-lg py-2 px-4 inline-flex items-center focus:outline-none"
          >
            <img src="/assets/images/logo.svg" :alt="t('logo')" class="h-8 w-8 mr-4">
            <span class="uppercase font-semibold">
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
                <SmartItem
                  label="Solutions"
                />
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
                <SmartItem
                  label="Platform"
                  to="/platforms"
                />
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
                <SmartItem
                  label="Company"
                />
              </template>
              <template #content>
                <MenuCompany />
              </template>
            </tippy>
          </span>
          <SmartItem to="/pricing" :label="t('header.pricing')" />
        </nav>
        <div
          class="space-x-8 items-center justify-end hidden md:flex md:flex-1 lg:w-0"
        >
          <span>
            <ButtonPrimary to="/" :label="t('header.open')" rounded />
          </span>
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
      class="bg-primaryLight shadow-lg mx-4 p-2 transition md:hidden"
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
