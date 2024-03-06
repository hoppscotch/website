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
            Features
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Everything You Need
          </h2>
          <p class="text-zinc-400/80">
            Hoppscotch got everything you need to make API development easy.
          </p>
        </div>
        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-16">
          <!-- Grid -->
          <Highlighter class="group grid gap-6 md:grid-cols-12">
            <!-- Box #1 -->
            <div class="grid md:col-span-4">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-workspaces.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-users class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">Workspaces</h5>
                        </div>
                        <p class="w-full text-zinc-400/80">
                          Create workspaces for your teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="grid md:col-span-4">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-access-roles.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-shield-check class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">
                            Access-Level Roles
                          </h5>
                        </div>
                        <p class="w-3/4 text-zinc-400/80">
                          Control access to your workspaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="grid md:col-span-4">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-realtime-collaboration.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-zap class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">
                            Real-Time Collaboration
                          </h5>
                        </div>
                        <p class="w-3/4 text-zinc-400/80">
                          Work together with your team in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #4 -->
            <div class="grid md:col-span-4">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-on-prem-deployment.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-database-zap class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">
                            On-Prem Deployment
                          </h5>
                        </div>
                        <p class="w-full text-zinc-400/80">
                          Deploy Hoppscotch on your own servers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #5 -->
            <div class="grid md:col-span-8">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-collections-folders.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-cloudy class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">
                            Collections & Folders
                          </h5>
                        </div>
                        <p class="w-3/4 text-zinc-400/80">
                          Organize your requests in collections or folders and
                          share them with your team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #6 -->
            <div class="grid md:col-span-8">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-environments.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-layers class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">
                            Environment Variables
                          </h5>
                        </div>
                        <p class="w-3/4 text-zinc-400/80">
                          Manage your environment variables and use them
                          everywhere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #7 -->
            <div class="grid md:col-span-4">
              <HighlighterItem>
                <div
                  class="relative z-20 h-full overflow-hidden rounded-[inherit] bg-zinc-950/90 backdrop-blur-md"
                >
                  <div class="flex h-full flex-col">
                    <!-- Image -->
                    <div class="relative w-full overflow-hidden p-2">
                      <div
                        class="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 p-8"
                      >
                        <img
                          src="/images/feature-history.png"
                          class="max-h-full w-auto"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex flex-1 items-start justify-center p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="mb-2 flex items-center justify-center">
                          <icon-lucide-history class="mr-2 inline-flex" />
                          <h5 class="inline-flex text-lg">History</h5>
                        </div>
                        <p class="w-3/4 text-zinc-400/80">
                          View and manage your request history.
                        </p>
                      </div>
                    </div>
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
              <icon-lucide-file-code class="fill-zinc-200" />
              <span class="text-zinc-100"> Pre-Request Scripts </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Modify headers, authenticate requests, generate random data, and
              much more.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-file-check-2 class="fill-zinc-200" />
              <span class="text-zinc-100"> Post Request Tests </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Test your APIs and write assertions for the response.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-languages class="fill-zinc-200" />
              <span class="text-zinc-100"> Translations </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Use Hoppscotch in your native language. We support 30+ languages.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-crosshair class="fill-zinc-200" />
              <span class="text-zinc-100"> Audit Logs </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Track all the activities in your workspace. Who did what and when.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-lock class="fill-zinc-200" />
              <span class="text-zinc-100"> Single-Sign-On </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Use your existing SSO provider to login to Hoppscotch.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative mb-1 flex items-center space-x-2 before:absolute before:inset-y-0 before:-ml-4 before:w-px before:bg-zinc-400/20"
            >
              <icon-lucide-shield-check class="fill-zinc-200" />
              <span class="text-zinc-100"> Admin Dashboard </span>
            </div>
            <p class="text-sm text-zinc-400/80">
              Manage your users, workspaces, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
