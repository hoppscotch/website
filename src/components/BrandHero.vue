<template>
  <section class="relative">
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blurred shape -->
      <div
        class="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none blur-2xl opacity-70 -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/400/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs4-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#A855F7" />
              <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fill-rule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          />
        </svg>
      </div>
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="pb-12 md:pb-20">
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Brand
          </h2>
          <p class="text-lg text-slate-400">Our brand assets and guidelines.</p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-slate-800">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
              >Follow us on Twitter</a
            >
          </p>
          <p class="mt-8 text-sm">
            <RouterLink
              class="transition btn text-slate-950 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
              to="/download"
            >
              Download Brand Assets
              <span
                class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform ml-1"
              >
                <icon-lucide-arrow-right />
              </span>
            </RouterLink>
          </p>
        </div>
        <div class="space-y-8">
          <!-- Naming -->
          <div>
            <h4 class="h4">Naming</h4>
            <p class="max-w-3xl mt-2">
              "Hoppscotch" is a single word, always spelled with a capital "H".
              It is the brand name of both our company and our application (not
              Hoppscotch app"). When referring to dedicated releases from
              Hoppscotch, we ask that you capitalize them as proper nouns (e.g.
              "Hoppscotch Cloud, Hoppscotch Enterprise, Hoppscotch CLI).
            </p>
          </div>
          <!-- Usage -->
          <div>
            <h4 class="h4">Usage</h4>
            <p class="max-w-3xl mt-2">
              Provide plenty of space around Hoppscotch assets. Make them big or
              make them small, but give them room to breathe. They shouldn't
              feel cramped or cluttered.
            </p>
          </div>
          <!-- Wordmark -->
          <div>
            <h4 class="h4">Wordmark</h4>
            <p class="max-w-3xl mt-2">
              The Hoppscotch wordmark should be used in all references to
              Hoppscotch as space allows. Monochrome usage is preferred with the
              brand colors below.
            </p>
            <div class="py-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-900 border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/wordmark-primary-light.svg"
                    alt="Hoppscotch Primary"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Wordmark Primary
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border border-white/10 bg-gray-950 rounded-t-xl"
                >
                  <img
                    src="/images/wordmark-primary-light.svg"
                    alt="Hoppscotch Primary Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Wordmark Primary Light
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 bg-white border border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/wordmark-primary-dark.svg"
                    alt="Hoppscotch Primary Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Wordmark Primary Dark
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-900 border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/wordmark-monochrome-light.svg"
                    alt="Hoppscotch Monochrome"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Wordmark Monochrome
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border border-white/10 bg-gray-950 rounded-t-xl"
                >
                  <img
                    src="/images/wordmark-monochrome-light.svg"
                    alt="Hoppscotch Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Wordmark Monochrome Light <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 bg-white border border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/wordmark-monochrome-dark.svg"
                    alt="Hoppscotch Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Wordmark Monochrome Dark
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
            </div>
          </div>
          <!-- Logo -->
          <div>
            <h4 class="h4">Logo</h4>
            <p class="max-w-3xl mt-2">
              For tight layouts or logo-only grids, the Hoppscotch logomark is a
              concise way to refer to Hoppscotch. Use with good judgment for
              your audience, as the Hoppscotch wordmark has stronger brand
              recognition.
            </p>
            <div class="py-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-900 border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/logo-primary-light.svg"
                    alt="Hoppscotch Primary"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Logo Primary
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border border-white/10 bg-gray-950 rounded-t-xl"
                >
                  <img
                    src="/images/logo-primary-light.svg"
                    alt="Hoppscotch Primary Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Logo Primary Light
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 bg-white border border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/logo-primary-dark.svg"
                    alt="Hoppscotch Primary Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Logo Primary Dark
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-900 border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/logo-monochrome-light.svg"
                    alt="Hoppscotch Monochrome"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Logo Monochrome
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border border-white/10 bg-gray-950 rounded-t-xl"
                >
                  <img
                    src="/images/logo-monochrome-light.svg"
                    alt="Hoppscotch Light"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Logo Monochrome Light <icon-lucide-arrow-down-to-line />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 bg-white border border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/logo-monochrome-dark.svg"
                    alt="Hoppscotch Dark"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Logo Monochrome Dark
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
            </div>
          </div>
          <!-- Icon -->
          <div>
            <h4 class="h4">Icon</h4>
            <p class="max-w-3xl mt-2">
              When referring to Hoppscotch as a company, such as on social
              media, or where a "chip" design is required, it is acceptable to
              use this stylized icon with an appropriate corner radius.
            </p>
            <div class="py-8 grid grid-cols-1 gap-8">
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-900 border-white/10 rounded-t-xl"
                >
                  <img
                    src="/images/icon-primary.svg"
                    alt="Hoppscotch Primary"
                    class="h-16"
                  />
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Icon Primary
                  <icon-lucide-arrow-down-to-line />
                </p>
              </div>
            </div>
          </div>
          <!-- Colors -->
          <div>
            <h4 class="h4">Colors</h4>
            <p class="max-w-3xl mt-2">
              Hoppscotch’s color palette is inspired by the colors of the
              internet. The primary color is Hoppscotch Purple, which should be
              used sparingly for emphasis. The secondary color is Hoppscotch
              Slate, which is used for backgrounds and borders. The tertiary
              color is Hoppscotch Gray, which is used for text and icons.
            </p>
            <div class="py-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 bg-purple-500 border border-white/10 rounded-t-xl"
                >
                  #A855F7
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Primary
                  <icon-lucide-copy />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-950 border-white/10 rounded-t-xl"
                >
                  #020617
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Secondary
                  <icon-lucide-copy />
                </p>
              </div>
              <div class="flex flex-col">
                <div
                  class="flex items-center justify-center h-64 p-8 border bg-slate-500 border-white/10 rounded-t-xl"
                >
                  #64748B
                </div>
                <p
                  class="flex items-center justify-between px-4 py-3 text-sm font-medium border-b bg-black/10 border-x border-white/10 rounded-b-xl"
                >
                  Tertiary
                  <icon-lucide-copy />
                </p>
              </div>
            </div>
          </div>
          <!-- Typography -->
          <div>
            <h4 class="h4">Typography</h4>
            <p class="max-w-3xl mt-2">
              Hoppscotch uses the "Inter" typeface for all marketing and product
              design. Inter is a variable font, which means that it can be
              adjusted to a wide range of weights and widths. The font is
              available for free on
              <a
                href="https://fonts.google.com/specimen/Inter"
                target="_blank"
                rel="noopener noreferrer"
                class="text-purple-500 transition hover:underline"
                >Google Fonts</a
              >.
            </p>
          </div>
          <!-- Iconography -->
          <div>
            <h4 class="h4">Iconography</h4>
            <p class="max-w-3xl mt-2">
              Hoppscotch uses the "Lucide" icon set for all marketing and
              product design. Lucide is a set of 1,000+ open-source icons that
              are free to use. The icon set is available for free on
              <a
                href="https://lucide.dev/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-purple-500 transition hover:underline"
                >Lucide.dev</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
