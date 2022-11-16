<script setup lang="ts">
import { gradients } from '~/assets/data/gradients'
import { isDark } from '~/composables'
const { t } = useI18n()

onMounted(() => {
  const headlines = [...document.querySelectorAll('.interactive-font')]
  headlines.forEach((headline) => {
    const letters = headline.innerText.split('')
    headline.innerText = ''
    letters.forEach((letter: string) => {
      const span = document.createElement('span')
      span.innerHTML = letter.trim().length ? letter : '&nbsp;'
      headline.append(span)
    })
  })
})
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="mt-4 text-center text-secondaryDark leading-none tracking-tighter w-full max-w-2xl transition text-5xl block interactive-font md:text-6xl lg:text-7xl"
      >
        {{ t("home.hero.heading") }}
      </h1>
      <h1
        class="bg-clip-text bg-gradient-to-r text-center text-transparent mb-4 leading-none tracking-tighter w-full max-w-2xl transition text-5xl block interactive-font md:text-6xl lg:text-7xl"
        :class="gradients.accent"
      >
        {{ t("home.hero.heading_line_2") }}
      </h1>
      <p class="max-w-md my-4 text-xl text-center tracking-tighter md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex space-x-2 my-4 text-center">
        <ButtonSecondary to="https://github.com/hoppscotch/hoppscotch" label="GitHub" outline />
        <ButtonPrimary to="https://hoppscotch.io" :label="t('action.open_app')" outline />
      </p>
      <p class="my-2 text-center text-secondaryDark opacity-50">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp; {{ t("home.hero.stats.3.title") }}
      </p>
      <div
        class="bg-gradient-to-r rounded flex mt-8 p-1 relative md:rounded-xl"
        :class="gradients.accent"
      >
        <SmartGradient animate :blur="256" />
        <SmartGradient animate :blur="64" />
        <img
          class="rounded h-full object-cover object-center w-full transition shadow-2xl md:rounded-xl"
          :src="`/assets/images/screenshots/${isDark ? 'dark' : 'light'}-banner.png`"
          alt="Screenshot"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
