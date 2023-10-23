<template>
  <section>
    <div class="max-w-4xl px-4 mx-auto sm:px-6">
      <div class="py-12 md:py-16">
        <!-- Section header -->
        <h3
          class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-200/80 to-neutral-100/80"
        >
          Open positions
        </h3>
        <!-- Job list -->
        <div class="my-3 space-y-8 divide-y divide-neutral-900">
          <!-- Job -->
          <div class="py-3">
            <div class="mb-2">
              <a
                class="flex items-center justify-between text-xl font-bold transition text-neutral-500 hover:text-neutral-200"
                href="#0"
              >
                <span>Lead Product Designer</span>
                <icon-lucide-arrow-right />
              </a>
            </div>
            <div class="mb-3 text-md text-neutral-200/50">
              You'll be joing the Experience Design Team as a Lead Product
              Designer. You'll interface daily with developers - encouraging and
              advancing best practices in software.
            </div>
            <div class="flex flex-wrap items-center text-neutral-200/50">
              <div class="inline-flex items-center">
                <icon-lucide-map-pin class="mr-2" />
                <span>Remote</span>
              </div>
              <span class="mx-3 text-neutral-700"> - </span>
              <div class="inline-flex items-center">
                <icon-lucide-circle-dollar-sign class="mr-2" />
                <span>$70k – $120k</span>
              </div>
            </div>
          </div>
          <!-- Job -->
          <div class="py-3">
            <div class="mb-2">
              <a
                class="flex items-center justify-between text-xl font-bold transition text-neutral-500 hover:text-neutral-200"
                href="#0"
              >
                <span>Front-end Engineer</span>
                <icon-lucide-arrow-right />
              </a>
            </div>
            <div class="mb-3 text-md text-neutral-200/50">
              You'll be joing the Experience Design Team as a Lead Product
              Designer. You'll interface daily with developers - encouraging and
              advancing best practices in software.
            </div>
            <div class="flex flex-wrap items-center text-neutral-200/50">
              <div class="inline-flex items-center">
                <icon-lucide-map-pin class="mr-2" />
                <span>Remote</span>
              </div>
              <span class="mx-3 text-neutral-700"> - </span>
              <div class="inline-flex items-center">
                <icon-lucide-circle-dollar-sign class="mr-2" />
                <span>$70k – $120k</span>
              </div>
            </div>
          </div>
          <!-- Job -->
          <div class="py-3">
            <div class="mb-2">
              <a
                class="flex items-center justify-between text-xl font-bold transition text-neutral-500 hover:text-neutral-200"
                href="#0"
              >
                <span>Product Manager</span>
                <icon-lucide-arrow-right />
              </a>
            </div>
            <div class="mb-3 text-md text-neutral-200/50">
              You'll be joing the Experience Design Team as a Lead Product
              Designer. You'll interface daily with developers - encouraging and
              advancing best practices in software.
            </div>
            <div class="flex flex-wrap items-center text-neutral-200/50">
              <div class="inline-flex items-center">
                <icon-lucide-map-pin class="mr-2" />
                <span>Remote</span>
              </div>
              <span class="mx-3 text-neutral-700"> - </span>
              <div class="inline-flex items-center">
                <icon-lucide-circle-dollar-sign class="mr-2" />
                <span>$70k – $120k</span>
              </div>
            </div>
          </div>
        </div>
        <!-- See All Customers -->
        <div class="text-center">
          <RouterLink
            to="/careers"
            class="inline-flex items-center justify-center px-3 py-1 text-sm border border-transparent rounded-full transition text-neutral-50 bg-neutral-600 hover:bg-neutral-700 group"
          >
            See open positions
            <span
              class="text-neutral-300 group-hover:translate-x-0.5 transition-transform ml-1"
            >
              <icon-lucide-arrow-right />
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
