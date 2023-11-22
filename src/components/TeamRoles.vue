<template>
  <section>
    <div class="max-w-4xl px-4 mx-auto sm:px-6">
      <div class="py-12 md:py-16">
        <!-- Section header -->
        <h3
          class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
        >
          Open positions
        </h3>
        <!-- Job list -->
        <div class="my-2 divide-y divide-gray-900">
          <!-- Job -->
          <div class="py-4">
            <div class="mb-2">
              <a
                class="inline-flex items-center justify-between text-xl font-semibold tracking-tight text-gray-400 transition hover:text-gray-200"
                href="https://app.pyjamahr.com/careers?company=Hoppscotch&job_id=55362&company_uuid=8470DC1BAA"
                target="_blank"
              >
                <span>Backend Engineer (Infrastructure)</span>
              </a>
            </div>
            <div class="text-md text-gray-400/80">
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
                class="inline-flex items-center justify-between text-xl font-semibold tracking-tight text-gray-400 transition hover:text-gray-200"
                href="https://app.pyjamahr.com/careers?company=Hoppscotch&job_id=54930&company_uuid=8470DC1BAA"
                target="_blank"
              >
                <span>Frontend Engineer (Senior)</span>
              </a>
            </div>
            <div class="text-md text-gray-400/80">
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
            class="inline-flex items-center justify-center px-3 py-1 text-sm bg-gray-600 border border-transparent rounded-full transition text-gray-50 hover:bg-gray-700 group"
          >
            See open positions
            <span
              class="text-gray-300 group-hover:translate-x-0.5 transition-transform ml-1"
            >
              <icon-lucide-arrow-right />
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
