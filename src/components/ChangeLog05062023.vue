<template>
  <article id="05-06-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs leading-6 md:sticky pl-7 md:top-32 sm:text-sm text-neutral-200 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#05-06-2023" class="rounded">June 05, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-neutral-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-neutral-600 bg-neutral-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.4.5"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.4.5"
          class="inline-flex items-center px-2 text-xs border rounded-md text-neutral-400 border-neutral-800 bg-neutral-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-neutral-400 rounded-full"></span>
          v2023.4.5
        </a>
        <span
          class="inline-flex items-center px-2 text-xs text-red-400 border border-red-800 rounded-md bg-red-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-red-400 rounded-full"></span>
          Hotfix
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-bold sm:text-4xl text-neutral-200">
          <RouterLink class="rounded" to="/changelog/05-06-2023">
            Security guidance
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-neutral-200/50">
          This release includes major security improvements. Updating is
          recommended.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-shield-check class="mr-3" />
          Security
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-blue-500"
        >
          <li class="pl-4">Fixed a High Severity Security issue.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
