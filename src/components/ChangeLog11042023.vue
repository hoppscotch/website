<template>
  <article id="11-04-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs text-zinc-400 leading-6 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#11-04-2023" class="rounded">April 11, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-zinc-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.4.0"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.4.0"
          class="inline-flex items-center px-2 text-xs border text-zinc-400 border-zinc-800 rounded-md bg-zinc-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-zinc-400 rounded-full"></span>
          v2023.4.0
        </a>
        <span
          class="inline-flex items-center px-2 text-xs text-teal-400 border border-teal-800 rounded-md bg-teal-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-teal-400 rounded-full"></span>
          Feature
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/11-04-2023">
            Tabs, workspaces and more
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-zinc-400/80">
          We are super excited to introduce self-host support to Hoppscotch
          along with workspaces, tabs and collection reordering in this release.
          It's been our most requested feature since we launched.
        </p>
        <ImageZoom
          src="/images/changelog-11-04-2023.png"
          class="p-2 mt-4 mb-8 border border-zinc-900 rounded-3xl"
        />
        <h4 class="flex items-center text-xl font-semibold">
          Self-hosted Hoppscotch
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          You can now self-host Hoppscotch on your own servers. This is
          especially useful if you want to keep your data private or if you want
          to use Hoppscotch in an environment where the internet is not
          available.
        </p>
        <h3 class="flex items-center text-xl font-semibold">Workspaces</h3>
        <p class="mt-4 mb-8 text-zinc-400/80">
          Easily switch between workspaces with our updated user interface for
          workspaces. You can now create, edit, delete and switch between
          workspaces with ease.
        </p>
        <h3 class="flex items-center text-xl font-semibold">Tabs</h3>
        <p class="mt-4 mb-8 text-zinc-400/80">
          You can now open multiple requests in separate tabs and work with them
          simultaneously. This is especially useful when you want to compare
          responses or work with multiple requests at the same time.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          Reorder requests and collections
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          Organise your collections more efficiently by using drag and drop to
          reorder. You can also reorder requests within a collection.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
        >
          <li class="pl-4">Self-hosted support.</li>
          <li class="pl-4">Tabs.</li>
          <li class="pl-4">Workspaces.</li>
          <li class="pl-4">Reorder requests and collections.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-alert-triangle class="mr-3" />
          Deprecated
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-pink-500"
        >
          <li class="pl-4">Hosted Docker image.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
