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
            Platform Agnostic
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Works As You Expect
          </h2>
          <p class="text-zinc-400/80">
            Everything you'd expect from a modern API client.
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
                        <icon-lucide-zap class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">
                          Cross-Platform Apps
                        </h5>
                        <p class="w-full text-zinc-400/80">
                          Works on Mac, Windows, Linux, Web and CLI.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <CrossPlatform />
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="grid md:col-span-6">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-cloudy class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">Cloud Sync</h5>
                        <p class="w-3/4 text-zinc-400/80">
                          Sync your data across all your devices. Never lose
                          your data again.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <CloudSync />
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="grid md:col-span-6">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <icon-lucide-cable class="mb-4 h-6 w-6" />
                        <h5 class="inline-flex pb-2 text-xl">Multi-Protocol</h5>
                        <p class="w-3/4 text-zinc-400/80">
                          HTTP, GraphQL, WebSocket, Socket.IO, MQTT, Server-Sent
                          Events and more.
                        </p>
                      </div>
                    </div>
                    <!-- Image -->
                    <MultiProtocol />
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
              <icon-lucide-share-2 class="fill-zinc-200" />
              <span class="text-zinc-100"> Shared Requests </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Share your requests with your team, friends or the world.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-code class="fill-zinc-200" />
              <span class="text-zinc-100"> Generate Code Snippets </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Generate code snippets for your requests in various languages and
              frameworks.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-shuffle class="fill-zinc-200" />
              <span class="text-zinc-100"> One-Click Migration </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Migrate from Postman, Insomnia, cURL with a single click
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-command class="fill-zinc-200" />
              <span class="text-zinc-100"> Command-Line Interface </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Use the CLI to run your requests from the terminal. Automate your
              workflow.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-arrow-up-down class="fill-zinc-200" />
              <span class="text-zinc-100"> Proxy and Interceptor Support </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Bypass CORS, debug requests and intercept responses.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-shield-check class="fill-zinc-200" />
              <span class="text-zinc-100"> Secure and Private </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Local-first data storage. No tracking. No analytics. No ads.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
