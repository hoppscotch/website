<template>
  <article class="md:flex" id="11-05-2023">
    <h2
      class="flex flex-col h-full mt-px text-xs leading-6 pl-7 sm:text-sm text-slate-200 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#11-05-2023" class="rounded">May 11, 2023</a>
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
      >
        <span
          class="inline-flex items-center px-2 text-xs font-medium text-purple-400 border border-purple-800 rounded-md bg-purple-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-purple-400 rounded-full"></span>
          v2023.4.2
        </span>
        <span
          class="inline-flex items-center px-2 text-xs font-medium text-indigo-400 border border-indigo-800 rounded-md bg-indigo-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-indigo-400 rounded-full"></span>
          Improvement
        </span>
      </div>
      <h1 class="mb-8 text-2xl font-bold sm:text-4xl text-slate-200">
        Bug fixes and performance improvements
      </h1>
      <p class="mt-4 mb-8 text-slate-400">
        We update the Hoppscotch app as often as possible to help make it faster
        and more reliable for you. This version includes several bug fixes and
        performance improvements.
      </p>
      <img
        src="../images/changelog-11-05-2023.png"
        class="p-2 mt-4 mb-8 border rounded-3xl border-slate-900"
      />
      <h3 class="flex items-center font-semibold">
        <icon-lucide-sparkles class="mr-3" />
        Added
      </h3>
      <ul
        class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-green-500"
      >
        <li class="pl-4">Scroll to show the new active tab header</li>
        <li class="pl-4">Picture component moved to hoppscotch-ui package.</li>
      </ul>
      <h3 class="flex items-center font-semibold">
        <icon-lucide-check-check class="mr-3" />
        Fixed
      </h3>
      <ul
        class="mt-4 mb-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-teal-500"
      >
        <li class="pl-4">Reset envs when user switches workspaces.</li>
        <li class="pl-4">
          Tab system breaks when a new tab is created while waiting for response
          in another tab.
        </li>
        <li class="pl-4">Invalid environment index can break the app.</li>
        <li class="pl-4">Broken magic link URL when self-hosting.</li>
        <li class="pl-4">
          Tab disappearing when opening requests with long text in body/script.
        </li>
        <li class="pl-4">Pane layout broken when editor wrap line is off.</li>
      </ul>
    </div>
  </article>
</template>
