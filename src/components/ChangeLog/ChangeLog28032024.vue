<template>
  <article id="28-03-2024" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#28-03-2024" class="rounded">March 28, 2024</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2024.3.0"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#2024.3.0"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v2024.3.0
        </a>
        <span
          class="inline-flex items-center rounded-md border border-fuchsia-800 bg-fuchsia-500/10 px-2 text-xs text-fuchsia-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
          Improvement
        </span>
        <span
          class="inline-flex items-center rounded-md border border-teal-800 bg-teal-500/10 px-2 text-xs text-teal-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-teal-400"></span>
          Feature
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/28-03-2024">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          This is a major release with new features like request variables,
          improved admin dashboard UX, introduction of search for teams along
          with some minor bug fixes and improvements. Visit hoppscotch.com to
          learn more!
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
        >
          <li class="pl-4">
            OAuth 2.0 revamp, plus support for multiple Grant Types.
          </li>
          <li class="pl-4">Team search in workspace search and spotlight.</li>
          <li class="pl-4">
            Focus codemirror view when ImportCurl component launched.
          </li>
          <li class="pl-4">
            Extended support for versioned entities in the CLI.
          </li>
          <li class="pl-4">
            Support simultaneous imports of collections and environments.
          </li>
          <li class="pl-4">Enhanced user management in admin dashboard.</li>
          <li class="pl-4">Use tags as folders when importing from OpenAPI.</li>
          <li class="pl-4">Request variables.</li>
          <li class="pl-4">OIDC-based SSO.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-badge-check class="mr-3" />
          Changed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
        >
          <li class="pl-4">
            Updated teams nomenclature in admin dashboard to workspaces.
          </li>
          <li class="pl-4">
            Removed restore tab popup and its functionalities.
          </li>
          <li class="pl-4">AIO healthcheck bash script.</li>
          <li class="pl-4">
            Improvements to pending invites page in dashboard.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
        >
          <li class="pl-4">Context menu bug and incorrect position.</li>
          <li class="pl-4">Reset infra-config bug.</li>
          <li class="pl-4">Incorrect translation strings.</li>
          <li class="pl-4">
            Collection-level Authentication headers tab update bug.
          </li>
          <li class="pl-4">Direct import from URL failing.</li>
          <li class="pl-4">Workspace list not loading.</li>
          <li class="pl-4">
            Request failing on change content-type to multipart-formdata.
          </li>
          <li class="pl-4">Can't import curl command with data-urlencode.</li>
          <li class="pl-4">
            Lint errors removed by using satisfies or as for type.
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
