<template>
  <article id="18-09-2023" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#18-09-2023" class="rounded">September 18, 2023</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.1"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#2023.8.1"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v2023.8.1
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
          <RouterLink class="rounded" to="/changelog/18-09-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          We dedicate this release to Abraham Raji, a free/libre software
          advocate, "Treat people as you expect to be treated" advocate and a
          Debian developer.
        </p>
        <ImageZoom
          src="/images/changelog-18-09-2023.png"
          class="mb-8 mt-4 rounded-3xl border border-zinc-900 p-2"
        />
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
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
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-red-500"
        >
          <li class="pl-4">Removed zen mode from the app.</li>
          <li class="pl-4">Remove font sizes from the app.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
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
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
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
