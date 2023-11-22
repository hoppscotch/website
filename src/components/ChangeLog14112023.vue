<template>
  <article id="14-11-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs text-gray-400 leading-6 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#14-11-2023" class="rounded">November 14, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-gray-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-gray-600 bg-gray-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.4"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.8.4"
          class="inline-flex items-center px-2 text-xs text-gray-400 border border-gray-800 rounded-md bg-gray-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-gray-400 rounded-full"></span>
          v2023.8.4
        </a>
        <span
          class="inline-flex items-center px-2 text-xs text-green-400 border border-green-800 rounded-md bg-green-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-green-400 rounded-full"></span>
          Latest
        </span>
        <span
          class="inline-flex items-center px-2 text-xs text-red-400 border border-red-800 rounded-md bg-red-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-red-400 rounded-full"></span>
          Hotfix
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-gray-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/14-11-2023">
            Hotfix
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-gray-400/80">
          This release includes an emergency hotfix. Updating is recommended.
        </p>
        <p class="mt-4 mb-8 text-gray-400/80">
          The release includes a fix to some requests appearing in the app as
          "Untitled" (particularly in Team collections). Along with fixes for
          OAuth and some issues with interoperability with the Hoppscotch
          Browser Extension.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-gray-400/80 marker:text-teal-500"
        >
          <li class="pl-4">OAuth 2.0 authentication type is breaking.</li>
          <li class="pl-4">Interceptor error from extension issue.</li>
          <li class="pl-4">
            Made schema more lenient while parsing public data structures.
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
