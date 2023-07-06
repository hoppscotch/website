<template>
  <article class="md:flex" id="12-06-2023">
    <h2
      class="flex flex-col h-full mt-px text-xs leading-6 md:sticky pl-7 md:top-20 sm:text-sm text-slate-200 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#12-06-2023" class="rounded">June 12, 2023</a>
    </h2>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-slate-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-600 bg-slate-900 md:top-[0.4375rem]"
      ></div>
      <div
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
        data-aos="fade-right"
      >
        <span
          class="inline-flex items-center px-2 text-xs font-medium text-purple-400 border border-purple-800 rounded-md bg-purple-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-purple-400 rounded-full"></span>
          v2023.4.6
        </span>
        <span
          class="inline-flex items-center px-2 text-xs font-medium text-green-400 border border-green-800 rounded-md bg-green-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-green-400 rounded-full"></span>
          Latest
        </span>
        <span
          class="inline-flex items-center px-2 text-xs font-medium text-indigo-400 border border-indigo-800 rounded-md bg-indigo-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-indigo-400 rounded-full"></span>
          Improvement
        </span>
      </div>
      <div data-aos="fade-right">
        <h1 class="mb-8 text-2xl font-bold sm:text-4xl text-slate-200">
          <RouterLink to="/changelog/12-06-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-slate-400">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-12-06-2023.png"
          class="p-2 mt-4 mb-8 border rounded-3xl border-slate-900"
        />
        <h3 class="flex items-center font-semibold">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h3>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-teal-500"
        >
          <li class="pl-4">Stack order of tab inside environment selector.</li>
          <li class="pl-4">Team environment lost when route changes.</li>
          <li class="pl-4">Collection request name edit issue.</li>
          <li class="pl-4">
            Failed to execute 'observe' on 'IntersectionObserver'.
          </li>
          <li class="pl-4">
            URL getting overridden when query params are present.
          </li>
        </ul>
        <h3 class="flex items-center font-semibold">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h3>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-purple-500"
        >
          <li class="pl-4">Updated i18n strings.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
