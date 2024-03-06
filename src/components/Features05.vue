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
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Manifesto
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            New Way to Build APIs
          </h2>
          <p class="text-zinc-400/80">
            Build, test and deploy APIs with ease. All in one place.
          </p>
        </div>
        <!-- Rows -->
        <div class="divide-y divide-zinc-900">
          <!-- Row -->
          <div class="py-8 first-of-type:pt-0 last-of-type:pb-0">
            <div>
              <div
                class="inline-flex max-w-max bg-gradient-to-br from-zinc-500 to-zinc-200 bg-clip-text pb-6 text-transparent"
              >
                Design
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-heart-handshake class="fill-zinc-200" />
                  <span class="text-zinc-100">Collaborate</span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Engage with your teammates, share, design and collaborate —
                  all in real-time.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-database class="fill-zinc-200" />
                  <span class="text-zinc-100">Mock</span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  See exactly how your API will run — even before it's in
                  production.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-file-check class="fill-zinc-200" />
                  <span class="text-zinc-100">Document</span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Make documentation a core part of your API workflow.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex max-w-max bg-gradient-to-br from-zinc-500 to-zinc-200 bg-clip-text pb-6 text-transparent"
              >
                Develop
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-compass class="fill-zinc-200" />
                  <span class="text-zinc-100"> Discover </span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Find and explore APIs from your team and the community.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-layers class="fill-zinc-200" />
                  <span class="text-zinc-100">Protocols</span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Develop APIs using the protocols you love under one roof.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-git-compare class="fill-zinc-200" />
                  <span class="text-zinc-100">Integrations</span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Integrate with your favorite tools and services.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex max-w-max bg-gradient-to-br from-zinc-500 to-zinc-200 bg-clip-text pb-6 text-transparent"
              >
                Test
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-atom class="fill-zinc-200" />
                  <span class="text-zinc-100"> Automate </span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Run tests automatically from your source code whenever
                  something change.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-terminal-square class="fill-zinc-200" />
                  <span class="text-zinc-100">CLI</span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Run tests from any environments — cloud, local and CI/CD
                  pipelines.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-shield-check class="fill-zinc-200" />
                  <span class="text-zinc-100"> Manual </span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Run tests manually with human supervision. Streamline your QA
                  process.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex max-w-max bg-gradient-to-br from-zinc-500 to-zinc-200 bg-clip-text pb-6 text-transparent"
              >
                Deploy
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-workflow class="fill-zinc-200" />
                  <span class="text-zinc-100"> Workflow </span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Deploy your APIs to production with confidence. Automate your
                  workflow.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-file class="fill-zinc-200" />
                  <span class="text-zinc-100"> Documentation </span>
                </div>
                <p class="text-sm text-zinc-400/80">
                  Make it easy for developers to consume your APIs with
                  interactive documentation.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="mb-1 flex items-center space-x-2">
                  <icon-lucide-crosshair class="fill-zinc-200" />
                  <span class="text-zinc-100"> Monitor </span>
                </div>
                <p class="text-sm text-zinc-400/80">
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
