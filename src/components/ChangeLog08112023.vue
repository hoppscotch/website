<template>
  <article id="08-11-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs leading-6 md:sticky pl-7 md:top-32 sm:text-sm text-neutral-200 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#08-11-2023" class="rounded">November 08, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-neutral-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-neutral-600 bg-neutral-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.3"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.8.3"
          class="inline-flex items-center px-2 text-xs border rounded-md text-neutral-400 border-neutral-800 bg-neutral-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-neutral-400 rounded-full"></span>
          v2023.8.3
        </a>
        <span
          class="inline-flex items-center px-2 text-xs text-green-400 border border-green-800 rounded-md bg-green-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-green-400 rounded-full"></span>
          Latest
        </span>
        <span
          class="inline-flex items-center px-2 text-xs text-teal-400 border border-teal-800 rounded-md bg-teal-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-teal-400 rounded-full"></span>
          Feature
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-bold sm:text-4xl text-neutral-200">
          <RouterLink class="rounded" to="/changelog/08-11-2023">
            Introducing Hoppscotch Desktop App (Alpha)
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-neutral-200/50">
          Hoppscotch Desktop App is a cross-platform desktop application built
          with Tauri and Hoppscotch Web Client. It is a standalone version of
          Hoppscotch that can be installed on your computer and used without a
          browser. Hoppscotch Desktop App is currently in alpha and is available
          for Mac, Windows and Linux.
        </p>
        <ImageZoom
          src="/images/changelog-08-11-2023.png"
          class="p-2 mt-4 mb-8 border rounded-3xl border-neutral-900"
        />
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-green-500"
        >
          <li class="pl-4">
            Alert the user on empty collection/environment exports.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-trash-2 class="mr-3" />
          Removed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-red-500"
        >
          <li class="pl-4">Stale type definitions.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-teal-500"
        >
          <li class="pl-4">GraphQL teamID is not passed issue.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-neutral-500"
        >
          <li class="pl-4">Updated translations to reflect latest strings.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
