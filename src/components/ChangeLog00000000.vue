<template>
  <article id="00-00-0000" class="md:flex">
    <p
      class="flex h-full flex-col pl-7 text-xs leading-6 text-zinc-400 sm:text-sm md:sticky md:top-32 md:w-1/5 md:pl-0 md:pr-12 md:text-right"
    >
      <a href="#00-00-0000" class="rounded">MMMM 00, 0000</a>
    </p>
    <div class="relative pb-16 pl-7 pt-2 md:w-4/5 md:pl-12 md:pt-0">
      <div
        class="absolute -bottom-2 -top-3 left-0 w-px bg-zinc-900 md:top-2.5"
      ></div>
      <div
        class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-zinc-600 bg-zinc-900 md:top-[0.4375rem]"
      ></div>
      <div
        id="0000.0.0"
        class="absolute -top-6 right-0 mb-8 mt-[0.1rem] inline-flex items-center space-x-2 md:static"
      >
        <a
          href="#0000.0.0"
          class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
          v0000.0.0
        </a>
        <span
          class="inline-flex items-center rounded-md border border-green-800 bg-green-500/10 px-2 text-xs text-green-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-green-400"></span>
          Latest
        </span>
        <span
          class="inline-flex items-center rounded-md border border-red-800 bg-red-500/10 px-2 text-xs text-red-400"
        >
          <span class="mr-2 h-1.5 w-1.5 rounded-full bg-red-400"></span>
          Hotfix
        </span>
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
          <RouterLink class="rounded" to="/changelog/00-00-0000">
            Bug fixes and performance improvements
          </RouterLink>
        </h1>
        <p class="mb-8 mt-4 text-zinc-400/80">
          We update the Hoppscotch app as often as possible to help make it
          faster and more reliable for you. This version includes several bug
          fixes and performance improvements.
        </p>
        <ImageZoom
          src="/images/changelog-00-00-0000.png"
          class="mb-8 mt-4 rounded-3xl border border-zinc-900 p-2"
        />
        <h4 class="flex items-center text-xl font-semibold">
          Self-Host support for Hoppscotch
        </h4>
        <p class="mb-8 mt-4 text-zinc-400/80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quis
          quasi cupiditate expedita eius accusamus alias doloremque obcaecati ab
          quas ducimus voluptas asperiores fugiat magnam, labore velit nulla!
          Neque, at.
        </p>
        <h4 class="flex items-center text-xl font-semibold">
          Collaborate with your team
        </h4>
        <p class="mb-8 mt-4 text-zinc-400/80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          culpa quaerat illo harum exercitationem quae atque natus porro enim,
          cum voluptas quos corrupti, iusto necessitatibus eos error, dolore
          aliquid beatae.
        </p>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-100"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h4 class="flex items-center text-xl font-semibold">
          Share your collections with the world
        </h4>
        <p class="mb-8 mt-4 text-zinc-400/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis
          quasi cupiditate expedita eius accusamus alias doloremque obcaecati ab
          quas ducimus voluptas asperiores fugiat magnam, labore velit nulla!
          Neque, at.
        </p>
        <h5 class="flex items-center">
          <icon-lucide-sparkles class="mr-3" />
          Added
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-badge-check class="mr-3" />
          Changed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-alert-triangle class="mr-3" />
          Deprecated
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-pink-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-trash-2 class="mr-3" />
          Removed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-red-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-check-check class="mr-3" />
          Fixed
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-shield-check class="mr-3" />
          Security
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-blue-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-rocket class="mr-3" />
          Performance
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
        <h5 class="flex items-center">
          <icon-lucide-flask-conical class="mr-3" />
          Other
        </h5>
        <ul
          class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
        >
          <li class="pl-4">Lorem, ipsum.</li>
          <li class="pl-4">Lorem, ipsum dolor.</li>
          <li class="pl-4">Ipsum dolor sit.</li>
          <li class="pl-4">Lorem dolor.</li>
        </ul>
      </div>
    </div>
  </article>
</template>
