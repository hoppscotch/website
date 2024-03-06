<template>
  <article id="05-06-2023" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#05-06-2023" class="rounded">June 05, 2023</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.4.5"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#2023.4.5"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v2023.4.5
        </a>
        <span
          class="inline-flex items-center rounded-md border border-red-800 bg-red-500/10 px-2 text-xs text-red-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-red-400"></span>
          Hotfix
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/05-06-2023">
            Security guidance
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          This release includes major security improvements. Updating is
          recommended.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-shield-check class="mr-3" />
          Security
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-blue-500"
        >
          <li class="pl-4">Fixed a High Severity Security issue.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
