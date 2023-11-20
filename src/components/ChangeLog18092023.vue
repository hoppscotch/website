<template>
  <article id="18-09-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs leading-6 text-neutral-400 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#18-09-2023" class="rounded">September 18, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-neutral-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-neutral-600 bg-neutral-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.1"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.8.1"
          class="inline-flex items-center px-2 text-xs border rounded-md text-neutral-400 border-neutral-800 bg-neutral-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-neutral-400 rounded-full"></span>
          v2023.8.1
        </a>
        <span
          class="inline-flex items-center px-2 text-xs border rounded-md text-fuchsia-400 border-fuchsia-800 bg-fuchsia-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-fuchsia-400 rounded-full"></span>
          Improvement
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-bold text-neutral-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/18-09-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-neutral-200/50">
          We dedicate this release to Abraham Raji, a free/libre software
          advocate, "Treat people as you expect to be treated" advocate and a
          Debian developer.
        </p>
        <ImageZoom
          src="/images/changelog-18-09-2023.png"
          class="p-2 mt-4 mb-8 border border-neutral-900 rounded-3xl"
        />
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-green-500"
        >
          <li class="pl-4">
            Re-introduce support for arm64 for Docker Hub containers.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-trash-2 class="mr-3" />
          Removed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-red-500"
        >
          <li class="pl-4">Removed zen mode from the app.</li>
          <li class="pl-4">Remove font sizes from the app.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-teal-500"
        >
          <li class="pl-4">Broken link to REST API Testing docs.</li>
          <li class="pl-4">
            Unusual behavior while scrolling through spotlight entries.
          </li>
          <li class="pl-4">Context-menu position while scrolling.</li>
          <li class="pl-4">Duplicate tab reference bug.</li>
          <li class="pl-4">Dirty tab count incorrect when closing tabs.</li>
          <li class="pl-4">Sticky searchbar hidden in codemirror.</li>
          <li class="pl-4">
            Scrollbar from smart envInput component in Firefox.
          </li>
          <li class="pl-4">
            Missing baseurl on import from OpenAPI specification.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-neutral-500"
        >
          <li class="pl-4">
            Updated i18n strings for Vietnamese, Indonesian and Russian
            languages.
          </li>
          <li class="pl-4">
            Keyboard shortcuts now supports different keyboard layouts including
            Dvorak.
          </li>
          <li class="pl-4">Update error messages.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
