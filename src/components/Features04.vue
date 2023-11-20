<template>
  <section class="relative">
    <!-- Particles animation -->
    <div
      class="absolute top-0 -mt-24 -ml-32 -translate-x-1/2 left-1/2 -z-10 w-80 h-80"
    >
      <ClientOnly>
        <Particles
          class="absolute inset-0 -z-10"
          :quantity="6"
          :staticity="30"
        />
      </ClientOnly>
    </div>
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="py-12 md:py-16">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-50 to-gray-600"
          >
            Features
          </span>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-200/50 via-gray-100/80 to-gray-50/80"
          >
            Everything You Need
          </h2>
          <p class="text-gray-400/80">
            Hoppscotch got everything you need to make API development easy.
          </p>
        </div>
        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-16">
          <!-- Grid -->
          <Highlighter class="grid gap-6 md:grid-cols-12 group">
            <!-- Box #1 -->
            <div class="grid md:col-span-4">
              <HighlighterItem>
                <div
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-workspaces.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-users class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">Workspaces</h5>
                        </div>
                        <p class="w-full text-gray-400/80">
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
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-access-roles.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-shield-check class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">
                            Access-Level Roles
                          </h5>
                        </div>
                        <p class="w-3/4 text-gray-400/80">
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
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-realtime-collaboration.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-zap class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">
                            Real-Time Collaboration
                          </h5>
                        </div>
                        <p class="w-3/4 text-gray-400/80">
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
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-on-prem-deployment.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-database-zap class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">
                            On-Prem Deployment
                          </h5>
                        </div>
                        <p class="w-full text-gray-400/80">
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
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-collections-folders.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-cloudy class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">
                            Collections & Folders
                          </h5>
                        </div>
                        <p class="w-3/4 text-gray-400/80">
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
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-environments.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-layers class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">
                            Environment Variables
                          </h5>
                        </div>
                        <p class="w-3/4 text-gray-400/80">
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
                  class="relative bg-gray-950/90 h-full backdrop-blur-md rounded-[inherit] z-20 overflow-hidden"
                >
                  <div class="flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full p-2 overflow-hidden">
                      <div
                        class="relative flex items-center justify-center p-8 overflow-hidden border h-72 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
                      >
                        <img
                          src="/images/feature-history.png"
                          class="w-auto max-h-full"
                        />
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="flex items-start justify-center flex-1 p-8">
                      <div class="flex flex-col items-center text-center">
                        <div class="flex items-center justify-center mb-2">
                          <icon-lucide-history class="inline-flex mr-2" />
                          <h5 class="inline-flex text-lg">History</h5>
                        </div>
                        <p class="w-3/4 text-gray-400/80">
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
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-gray-400/20"
            >
              <icon-lucide-file-code class="fill-gray-200" />
              <span class="text-gray-100"> Pre-Request Scripts </span>
            </div>
            <p class="text-sm text-gray-400/80">
              Modify headers, authenticate requests, generate random data, and
              much more.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-gray-400/20"
            >
              <icon-lucide-file-check-2 class="fill-gray-200" />
              <span class="text-gray-100"> Post Request Tests </span>
            </div>
            <p class="text-sm text-gray-400/80">
              Test your APIs and write assertions for the response.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-gray-400/20"
            >
              <icon-lucide-languages class="fill-gray-200" />
              <span class="text-gray-100"> Translations </span>
            </div>
            <p class="text-sm text-gray-400/80">
              Use Hoppscotch in your native language. We support 30+ languages.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-gray-400/20"
            >
              <icon-lucide-crosshair class="fill-gray-200" />
              <span class="text-gray-100"> Audit Logs </span>
            </div>
            <p class="text-sm text-gray-400/80">
              Track all the activities in your workspace. Who did what and when.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-gray-400/20"
            >
              <icon-lucide-lock class="fill-gray-200" />
              <span class="text-gray-100"> Single-Sign-On </span>
            </div>
            <p class="text-sm text-gray-400/80">
              Use your existing SSO provider to login to Hoppscotch.
            </p>
          </div>
          <!-- Feature -->
          <div class="pl-4">
            <div
              class="relative flex items-center mb-1 space-x-2 before:-ml-4 before:absolute before:inset-y-0 before:w-px before:bg-gray-400/20"
            >
              <icon-lucide-shield-check class="fill-gray-200" />
              <span class="text-gray-100"> Admin Dashboard </span>
            </div>
            <p class="text-sm text-gray-400/80">
              Manage your users, workspaces, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
