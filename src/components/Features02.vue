<template>
  <section class="relative">
    <!-- Particles animation -->
    <div
      class="absolute left-1/2 top-0 -z-10 -ml-32 -mt-24 h-80 w-80 -translate-x-1/2"
    >
      <ClientOnly>
        <Particles
          class="absolute inset-0 -z-10"
          :quantity="6"
          :staticity="30"
        />
      </ClientOnly>
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="py-12 md:py-16">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Tools for Power Users
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Faster. Smarter.
          </h2>
          <p class="text-zinc-400/80">
            Designed for developers, by developers.
          </p>
        </div>
        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-16">
          <!-- Grid -->
          <Highlighter class="group grid gap-6 md:grid-cols-12">
            <!-- Box #1 -->
            <div class="grid md:col-span-12">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-command class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">
                          Keyboard Shortcuts
                        </h5>
                        <p class="w-full text-zinc-400/80">
                          Fly through your tasks with rapid-fire keyboard
                          shortcuts for everything.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <MacKeyboard />
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="grid md:col-span-7">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-terminal-square class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">CMD + K</h5>
                        <p class="w-3/4 text-zinc-400/80">
                          Access the command palette by pressing CMD+K and type
                          your query for results.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <CmdK />
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="grid md:col-span-5">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-globe class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">Open-Source</h5>
                        <p class="w-3/4 text-zinc-400/80">
                          Built on top of open-source technologies and
                          contributions.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <Globe />
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </Highlighter>
        </div>
        <!-- Features list -->
        <div class="grid gap-8 md:grid-cols-3 md:gap-12">
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-zap class="fill-zinc-200" />
              <span class="text-zinc-100">Lightweight and Snappy</span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Designed to be seamless and instant. 150ms interactions and
              animations.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-users-2 class="fill-zinc-200" />
              <span class="text-zinc-100">Built for Collaboration </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Collaborate with your team in real-time. Share collections and
              environments.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-palette class="fill-zinc-200" />
              <span class="text-zinc-100">Highly Customizable</span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Make it your own. Customize the theme, layout and more.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-filter class="fill-zinc-200" />
              <span class="text-zinc-100"> Filter and Sort </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              See only what you need. Filter and sort response and collections.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-package class="fill-zinc-200" />
              <span class="text-zinc-100">Cross-Platform Apps</span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Works on Mac, Windows, Linux, Web and CLI. Take your work
              anywhere.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-shield-check class="fill-zinc-200" />
              <span class="text-zinc-100">Safe and Secure</span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Designed to keep your data safe and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
