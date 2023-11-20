<template>
  <article id="02-06-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs text-gray-400 leading-6 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#02-06-2023" class="rounded">June 02, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-gray-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-gray-600 bg-gray-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.4.4"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.4.4"
          class="inline-flex items-center px-2 text-xs text-gray-400 border border-gray-800 rounded-md bg-gray-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-gray-400 rounded-full"></span>
          v2023.4.4
        </a>
        <span
          class="inline-flex items-center px-2 text-xs border rounded-md text-fuchsia-400 border-fuchsia-800 bg-fuchsia-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-fuchsia-400 rounded-full"></span>
          Improvement
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-bold text-gray-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/02-06-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-gray-400/80">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-02-06-2023.png"
          class="p-2 mt-4 mb-8 border border-gray-900 rounded-3xl"
        />
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-gray-400/80 marker:text-green-500"
        >
          <li class="pl-4">Add support to audio and video API responses.</li>
          <li class="pl-4">
            Rename request by double clicking its name on tabs.
          </li>
          <li class="pl-4">Prettify XML response.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-badge-check class="mr-3" />
          Changed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-gray-400/80 marker:text-amber-500"
        >
          <li class="pl-4">
            Improved mobile responsiveness on environment selector.
          </li>
          <li class="pl-4">
            Auto-complete component won't cut off the part that's already been
            typed.
          </li>
          <li class="pl-4">
            Improved environment selector with new user interface.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-gray-400/80 marker:text-teal-500"
        >
          <li class="pl-4">Sync popup firing multiple times.</li>
          <li class="pl-4">Dead key issue in macOS.</li>
          <li class="pl-4">Set team environment from test scripts.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-gray-400/80 marker:text-gray-500"
        >
          <li class="pl-4">Updated Spanish translations.</li>
          <li class="pl-4">Updated Chinese (Simplified) translations.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
