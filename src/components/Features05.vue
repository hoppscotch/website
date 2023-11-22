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
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-50 to-gray-600"
          >
            Manifesto
          </span>
          <h2
            class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            New Way to Build APIs
          </h2>
          <p class="text-gray-400/80">
            Build, test and deploy APIs with ease. All in one place.
          </p>
        </div>
        <!-- Rows -->
        <div class="divide-y divide-gray-900">
          <!-- Row -->
          <div class="py-8 first-of-type:pt-0 last-of-type:pb-0">
            <div>
              <div
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-500 to-gray-200"
              >
                Design
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-heart-handshake class="fill-gray-200" />
                  <span class="text-gray-100">Collaborate</span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Engage with your teammates, share, design and collaborate —
                  all in real-time.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-database class="fill-gray-200" />
                  <span class="text-gray-100">Mock</span>
                </div>
                <p class="text-sm text-gray-400/80">
                  See exactly how your API will run — even before it's in
                  production.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-file-check class="fill-gray-200" />
                  <span class="text-gray-100">Document</span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Make documentation a core part of your API workflow.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-500 to-gray-200"
              >
                Develop
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-compass class="fill-gray-200" />
                  <span class="text-gray-100"> Discover </span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Find and explore APIs from your team and the community.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-layers class="fill-gray-200" />
                  <span class="text-gray-100">Protocols</span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Develop APIs using the protocols you love under one roof.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-git-compare class="fill-gray-200" />
                  <span class="text-gray-100">Integrations</span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Integrate with your favorite tools and services.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-500 to-gray-200"
              >
                Test
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-atom class="fill-gray-200" />
                  <span class="text-gray-100"> Automate </span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Run tests automatically from your source code whenever
                  something change.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-terminal-square class="fill-gray-200" />
                  <span class="text-gray-100">CLI</span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Run tests from any environments — cloud, local and CI/CD
                  pipelines.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-shield-check class="fill-gray-200" />
                  <span class="text-gray-100"> Manual </span>
                </div>
                <p class="text-sm text-gray-400/80">
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
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-500 to-gray-200"
              >
                Deploy
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-workflow class="fill-gray-200" />
                  <span class="text-gray-100"> Workflow </span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Deploy your APIs to production with confidence. Automate your
                  workflow.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-file class="fill-gray-200" />
                  <span class="text-gray-100"> Documentation </span>
                </div>
                <p class="text-sm text-gray-400/80">
                  Make it easy for developers to consume your APIs with
                  interactive documentation.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-crosshair class="fill-gray-200" />
                  <span class="text-gray-100"> Monitor </span>
                </div>
                <p class="text-sm text-gray-400/80">
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
