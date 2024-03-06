<template>
  <section>
    <div class="mx-auto max-w-4xl px-4 sm:px-6">
      <div class="py-12 md:py-16">
        <!-- Section header -->
        <h3
          class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
        >
          Open positions
        </h3>
        <!-- Job list -->
        <div class="my-2 divide-y divide-zinc-900">
          <!-- Job -->
          <div class="py-4">
            <div class="mb-2">
              <a
                class="inline-flex items-center justify-between text-xl font-semibold tracking-tight text-zinc-400 transition hover:text-zinc-200"
                href="https://app.pyjamahr.com/careers?company=Hoppscotch&job_id=55362&company_uuid=8470DC1BAA"
                target="_blank"
              >
                <span>Backend Engineer (Infrastructure)</span>
              </a>
            </div>
            <div class="text-md text-zinc-400/80">
              You will be responsible for designing, building and maintaining
              core services and the infrastructure that supports our software
              development, deployment, and operations. You will collaborate with
              cross-functional teams to ensure the scalability, reliability, and
              security of our systems.
            </div>
          </div>
          <!-- Job -->
          <div class="py-4">
            <div class="mb-2">
              <a
                class="inline-flex items-center justify-between text-xl font-semibold tracking-tight text-zinc-400 transition hover:text-zinc-200"
                href="https://app.pyjamahr.com/careers?company=Hoppscotch&job_id=54930&company_uuid=8470DC1BAA"
                target="_blank"
              >
                <span>Frontend Engineer (Senior)</span>
              </a>
            </div>
            <div class="text-md text-zinc-400/80">
              You will be tasked with planning and building performant, robust
              and highly interactive frontend systems for the main Hoppscotch
              client. You will have to collaborate with our team and build
              smooth and intuitive user experiences along with the internal
              subsystems to support it for developers such as yourself and our
              millions of users worldwide.
            </div>
          </div>
        </div>
        <!-- See All Customers -->
        <div class="text-center">
          <RouterLink
            to="/careers"
            class="group inline-flex items-center justify-center rounded-full border border-transparent bg-zinc-600 px-3 py-1 text-sm text-zinc-50 transition hover:bg-zinc-700"
          >
            See open positions
            <span
              class="ml-1 text-zinc-300 transition-transform group-hover:translate-x-0.5"
            >
              <icon-lucide-arrow-right />
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
