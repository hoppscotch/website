<template>
  <article id="08-11-2023" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#08-11-2023" class="rounded">November 08, 2023</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="2023.8.3"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#2023.8.3"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v2023.8.3
        </a>
        <span
          class="inline-flex items-center rounded-md border border-teal-800 bg-teal-500/10 px-2 text-xs text-teal-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-teal-400"></span>
          Feature
        </span>
      </div>
      <div>
        <h1 class="mb-8 text-2xl font-semibold text-zinc-200 sm:text-4xl">
          <RouterLink class="rounded" to="/changelog/08-11-2023">
            Introducing Hoppscotch Desktop App
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          Hoppscotch Desktop App is a cross-platform desktop application built
          with Tauri and Hoppscotch Web Client. It is a standalone version of
          Hoppscotch that can be installed on your computer and used without a
          browser. Hoppscotch Desktop App is currently in alpha and is available
          for Mac, Windows and Linux.
        </p>
        <p class="mb-8 mt-4">
          <RouterLink
            to="/download"
            class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
          >
            Download Hoppscotch Desktop App
          </RouterLink>
        </p>
        <ImageZoom
          src="/images/changelog-08-11-2023.png"
          class="mb-8 mt-4 rounded-3xl border border-zinc-900 p-2"
        />
        <h4 class="flex items-center text-xl font-semibold">
          Desktop Application (Alpha)
        </h4>
        <p class="mb-8 mt-4 text-zinc-400/80">
          The Hoppscotch Desktop app has been a highly requested product by our
          community. We've been listening and are excited to announce that the
          day has finally arrived - today marks the launch of the public alpha
          version of the Hoppscotch Desktop App for macOS, Windows and Linux!
        </p>
        <p class="-mt-4 mb-8">
          <RouterLink
            to="/blog/introducing-hoppscotch-desktop-application"
            class="border-b border-zinc-200 transition hover:text-zinc-50"
            >Read more about Hoppscotch Desktop App on our blog</RouterLink
          >.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
        >
          <li class="pl-4">Cookies support in Hoppscotch Desktop App.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
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
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
        >
          <li class="pl-4">Bump dependencies.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
        >
          <li class="pl-4">Updated translations to reflect latest strings.</li>
          <li class="pl-4">Enforced pre-commit type checks.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
