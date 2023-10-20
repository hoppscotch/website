<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200 via-violet-100 to-violet-50"
          >
            Milestones
          </h2>
          <p class="text-lg text-violet-200/50">
            We are building a platform that will help you design, develop and
            test your APIs.
          </p>
        </div>
        <!-- Rows -->
        <div class="divide-y divide-slate-900">
          <!-- Row -->
          <div class="py-8 first-of-type:pt-0 last-of-type:pb-0">
            <div>
              <div
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-violet-500 to-violet-200"
              >
                Design
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-heart-handshake class="fill-slate-200" />
                  <span class="text-violet-100">Collaborate</span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Engage with your teammates, share, design and collaborate —
                  all in real-time.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-database class="fill-slate-200" />
                  <span class="text-violet-100">Mock</span>
                </div>
                <p class="text-sm text-violet-200/50">
                  See exactly how your API will run — even before it's in
                  production.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-file-check class="fill-slate-200" />
                  <span class="text-violet-100">Document</span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Make documentation a core part of your API workflow.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-violet-500 to-violet-200"
              >
                Develop
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-compass class="fill-slate-200" />
                  <span class="text-violet-100"> Discover </span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Find and explore APIs from your team and the community.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-layers class="fill-slate-200" />
                  <span class="text-violet-100">Protocols</span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Develop APIs using the protocols you love under one roof.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-git-compare class="fill-slate-200" />
                  <span class="text-violet-100">Integrations</span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Integrate with your favorite tools and services.
                </p>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="py-8">
            <div>
              <div
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-violet-500 to-violet-200"
              >
                Test
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-atom class="fill-slate-200" />
                  <span class="text-violet-100"> Automate </span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Run tests automatically from your source code whenever
                  something change.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-terminal-square class="fill-slate-200" />
                  <span class="text-violet-100">CLI</span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Run tests from any environments — cloud, local and CI/CD
                  pipelines.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-shield-check class="fill-slate-200" />
                  <span class="text-violet-100"> Manual </span>
                </div>
                <p class="text-sm text-violet-200/50">
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
                class="inline-flex pb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-violet-500 to-violet-200"
              >
                Deploy
              </div>
            </div>
            <div class="mb-2 grid gap-8 md:grid-cols-3 md:gap-12">
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-workflow class="fill-slate-200" />
                  <span class="text-violet-100"> Workflow </span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Deploy your APIs to production with confidence. Automate your
                  workflow.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-file class="fill-slate-200" />
                  <span class="text-violet-100"> Documentation </span>
                </div>
                <p class="text-sm text-violet-200/50">
                  Make it easy for developers to consume your APIs with
                  interactive documentation.
                </p>
              </div>
              <!-- Feature -->
              <div>
                <div class="flex items-center mb-1 space-x-2">
                  <icon-lucide-crosshair class="fill-slate-200" />
                  <span class="text-violet-100"> Monitor </span>
                </div>
                <p class="text-sm text-violet-200/50">
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
