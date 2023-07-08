<template>
  <section>
    <div class="relative max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blurred shape -->
      <div
        class="absolute top-0 left-0 -mt-24 -ml-16 pointer-events-none blur-2xl opacity-70 -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
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
            Why trust us?
          </h2>
          <p class="text-lg text-slate-400">
            Many desktop publishing packages and web page editors now use lorem
            ipsum as their default model text, and a search will uncover many
            web sites still in their infancy.
          </p>
        </div>
        <!-- Rows -->
        <div class="divide-y divide-slate-900">
          <!-- Row -->
          <div class="py-8 first-of-type:pt-0 last-of-type:pb-0">
            <div>
              <div
                class="inline-flex pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              >
                Design
              </div>
            </div>
            <div class="grid gap-8 mb-2 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-heart-handshake class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Collaborate</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Engage with your teammates, share, design and collaborate —
                  all in real-time.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-database class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Mock</h4>
                </div>
                <p class="text-sm text-slate-400">
                  See exactly how your API will run — even before it's in
                  production.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-file-check class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Document</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Make documentation a core part of your API workflow.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              >
                Develop
              </div>
            </div>
            <div class="grid gap-8 mb-2 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-layers class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Protocols</h4>
                </div>
                <p class="text-sm text-slate-400">
                  RESTful, GraphQL, WebSocket and more. Develop all protocols
                  under one roof.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-box class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Solutions</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Find the right balance for the user convenience, privacy and
                  security.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-badge-check class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Integrations</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Integrate your favorite tools and frameworks for a streamlined
                  developer experience.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              >
                Test
              </div>
            </div>
            <div class="grid gap-8 mb-2 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-workflow class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Automate</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Run tests automatically from your source code whenever
                  something change.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-terminal-square class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">CLI</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Run tests from any environments — cloud, local and CI/CD
                  pipelines.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-crosshair class="fill-slate-200" />
                  <h4 class="font-medium text-slate-50">Monitor</h4>
                </div>
                <p class="text-sm text-slate-400">
                  Keep track of you APIs health. Get notified when something
                  goes wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
