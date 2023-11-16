<template>
  <article id="08-11-2023" class="md:flex">
    <p
      class="flex flex-col h-full text-xs leading-6 md:sticky pl-7 md:top-32 sm:text-sm text-neutral-400 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#08-11-2023" class="rounded">November 08, 2023</a>
    </p>
    <div class="relative pt-2 pb-16 pl-7 md:w-4/5 md:pt-0 md:pl-12">
      <div
        class="absolute -bottom-2 left-0 w-px bg-neutral-900 -top-3 md:top-2.5"
      ></div>
      <div
        class="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-neutral-600 bg-neutral-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.3"
        class="absolute right-0 inline-flex items-center mb-8 space-x-2 -top-6 md:static mt-[0.1rem]"
      >
        <a
          href="#2023.8.3"
          class="inline-flex items-center px-2 text-xs border rounded-md text-neutral-400 border-neutral-800 bg-neutral-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-neutral-400 rounded-full"></span>
          v2023.8.3
        </a>
        <span
          class="inline-flex items-center px-2 text-xs text-teal-400 border border-teal-800 rounded-md bg-teal-500/10"
        >
          <span class="w-1.5 h-1.5 mr-2 bg-teal-400 rounded-full"></span>
          Feature
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-bold sm:text-4xl text-neutral-200">
          <RouterLink class="rounded" to="/changelog/08-11-2023">
            Introducing Hoppscotch Desktop App
          </RouterLink>
        </h1>
        <p class="mt-4 mb-8 text-neutral-200/50">
          Hoppscotch Desktop App is a cross-platform desktop application built
          with Tauri and Hoppscotch Web Client. It is a standalone version of
          Hoppscotch that can be installed on your computer and used without a
          browser. Hoppscotch Desktop App is currently in alpha and is available
          for Mac, Windows and Linux.
        </p>
        <p class="mt-4 mb-8">
          <RouterLink
            to="/download"
            class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition neutral-500ite/50 rounded-xl bg-neutral-500/10 border-neutral-500/50 hover:border-neutral-500/80"
          >
            Download Hoppscotch Desktop App
          </RouterLink>
        </p>
        <ImageZoom
          src="/images/changelog-08-11-2023.png"
          class="p-2 mt-4 mb-8 border rounded-3xl border-neutral-900"
        />
        <h4 class="flex items-center text-xl font-bold">
          Desktop Application (Alpha)
        </h4>
        <p class="mt-4 mb-8 text-neutral-200/50">
          The Hoppscotch Desktop app has been a highly requested product by our
          community. We've been listening and are excited to announce that the
          day has finally arrived - today marks the launch of the public alpha
          version of the Hoppscotch Desktop App for macOS, Windows, and Linux!
        </p>
        <p class="mb-8 -mt-4">
          <RouterLink
            to="/blog/introducing-hoppscotch-desktop-application"
            class="border-b transition border-neutral-200 hover:text-neutral-50"
            >Read more about Hoppscotch Desktop App on our blog</RouterLink
          >.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-green-500"
        >
          <li class="pl-4">Cookies support in Hoppscotch Desktop App.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-teal-500"
        >
          <li class="pl-4">
            GraphQL page crashing and broken syntax highlighting.
          </li>
          <li class="pl-4">Mailer templates missing.</li>
          <li class="pl-4">Deprecated status missing in GraphQL query.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-rocket class="mr-3" />
          Performance
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-fuchsia-500"
        >
          <li class="pl-4">Bump dependencies.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mt-4 mb-8 ml-5 list-disc space-y-2 text-neutral-200/50 marker:text-neutral-500"
        >
          <li class="pl-4">Updated translations to reflect latest strings.</li>
          <li class="pl-4">Enforced pre-commit type checks.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
