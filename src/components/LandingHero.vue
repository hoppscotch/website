<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { isDark } from "~/composables"
const { t } = useI18n()

onMounted(() => {
  const headlines = [...document.querySelectorAll(".interactive-font")]
  headlines.forEach((headline) => {
    const letters = headline.innerText.split("")
    headline.innerText = ""
    letters.forEach((letter: string) => {
      const span = document.createElement("span")
      span.innerHTML = letter.trim().length ? letter : "&nbsp;"
      headline.append(span)
    })
  })
})
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="sticky flex flex-col items-center top-32">
      <h1
        class="block w-full max-w-2xl mt-4 text-5xl leading-none tracking-tighter text-center transition text-secondaryDark interactive-font md:text-6xl lg:text-8xl"
      >
        {{ t("home.hero.heading") }}
      </h1>
      <h1
        class="block w-full max-w-2xl mb-4 text-5xl leading-none tracking-tighter text-center text-transparent transition bg-clip-text bg-gradient-to-r interactive-font md:text-6xl lg:text-8xl"
        :class="gradients.accent"
      >
        {{ t("home.hero.heading_line_2") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("home.hero.subheading") }}
      </p>
      <p class="flex my-4 space-x-2 text-center">
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
      </p>
      <p class="my-2 tracking-tight text-center opacity-50 text-secondaryDark">
        {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
        {{ t("home.hero.stats.3.title") }}
      </p>
    </div>
    <div
      class="relative flex p-1 mt-8 rounded bg-gradient-to-r md:rounded-xl"
      :class="gradients.accent"
    >
      <SmartGradient animate :blur="256" />
      <SmartGradient animate :blur="64" />
      <img
        class="object-cover object-center w-full h-full transition rounded shadow-2xl md:rounded-xl"
        :src="`/assets/images/screenshots/${
          isDark ? 'dark' : 'light'
        }-banner.png`"
        alt="Screenshot"
        loading="lazy"
      />
    </div>
  </div>
</template>
