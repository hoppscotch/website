<script setup lang="ts">
import x from "~icons/lucide/x"
import menu from "~icons/lucide/menu"

const { t } = useI18n()
const router = useRouter()

const showMenu = ref(false)

router.afterEach(() => {
  showMenu.value = false
  document.querySelectorAll("div [data-tippy-root]").forEach((popup) => {
    popup.parentNode?.removeChild(popup)
  })
})

onMounted(() => {
  const navTippyLinks = document.querySelectorAll("span [data-v-tippy]")

  navTippyLinks.forEach((link: EventTarget) => {
    link.addEventListener("mouseenter", () => {
      document.querySelectorAll("div [data-tippy-root]").forEach((popup) => {
        if (
          link &&
          popup &&
          popup.parentNode &&
          link !== popup.parentNode.querySelector("span [data-v-tippy]")
        )
          popup.parentNode.removeChild(popup)
      })
    })
  })
})
</script>

<template>
  <header class="max-h-screen top-0 z-20 sticky <md:overflow-auto">
    <nav class="bg-primary flex transition">
      <div
        class="container border-dividerLight flex flex-1 py-2 px-8 items-center justify-between md:border-b"
      >
        <div class="flex md:flex-1 md:w-0">
          <SmartLink
            to="/"
            class="rounded text-secondaryDark inline-flex items-center focus:outline-none"
          >
            <img
              src="/assets/images/logo.svg"
              :alt="t('logo')"
              class="h-8 mr-4 w-8"
            />
            <span class="font-bold tracking-wide uppercase">
              {{ t("logo") }}
            </span>
          </SmartLink>
        </div>
        <nav class="space-x-2 hidden md:flex">
          <span>
            <tippy
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem
                  :label="t('header.menu.solutions.title')"
                  to="/solutions"
                />
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
                <SmartItem
                  :label="t('header.menu.platform.title')"
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
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem
                  :label="t('header.menu.company.title')"
                  to="/company"
                />
              </template>
              <template #content>
                <MenuCompany />
              </template>
            </tippy>
          </span>
          <!-- <SmartItem :label="t('header.menu.pricing.title')" to="/pricing" /> -->
        </nav>
        <div
          class="space-x-2 items-center justify-end hidden md:flex md:flex-1 lg:w-0"
        >
          <ButtonSecondary
            to="https://github.com/hoppscotch/hoppscotch"
            label="GitHub"
            outline
          />
          <ButtonPrimary
            to="https://hoppscotch.io"
            :label="t('action.open_app')"
            outline
          />
        </div>
        <div class="md:hidden">
          <ButtonSecondary
            :icon="showMenu ? x : menu"
            @click="showMenu = !showMenu"
          />
        </div>
      </div>
    </nav>
    <MenuMobile v-if="showMenu" />
  </header>
</template>
