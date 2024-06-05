<template>
  <article id="23-04-2023" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#23-04-2023" class="rounded">April 23, 2023</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.4.1"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#2023.4.1"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v2023.4.1
        </a>
        <span
          class="inline-flex items-center rounded-md border border-fuchsia-800 bg-fuchsia-500/10 px-2 text-xs text-fuchsia-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
          Improvement
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/23-04-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-23-04-2023.png"
          class="mb-8 mt-4 rounded-3xl border border-zinc-900 p-2"
        />
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
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
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
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
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
        >
          <li class="pl-4">Updated product screenshots.</li>
          <li class="pl-4">Updated translations to reflect latest strings.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
