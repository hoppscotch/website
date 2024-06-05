<template>
  <article id="15-10-2023" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#15-10-2023" class="rounded">October 15, 2023</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.2"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#2023.8.2"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v2023.8.2
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
          <RouterLink class="rounded" to="/changelog/15-10-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-15-10-2023.png"
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
            Alert the user on empty collection/environment exports.
          </li>
          <li class="pl-4">
            Ability to export single environment variables and allow CLI to
            accept the export format used by the app.
          </li>
          <li class="pl-4">
            No permission warning added for users except owner while deleting
            team.
          </li>
          <li class="pl-4">
            Import buttons in empty root state for collection & environment
            section.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-trash-2 class="mr-3" />
          Removed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-red-500"
        >
          <li class="pl-4">Stale type definitions.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
        >
          <li class="pl-4">
            Authorisation headers not being sent along with GraphQL
            subscriptions.
          </li>
          <li class="pl-4">GraphQL teamID is not passed issue.</li>
          <li class="pl-4">Environment variables usage in meta tags.</li>
          <li class="pl-4">
            Team collection resetting on unmount within app lifecycle.
          </li>
          <li class="pl-4">Cannot set custom method.</li>
          <li class="pl-4">
            Blank screen in admin dashboard when failing to refresh tokens or
            when cookies are expired and user not fully logged out.
          </li>
          <li class="pl-4">Tooltip position in editor instance.</li>
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
          <li class="pl-4">Make devcontainer copy .env.example.</li>
          <li class="pl-4">Updated translations to reflect latest strings.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
