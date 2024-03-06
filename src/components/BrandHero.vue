<script setup lang="ts">
const colors = {
  primary: "#A855F7",
  secondary: "#020617",
  tertiary: "#64748B",
}

const clipboardConfig = {
  primary: useClipboard({ source: colors.primary }),
  secondary: useClipboard({ source: colors.secondary }),
  tertiary: useClipboard({ source: colors.tertiary }),
}

const { copy: copyPrimaryColor, copied: copiedPrimaryColor } =
  clipboardConfig.primary

const { copy: copySecondaryColor, copied: copiedSecondaryColor } =
  clipboardConfig.secondary

const { copy: copyTertiaryColor, copied: copiedTertiaryColor } =
  clipboardConfig.tertiary
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Brand
          </h2>
          <p class="text-zinc-400/80">Our brand assets and guidelines.</p>
          <p class="mt-4 text-sm">
            <SubscribeToUpdates />
            <span class="mx-4 text-zinc-400/20">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded text-zinc-400/60 transition hover:text-zinc-400/80"
              >Follow us on Twitter</a
            >
          </p>
          <p class="mt-8 text-sm">
            <RouterLink
              class="group inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-white/80 via-white to-white/80 px-3 py-1 text-sm text-zinc-950 transition hover:bg-white"
              to="/download"
            >
              Download Brand Assets
              <span
                class="ml-1 text-zinc-500 transition-transform group-hover:translate-x-0.5"
              >
                <icon-lucide-arrow-right />
              </span>
            </RouterLink>
          </p>
        </div>
        <div class="space-y-12">
          <!-- Naming -->
          <div>
            <h4 class="mt-8">Naming</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              "Hoppscotch" is a single word, always spelled with a capital "H".
              It is the brand name of both our company and our application (not
              Hoppscotch app"). When referring to dedicated releases from
              Hoppscotch, we ask that you capitalize them as proper nouns (e.g.
              "Hoppscotch Cloud, Hoppscotch Enterprise, Hoppscotch CLI).
            </p>
          </div>
          <!-- Usage -->
          <div>
            <h4 class="mt-8">Usage</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              Provide plenty of space around Hoppscotch assets. Make them big or
              make them small, but give them room to breathe. They shouldn't
              feel cramped or cluttered.
            </p>
          </div>
          <!-- Wordmark -->
          <div>
            <h4 class="mt-8">Wordmark</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              The Hoppscotch wordmark should be used in all references to
              Hoppscotch as space allows. Monochrome usage is preferred with the
              brand colors below.
            </p>
            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-900 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/wordmark-primary-light.svg"
                    alt="Hoppscotch Primary"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Wordmark Primary
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-950 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/wordmark-primary-light.svg"
                    alt="Hoppscotch Primary Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Wordmark Primary Light
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-white p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/wordmark-primary-dark.svg"
                    alt="Hoppscotch Primary Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Wordmark Primary Dark
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-900 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/wordmark-monochrome-light.svg"
                    alt="Hoppscotch Monochrome"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Wordmark Monochrome
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-950 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/wordmark-monochrome-light.svg"
                    alt="Hoppscotch Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Wordmark Monochrome Light
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-white p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/wordmark-monochrome-dark.svg"
                    alt="Hoppscotch Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Wordmark Monochrome Dark
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
            </div>
          </div>
          <!-- Logo -->
          <div>
            <h4 class="mt-8">Logo</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              For tight layouts or logo-only grids, the Hoppscotch logomark is a
              concise way to refer to Hoppscotch. Use with good judgment for
              your audience, as the Hoppscotch wordmark has stronger brand
              recognition.
            </p>
            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-900 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/logo-primary-light.svg"
                    alt="Hoppscotch Primary"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Logo Primary
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-950 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/logo-primary-light.svg"
                    alt="Hoppscotch Primary Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Logo Primary Light
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-white p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/logo-primary-dark.svg"
                    alt="Hoppscotch Primary Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Logo Primary Dark
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-900 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/logo-monochrome-light.svg"
                    alt="Hoppscotch Monochrome"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Logo Monochrome
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-950 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/logo-monochrome-light.svg"
                    alt="Hoppscotch Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Logo Monochrome Light
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-white p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/logo-monochrome-dark.svg"
                    alt="Hoppscotch Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Logo Monochrome Dark
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
            </div>
          </div>
          <!-- Icon -->
          <div>
            <h4 class="mt-8">Icon</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              When referring to Hoppscotch as a company, such as on social
              media, or where a "chip" design is required, it is acceptable to
              use this stylized icon with an appropriate corner radius.
            </p>
            <div class="mt-8 grid grid-cols-1 gap-8">
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-900 p-8"
                >
                  <img
                    loading="lazy"
                    src="/images/icon-primary.svg"
                    alt="Hoppscotch Primary"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Icon Primary
                  <button><icon-lucide-arrow-down-to-line /></button>
                </p>
              </div>
            </div>
          </div>
          <!-- Colors -->
          <div>
            {{ copiedPrimaryColor }}
            <h4 class="mt-8">Colors</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              Hoppscotch's color palette is inspired by the colors of the
              internet. The primary color is Hoppscotch slate, which should be
              used sparingly for emphasis. The secondary color is Hoppscotch
              Slate, which is used for backgrounds and borders. The tertiary
              color is Hoppscotch slate, which is used for text and icons.
            </p>
            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-500 p-8"
                >
                  #A855F7
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Primary color
                  <button
                    v-tippy="{
                      content: copiedPrimaryColor
                        ? 'Copied!'
                        : 'Copy color code',
                      theme: 'tooltip',
                    }"
                    @click="copyPrimaryColor(colors.primary)"
                  >
                    <icon-lucide-copy v-if="!copiedPrimaryColor" />
                    <icon-lucide-check v-else />
                  </button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-950 p-8"
                >
                  #020617
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Secondary color
                  <button
                    v-tippy="{
                      content: copiedSecondaryColor
                        ? 'Copied!'
                        : 'Copy color code',
                      theme: 'tooltip',
                    }"
                    @click="copySecondaryColor(colors.secondary)"
                  >
                    <icon-lucide-copy v-if="!copiedSecondaryColor" />
                    <icon-lucide-check v-else />
                  </button>
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex h-64 items-center justify-center rounded-t-xl border border-zinc-500/20 bg-zinc-500 p-8"
                >
                  #64748B
                </div>
                <p
                  class="flex items-center justify-between rounded-b-xl border-x border-b border-zinc-500/20 bg-black/10 px-4 py-3 text-sm"
                >
                  Tertiary color
                  <button
                    v-tippy="{
                      content: copiedTertiaryColor
                        ? 'Copied!'
                        : 'Copy color code',
                      theme: 'tooltip',
                    }"
                    @click="copyTertiaryColor(colors.tertiary)"
                  >
                    <icon-lucide-copy v-if="!copiedTertiaryColor" />
                    <icon-lucide-check v-else />
                  </button>
                </p>
              </div>
            </div>
          </div>
          <!-- Typography -->
          <div>
            <h4 class="mt-8">Typography</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              Hoppscotch uses the "Inter" typeface for all marketing and product
              design. Inter is a variable font, which means that it can be
              adjusted to a wide range of weights and widths. The font is
              available for free on
              <a
                href="https://fonts.google.com/specimen/Inter"
                target="_blank"
                rel="noopener noreferrer"
                class="text-zinc-500 transition hover:underline"
                >Google Fonts</a
              >.
            </p>
            <div class="mt-8 flex flex-col space-y-4">
              <p>The quick brown fox jumps over a lazy dog.</p>
              <h4>The quick brown fox jumps over a lazy dog.</h4>
              <h3>The quick brown fox jumps over a lazy dog.</h3>
              <h2>The quick brown fox jumps over a lazy dog.</h2>
              <h1>The quick brown fox jumps over a lazy dog.</h1>
            </div>
          </div>
          <!-- Iconography -->
          <div>
            <h4 class="mt-8">Iconography</h4>
            <p class="mt-2 max-w-4xl text-zinc-400/80">
              Hoppscotch uses the "Lucide" icon set for all marketing and
              product design. Lucide is a set of 1,000+ open-source icons that
              are free to use. The icon set is available for free on
              <a
                href="https://lucide.dev"
                target="_blank"
                rel="noopener noreferrer"
                class="text-zinc-500 transition hover:underline"
                >Lucide.dev</a
              >.
            </p>
            <div class="mt-8 grid grid-cols-6 gap-8 md:grid-cols-12">
              <span class="flex items-center justify-center">
                <icon-lucide-accessibility />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-baby />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-battery />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-cake />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-database />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-ear />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-fingerprint />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-gift />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-hammer />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-ice-cream />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-japanese-yen />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-key />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-laptop />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-magnet />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-navigation />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-octagon />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-paint-bucket />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-qr-code />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-rocket />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-sun />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-trophy />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-umbrella />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-vegan />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-wifi />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-x />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-youtube />
              </span>
              <span class="flex items-center justify-center">
                <icon-lucide-zap />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
