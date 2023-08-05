<template>
  <article id="23-04-2023" class="md:flex">
    <h2
      class="flex flex-col h-full mt-px text-xs leading-6 md:sticky pl-7 md:top-20 sm:text-sm text-slate-200 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#23-04-2023" class="rounded">April 23, 2023</a>
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
          class="inline-flex items-center px-2 text-xs font-medium border rounded-md text-violet-400 border-violet-800 bg-violet-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-violet-400 rounded-full"></span>
          v2023.4.1
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
          <RouterLink to="/changelog/23-04-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-slate-400">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-23-04-2023.png"
          class="p-2 mt-4 mb-8 border rounded-3xl border-slate-900"
        />
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-teal-500"
        >
          <li class="pl-4">
            Wrong tab selected after navigating from different route.
          </li>
          <li class="pl-4">
            Request name not updating in the save request modal.
          </li>
          <li class="pl-4">Language detected when loaded from slug.</li>
          <li class="pl-4">Non-prettified output on large JSON objects.</li>
          <li class="pl-4">
            Selected environment reset to default when sidebar collapsed.
          </li>
          <li class="pl-4">Broken documentation links.</li>
          <li class="pl-4">
            Incorrect GOOGLE_SCOPE env value in .env.example file.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-rocket class="mr-3" />
          Performance
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-indigo-500"
        >
          <li class="pl-4">
            Improve tabs scrollbar and unsaved request indicator.
          </li>
          <li class="pl-4">Use auto-imported icons.</li>
          <li class="pl-4">
            Removed unwanted transitions which caused pane layout shift.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-violet-500"
        >
          <li class="pl-4">Updated product screenshots.</li>
          <li class="pl-4">Updated translations to reflect latest strings.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
