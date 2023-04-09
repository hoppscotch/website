<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import github from "~icons/lucide/github"
import arrowRight from "~icons/lucide/arrow-right"

const { t } = useI18n()

const {L} = useBreakpoints({
  L: 720,
})
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grainy-gradient relative z-1 flex flex-col items-center">
      <LandingAnnouncement />
      <div
        class="grainy-text max-w-4xl mt-4 mb-4 text-5xl tracking-tighter text-center text-transparent transition bg-clip-text md:text-6xl lg:text-8xl"
      >
        {{ t("home.hero.heading") }}
      </div>
      <div class="flex flex-col items-center">
        <div
          class="my-4 text-xl md:text-2xl tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
          :class="gradients.gray"
        >
          {{ t("home.hero.subheading") }}
        </div>
        <div class="flex my-4 text-center space-x-2">
          <ButtonSecondary
            to="https://github.com/hoppscotch/hoppscotch"
            :label="t('action.self_host')"
            :icon="github"
            :large="L ? true : false"
            outline
            fill
          />
          <ButtonPrimary
            to="https://hoppscotch.io"
            :label="t('action.get_started')"
            :icon="arrowRight"
            reverse
            :large="L ? true : false"
            outline
          />
        </div>
        <div
          class="my-2 tracking-tight text-center opacity-50 text-secondaryDark"
        >
          {{ t("home.hero.stats.1.title") }} &nbsp; • &nbsp;
          {{ t("home.hero.stats.2.title") }} &nbsp; • &nbsp;
          {{ t("home.hero.stats.3.title") }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@property --bg-1-x {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --bg-2-x {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --bg-2-y {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --bg-3-x {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --bg-3-y {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
:root {
  --shadow-size: max(140px, 30vw);
  --shadow-size-fallback: 30vw;
  --shadow-blur: 80;
  --color-1: #6328da;
  --color-2: #ff1bf1;
  --color-3: #008cea;
}
@supports (color: color(display-p3 1 1 1)) {
  :root {
    --color-1: color(display-p3 0.36 0.17 0.82);
    --color-2: color(display-p3 0.95 0.04 0.95);
    --color-3: color(display-p3 0.01 0.53 0.99);
  }
}
.grainy-gradient:before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(
      circle var(--shadow-size, var(--shadow-size-fallback)) at 20vw 0,
      var(--color-1, red) 100%,
      transparent 0
    ),
    radial-gradient(
      circle var(--shadow-size, var(--shadow-size-fallback)) at 100vw 0,
      var(--color-2, red) 100%,
      transparent 0
    ),
    radial-gradient(
      circle calc(var(--shadow-size, var(--shadow-size-fallback)) * 1.2) at 50vw
        115vh,
      var(--color-3, red) 100%,
      transparent 0
    );
  top: 0;
  left: 0;
  opacity: 0.45;
  filter: blur(calc(var(--shadow-blur) * 1px));
  mix-blend-mode: hue;
}
.grainy-text {
  mix-blend-mode: lighten;
  background-image: conic-gradient(
      from 140deg at calc(var(--bg-1-x) * 1%) 100%,
      hsl(30deg 100% 5%),
      hsl(238deg 100% 5%),
      hsl(60deg 100% 99%),
      hsl(248deg 100% 31%),
      hsl(315deg 64% 51%),
      hsl(25deg 95% 61%),
      hsl(55deg 100% 75%),
      hsl(60deg 100% 99%),
      hsl(199deg 94% 74%),
      hsl(236deg 95% 28%),
      hsl(244deg 100% 4%)
    ),
    radial-gradient(
      ellipse at calc(var(--bg-2-x) * 1%) calc(var(--bg-2-y) * 1%),
      white 12%,
      transparent 35%
    ),
    radial-gradient(
      ellipse at calc(var(--bg-3-x) * 1%) calc(var(--bg-3-y) * 1%),
      hsl(212deg 94% 68%),
      transparent 35%
    );
  background-repeat: repeat;
  background-size: contain;
  background-blend-mode: color-burn;
  animation: bg 20s linear infinite alternate;
}

@keyframes bg {
  0% {
    --bg-1-x: calc(50 / 2);
    --bg-2-y: calc(80 / 2);
    --bg-2-x: calc(70 / 2);
    --bg-3-y: calc(40 / 2);
    --bg-3-x: calc(90 / 2);
  }

  25% {
    --bg-1-x: 30;
    --bg-2-y: 50;
    --bg-2-x: 80;
    --bg-3-y: 20;
    --bg-3-x: 70;
  }

  50% {
    --bg-1-x: 10;
    --bg-2-y: 40;
    --bg-2-x: 30;
    --bg-3-y: 80;
    --bg-3-x: 50;
  }

  75% {
    --bg-1-x: 70;
    --bg-2-y: 10;
    --bg-2-x: 50;
    --bg-3-y: 30;
    --bg-3-x: 40;
  }

  100% {
    --bg-1-x: calc(50 / 2);
    --bg-2-y: calc(80 / 2);
    --bg-2-x: calc(70 / 2);
    --bg-3-y: calc(40 / 2);
    --bg-3-x: calc(90 / 2);
  }
}
</style>
