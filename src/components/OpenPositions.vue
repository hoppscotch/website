<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <h3
          class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-6 text-transparent"
        >
          Open positions
        </h3>
        <!-- Job list -->
        <div class="my-2 divide-y divide-zinc-900">
          <!-- Job -->
          <!-- <div class="py-4">
            <div class="mb-2">
              <a
                class="inline-flex items-center justify-between text-xl font-semibold tracking-tight text-zinc-200 transition hover:text-zinc-100"
                href="https://app.pyjamahr.com/careers?company=Hoppscotch&job_id=67074&company_uuid=8470DC1BAA"
                target="_blank"
              >
                <span>Backend Engineer</span>
                <icon-lucide-arrow-right class="ml-2" />
              </a>
            </div>
            <div class="text-md text-zinc-400/80">
              You will be at the forefront of developing, optimizing, and
              maintaining the core functionality of our cutting-edge,
              self-hosted applications. This role requires a passion for
              creating robust, scalable solutions that empower users to host and
              manage our software with ease. Collaboration with cross-functional
              teams is essential to ensure the reliability, security, and
              extensibility of our self-hosted offerings.
            </div>
          </div> -->
          <!-- No Job -->
          <div class="py-4">
            <div class="mb-2">
              <span
                class="inline-flex items-center justify-between text-xl font-semibold tracking-tight text-zinc-200 transition hover:text-zinc-100"
              >
                <span>No open positions</span>
              </span>
            </div>
            <div class="text-md text-zinc-400/80">
              We are not hiring at the moment. Please check back later.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
