<template>
  <article id="31-08-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs text-zinc-400 leading-6 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#31-08-2023" class="rounded">August 31, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-zinc-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.0"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.8.0"
          class="inline-flex items-center px-2 text-xs border text-zinc-400 border-zinc-800 rounded-md bg-zinc-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-zinc-400 rounded-full"></span>
          v2023.8.0
        </a>
        <span
          class="inline-flex items-center px-2 text-xs border rounded-md text-fuchsia-400 border-fuchsia-800 bg-fuchsia-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-fuchsia-400 rounded-full"></span>
          Improvement
        </span>
        <span
          class="inline-flex items-center px-2 text-xs text-teal-400 border border-teal-800 rounded-md bg-teal-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-teal-400 rounded-full"></span>
          Feature
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/31-08-2023">
            Spotlight, environment quick peek and GraphQL improvements
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-zinc-400/80">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-31-08-2023.png"
          class="p-2 mt-4 mb-8 border border-zinc-900 rounded-3xl"
        />
        <h4 class="flex items-center text-xl font-semibold">
          Revamped spotlight
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          Spotlight is now more powerful and useful than ever. You can now
          search for any request, collection, environment, workspace, etc. from
          the spotlight. You can also use the spotlight to quickly navigate to
          any request, collection, environment, workspace, etc.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          Auto-complete recent history entries
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          You can now auto-complete recent history entries from the request URL
          input. This will help you quickly navigate to your recent history
          entries.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          Content-aware context menu
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          The context menu is now content-aware. It will show you only the
          relevant options based on the context. For example, if you right-click
          on the request URL input, it will show you options related to the
          request URL input. If you right-click on the response body, it will
          show you options related to the response body. Same goes for;
        </p>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-100"
        >
          <li class="pl-4">Collections</li>
          <li class="pl-4">Environments</li>
          <li class="pl-4">Workspaces</li>
          <li class="pl-4">Requests</li>
          <li class="pl-4">Responses</li>
        </ul>
        <h4 class="flex items-center text-xl font-semibold">
          All-in-one container images
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          We now provide all-in-one container images for Hoppscotch. You can now
          run Hoppscotch with a single command.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          Environment quick peek
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          You can now quickly peek into the environment variables from the
          environment selector.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          GraphQL improvements
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          We have improved the GraphQL support in Hoppscotch. Multiple GraphQL
          queries and mutations are now supported. You can now also use GraphQL
          variables.
        </p>
        <h4 class="flex items-center text-xl font-semibold">Inspections</h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          Inspections are now available in Hoppscotch. Hoppscotch will now
          automatically detect and highlight common issues in your requests.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
        >
          <li class="pl-4">i18n support to admin dashboard.</li>
          <li class="pl-4">Auto-complete recent history entries in URL bar.</li>
          <li class="pl-4">Context menu.</li>
          <li class="pl-4">Allow admins to revoke a team invite.</li>
          <li class="pl-4">Environment quick peek.</li>
          <li class="pl-4">Inspections.</li>
          <li class="pl-4">All-in-one container images.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-badge-check class="mr-3" />
          Changed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
        >
          <li class="pl-4">Revamped spotlight.</li>
          <li class="pl-4">UX improvement for SmartTree.</li>
          <li class="pl-4">Fonts are now bundled with packages.</li>
          <li class="pl-4">
            Ability to conditionally enable auth providers in dashboard.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-trash-2 class="mr-3" />
          Removed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-red-500"
        >
          <li class="pl-4">Unnecessary dependencies from hoppscotch-ui.</li>
          <li class="pl-4">Move crisp out of common.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
        >
          <li class="pl-4">Shortcut keys for spotlight and shortcuts.</li>
          <li class="pl-4">Firefox browser scrollbar issue.</li>
          <li class="pl-4">Elastic overscroll on Safari.</li>
          <li class="pl-4">Disable line wrapping in EnvInput component.</li>
          <li class="pl-4">
            Vertical scroll not working on codemirror instance when lines are
            not wrapped.
          </li>
          <li class="pl-4">
            Issues in displaying the suggestions menu on EnvInput.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-rocket class="mr-3" />
          Performance
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
        >
          <li class="pl-4">Bump dependencies.</li>
          <li class="pl-4">Type and UX improvement for SmartTree.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
        >
          <li class="pl-4">Updated font size and truncation on fields.</li>
          <li class="pl-4">Improved command labels and icons.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
