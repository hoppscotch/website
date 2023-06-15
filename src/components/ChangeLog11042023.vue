<template>
  <article class="md:flex" id="11-04-2023">
    <h2
      class="flex flex-col h-full mt-px text-xs leading-6 pl-7 sm:text-sm text-slate-200 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#11-04-2023" class="rounded">April 11, 2023</a>
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
          v2023.4.0
        </span>
        <span
          class="inline-flex items-center px-2 text-xs font-medium text-teal-400 border border-teal-800 rounded-md bg-teal-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-teal-400 rounded-full"></span>
          Feature
        </span>
      </div>
      <h1 class="mb-4 text-2xl font-bold sm:text-4xl text-slate-200">
        Tabs, workspaces and more
      </h1>
      <p class="my-8 text-slate-400">
        We are super excited to introduce self-host support to Hoppscotch along
        with workspaces, tabs and collection reordering in this release. It's
        been our most requested feature since we launched.
      </p>
      <img
        src="../images/changelog-11-04-2023.png"
        class="p-2 my-8 border rounded-3xl border-slate-900"
      />
      <h3 class="flex items-center text-xl font-bold">
        Self-hosted Hoppscotch
      </h3>
      <p class="my-8 text-slate-400">
        You can now self-host Hoppscotch on your own servers. This is especially
        useful if you want to keep your data private or if you want to use
        Hoppscotch in an environment where the internet is not available.
      </p>
      <h3 class="flex items-center text-xl font-bold">Workspaces</h3>
      <p class="my-8 text-slate-400">
        Easily switch between workspaces with our updated user interface for
        workspaces. You can now create, edit, delete and switch between
        workspaces with ease.
      </p>
      <h3 class="flex items-center text-xl font-bold">Tabs</h3>
      <p class="my-8 text-slate-400">
        You can now open multiple requests in separate tabs and work with them
        simultaneously. This is especially useful when you want to compare
        responses or work with multiple requests at the same time.
      </p>
      <h3 class="flex items-center text-xl font-bold">
        Reorder requests and collections
      </h3>
      <p class="my-8 text-slate-400">
        Organise your collections more efficiently by using drag and drop to
        reorder. You can also reorder requests within a collection.
      </p>
      <h3 class="flex items-center font-semibold">
        <icon-lucide-sparkles class="mr-3" />
        Added
      </h3>
      <ul
        class="my-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-green-500"
      >
        <li class="pl-4">Self-hosted support.</li>
        <li class="pl-4">Tabs.</li>
        <li class="pl-4">Workspaces.</li>
        <li class="pl-4">Reorder requests and collections.</li>
      </ul>
      <h3 class="flex items-center font-semibold">
        <icon-lucide-alert-triangle class="mr-3" />
        Deprecated
      </h3>
      <ul
        class="my-8 ml-5 list-disc space-y-2 text-slate-400 marker:text-pink-500"
      >
        <li class="pl-4">Hosted Docker image.</li>
      </ul>
    </div>
  </article>
</template>
