<script setup lang="ts">
import x from "~icons/lucide/x"
import menu from "~icons/lucide/menu"
import github from "~icons/lucide/github"
import externalLink from "~icons/lucide/external-link"

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
    <nav
      class="flex"
      :class="{ 'border-dividerLight border-b bg-primary': showMenu }"
    >
      <div class="container flex items-center justify-between flex-1 px-8 py-4">
        <div class="flex md:flex-1 md:w-0">
          <SmartLink
            to="/"
            class="flex items-center justify-center rounded-full bg-primaryLight text-secondaryDark focus:outline-none"
          >
            <img
              src="/assets/images/logo.svg"
              :alt="t('logo')"
              class="w-10 h-10 rounded-full"
            />
          </SmartLink>
        </div>
        <nav
          class="hidden p-1 border rounded-full shadow-lg transition shadow-zinc-800/5 md:flex border-dividerDark bg-primary"
        >
          <span>
            <tippy
              :offset="[0, 24]"
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem
                  rounded
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
              :offset="[0, 24]"
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem
                  rounded
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
              :offset="[0, 24]"
              theme="popover"
              arrow
              interactive
              :max-width="600"
              placement="bottom"
            >
              <template #default>
                <SmartItem
                  rounded
                  :label="t('header.menu.company.title')"
                  to="/company"
                />
              </template>
              <template #content>
                <MenuCompany />
              </template>
            </tippy>
          </span>
          <SmartItem
            rounded
            :label="t('header.menu.pricing.title')"
            to="/pricing"
          />
        </nav>
        <div
          class="items-center justify-end hidden space-x-2 md:flex md:flex-1 lg:w-0"
        >
          <ButtonSecondary
            to="https://github.com/hoppscotch/hoppscotch"
            label="GitHub"
            :icon="github"
            fill
            outline
          />
          <ButtonPrimary
            to="https://hoppscotch.io"
            :label="t('action.open_app')"
            :icon="externalLink"
            outline
          />
        </div>
        <div class="md:hidden">
          <ButtonSecondary
            :icon="showMenu ? x : menu"
            outline
            fill
            @click="showMenu = !showMenu"
          />
        </div>
      </div>
    </nav>
    <MenuMobile v-if="showMenu" />
  </header>
</template>
