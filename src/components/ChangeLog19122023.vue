<template>
  <article id="19-12-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs leading-6 text-zinc-400 md:sticky pl-7 md:top-32 sm:text-sm md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#19-12-2023" class="rounded">December 19, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-zinc-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.12.0"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.12.0"
          class="inline-flex items-center px-2 text-xs border rounded-md text-zinc-400 border-zinc-800 bg-zinc-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-zinc-400 rounded-full"></span>
          v2023.12.0
        </a>
        <span
          class="inline-flex items-center px-2 text-xs text-green-400 border border-green-800 rounded-md bg-green-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-green-400 rounded-full"></span>
          Latest
        </span>
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
          <RouterLink class="rounded" to="/changelog/19-12-2023">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-zinc-400/80">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-19-12-2023.png"
          class="p-2 mt-4 mb-8 border border-zinc-900 rounded-3xl"
        />
        <h4 class="flex items-center text-xl font-semibold">
          Collection-level Header and Auth
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          When you add a header or auth to a collection, it will be applied to
          all requests in that collection. This is useful for adding an auth
          token or API key to all requests in a collection.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          Shared Requests with Widgets
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          You can now share requests with widgets. This is useful for sharing
          requests with your team or with the public.
        </p>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-100"
        >
          <li class="pl-4">
            Embed: Create a mini-version of Hoppscotch that you can embed in an
            HTML page, allowing your audience to interact with your API request.
          </li>
          <li class="pl-4">
            Button: Generate a button with a link to the request that can be
            added to an HTML or Markdown file.
          </li>
          <li class="pl-4">
            Links: Generate a raw, HTML, or Markdown link to the request.
          </li>
        </ul>
        <h4 class="flex items-center text-xl font-semibold">
          Easily manage your self-hosted server configurations
        </h4>
        <p class="mt-4 mb-8 text-zinc-400/80">
          We've also made improvements to Hoppscotch's self-host feature. You
          can manage your server configurations directly from the self-host
          admin dashboard. You can configure authentication providers, as well
          as manage your SMTP settings from the dashboard. For self-hosted
          enterprise versions, you can use the dashboard to configure your
          license and set up extra services like audit logs.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
        >
          <li class="pl-4">Shared requests and widgets.</li>
          <li class="pl-4">Collection-level header and auth.</li>
          <li class="pl-4">Self-hosted server configuration.</li>
          <li class="pl-4">Interceptor error display in GraphQL response.</li>
          <li class="pl-4">Support for subpath based access.</li>
          <li class="pl-4">Convert JSON responses to type safe interfaces.</li>
          <li class="pl-4">New profile avatars.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-badge-check class="mr-3" />
          Changed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
        >
          <li class="pl-4">Replaced WindiCSS with TailwindCSS.</li>
          <li class="pl-4">
            Sisplay status text from the API response if available.
          </li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
        >
          <li class="pl-4">Enlarged logo on admin dashboard login screen.</li>
          <li class="pl-4">XML body disappearing with invalid XML.</li>
          <li class="pl-4">Email validation failure in admin dashboard.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-rocket class="mr-3" />
          Performance
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
        >
          <li class="pl-4">Move persistence logic into a dedicated service.</li>
          <li class="pl-4">Services system to better manage infra.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
