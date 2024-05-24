<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <div class="mb-3 flex flex-row gap-3">
          <a
            href="#2024.3.0"
            class="text-md inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-zinc-400"
          >
            <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
            v2024.3.0
          </a>
          <p class="text-xl font-light">November 08, 2023</p>
        </div>

        <h1 class="mb-2 text-2xl font-semibold text-zinc-200 sm:text-5xl">
          Release Notes
        </h1>
        <p class="mb-4 text-xl font-light">New Features Every New Release</p>

        <div class="flex flex-row flex-wrap gap-1">
          <span
            class="inline-flex items-center rounded-md border border-fuchsia-800 bg-fuchsia-500/10 px-2 text-sm text-fuchsia-400"
          >
            <span class="mr-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
            Improvement
          </span>
          <span
            class="inline-flex items-center rounded-md border border-teal-800 bg-teal-500/10 px-2 text-sm text-teal-400"
          >
            <span class="mr-2 h-1.5 w-1.5 rounded-full bg-teal-400"></span>
            Feature
          </span>
        </div>

        <div class="mt-16">
          <p class="mb-4 mt-4 text-5xl font-semibold">
            Introducing Hoppscotch Desktop App
          </p>
          <p class="mb-4 max-w-4xl text-lg font-light text-zinc-400/80">
            Hoppscotch Desktop App is a cross-platform desktop application built
            with Tauri and Hoppscotch Web Client. It is a standalone version of
            Hoppscotch that can be installed on your computer and used without a
            browser. Hoppscotch Desktop App is currently in alpha and is
            available for Mac, Windows and Linux.
          </p>

          <img
            class="mb-4 mt-12 w-full rounded-lg border border-zinc-800 shadow-lg"
            src="/images/changelog-08-11-2023.png"
            alt=""
          />
        </div>

        <section class="mb-6">
          <div>
            <p
              class="mb-4 mt-12 text-3xl font-medium text-zinc-200 sm:text-2xl"
            >
              Desktop Application (Alpha)
            </p>

            <p class="mb-4 max-w-4xl text-lg font-light text-zinc-400/80">
              The Hoppscotch Desktop app has been a highly requested product by
              our community. We've been listening and are excited to announce
              that the day has finally arrived - today marks the launch of the
              public alpha version of the Hoppscotch Desktop App for macOS,
              Windows, and Linux!
            </p>
          </div>

          <div>
            <p
              class="mb-4 mt-12 text-3xl font-medium text-zinc-200 sm:text-2xl"
            >
              Revamped spotlight
            </p>

            <p class="mb-4 max-w-4xl text-lg font-light text-zinc-400/80">
              The Hoppscotch Desktop app has Spotlight is now more powerful and
              useful than ever. You can now search for any request, collection,
              environment, workspace, etc. from the spotlight. You can also use
              the spotlight to quickly navigate to any request, collection,
              environment, workspace, etc.
            </p>
          </div>

          <div>
            <p
              class="mb-4 mt-12 text-3xl font-medium text-zinc-200 sm:text-2xl"
            >
              Auto-complete recent history entries
            </p>

            <p class="mb-4 max-w-4xl text-lg font-light text-zinc-400/80">
              The Hoppscotch Desktop app has You can now auto-complete recent
              history entries from the request URL input. This will help you
              quickly navigate to your recent history entries.
            </p>
          </div>

          <div>
            <p
              class="mb-4 mt-12 text-3xl font-medium text-zinc-200 sm:text-2xl"
            >
              Content-aware context menu
            </p>

            <p class="mb-4 max-w-4xl text-lg font-light text-zinc-400/80">
              The Hoppscotch Desktop app has The context menu is now
              content-aware. It will show you only the relevant options based on
              the context. For example, if you right-click on the request URL
              input, it will show you options related to the request URL input.
              If you right-click on the response body, it will show you options
              related to the response body. Same goes for;
            </p>

            <ul class="list-disc pl-8 text-zinc-400/80">
              <li class="mt-2">Request URL input</li>
              <li class="mt-2">Request method</li>
              <li class="mt-2">Request headers</li>
              <li class="mt-2">Request body</li>
              <li class="mt-2">Response body</li>
            </ul>
          </div>

          <div>
            <p
              class="mb-4 mt-12 text-3xl font-medium text-zinc-200 sm:text-2xl"
            >
              All-in-one container images
            </p>

            <p class="mb-4 max-w-4xl text-lg font-light text-zinc-400/80">
              The Hoppscotch Desktop app has We now provide all-in-one container
              images for Hoppscotch. You can now run Hoppscotch with a single
              command.
            </p>
          </div>
        </section>
        <p
          class="mb-4 mt-12 py-4 text-3xl font-medium text-zinc-200 sm:text-2xl"
        >
          Regular Updations
        </p>
        <section class="flex flex-wrap justify-start gap-2 align-top">
          <div class="w-96 max-w-2xl">
            <h5 class="flex items-center">
              <icon-lucide-sparkles class="mr-3" />
              Added
            </h5>
            <ul
              class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
            >
              <li class="pl-4">i18n support to admin dashboard.</li>
              <li class="pl-4">
                Auto-complete recent history entries in URL bar.
              </li>
              <li class="pl-4">Context menu.</li>
            </ul>
          </div>
          <div class="w-96 max-w-2xl">
            <h5 class="flex items-center">
              <icon-lucide-badge-check class="mr-3" />
              Changed
            </h5>
            <ul
              class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
            >
              <li class="pl-4">Revamped spotlight.</li>
              <li class="pl-4">UX improvement for SmartTree.</li>
              <li class="pl-4">Fonts are now bundled with packages.</li>
            </ul>
          </div>
          <div class="w-96 max-w-2xl">
            <h5 class="flex items-center">
              <icon-lucide-trash-2 class="mr-3" />
              Removed
            </h5>
            <ul
              class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-red-500"
            >
              <li class="pl-4">Unnecessary dependencies from hoppscotch-ui.</li>
              <li class="pl-4">Move crisp out of common.</li>
            </ul>
          </div>
          <div class="w-96 max-w-2xl">
            <h5 class="flex items-center">
              <icon-lucide-check-check class="mr-3" />
              Fixed
            </h5>
            <ul
              class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
            >
              <li class="pl-4">Shortcut keys for spotlight and shortcuts.</li>
              <li class="pl-4">Firefox browser scrollbar issue.</li>
              <li class="pl-4">Elastic overscroll on Safari.</li>
            </ul>
          </div>
          <div class="w-96 max-w-2xl">
            <h5 class="flex items-center">
              <icon-lucide-rocket class="mr-3" />
              Performance
            </h5>
            <ul
              class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
            >
              <li class="pl-4">Bump dependencies.</li>
              <li class="pl-4">Type and UX improvement for SmartTree.</li>
            </ul>
          </div>
          <div class="w-96 max-w-2xl">
            <h5 class="flex items-center">
              <icon-lucide-flask-conical class="mr-3" />
              Other
            </h5>
            <ul
              class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
            >
              <li class="pl-4">Updated font size and truncation on fields.</li>
              <li class="pl-4">Improved command labels and icons.</li>
            </ul>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Your component styles here */
</style>
