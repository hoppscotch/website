<template>
  <article id="24-12-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs leading-6 text-zinc-400 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#24-12-2023" class="rounded">December 24, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-zinc-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.12.1"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.12.1"
          class="inline-flex items-center px-2 text-xs border rounded-md text-zinc-400 border-zinc-800 bg-zinc-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-zinc-400 rounded-full"></span>
          v2023.12.1
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
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/24-12-2023">
            Hotfix
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-zinc-400/80">
          This release includes an emergency hotfix. Updating is recommended.
        </p>
        <p class="mt-4 mb-8 text-zinc-400/80">
          This release features minor bug fixes and better handling during
          certain edge cases when updating the hosting configurations.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
        >
          <li class="pl-4">
            SMTP email validation and enableAndDisableSSO mutation.
          </li>
          <li class="pl-4">Support importing environments individually.</li>
          <li class="pl-4">Remove unused WindiCSS from Desktop app.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
