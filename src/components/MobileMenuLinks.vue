<template>
  <div class="flex flex-col flex-nowrap">
    <RouterLink
      class="flex items-center rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-200"
      to="/download"
    >
      <icon-lucide-download class="mr-3" />
      Download
    </RouterLink>
    <RouterLink
      class="flex items-center rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-200"
      to="/blog"
    >
      <icon-lucide-newspaper class="mr-3" />
      Blog
    </RouterLink>
    <!-- <RouterLink
      class="flex items-center rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-200"
      to="/changelog"
    >
      <icon-lucide-scroll-text class="mr-3" />
      Changelog
    </RouterLink> -->
    <RouterLink
      class="flex items-center rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-200"
      to="/pricing"
    >
      <icon-lucide-gem class="mr-3" />
      Pricing
    </RouterLink>
    <!-- <RouterLink
      class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
      to="/careers"
    >
      <icon-lucide-briefcase class="mr-3" />
      Careers
    </RouterLink> -->
    <a
      class="flex items-center rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-200"
      href="https://docs.hoppscotch.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon-lucide-file-text class="mr-3" />
      Docs
    </a>
  </div>
  <!-- <div class="flex flex-col flex-nowrap">
    <RouterLink
      to="/products"
      class="px-2 py-1 mb-4 text-sm rounded-lg text-zinc-200 transition hover:text-zinc-50"
    >
      Products
    </RouterLink>
    <div
      class="relative flex flex-col pb-4 mb-4 space-y-4 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20"
    >
      <div class="mx-2 font-semibold tracking-tight text-zinc-400">
        By Platform
      </div>
      <div class="flex flex-col">
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/products/cloud"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-cloudy class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Cloud
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Seamless collaboration, effortless scalability.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/products/enterprise"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-building-2 class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Enterprise
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              API management with unparalleled power and control.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/products/self-host"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-server class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Self-Host
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Harness the full potential of APIs with complete control.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/products/cli"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-terminal-square class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              CLI
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Bring API testing and automation into CI/CD pipelines.
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div
      class="relative flex flex-col pb-4 mb-4 space-y-4 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20"
    >
      <div class="mx-2 font-semibold tracking-tight text-zinc-400">
        Explore
      </div>
      <div class="flex-1 grid grid-cols-2">
        <RouterLink
          class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
          to="/features"
        >
          <icon-lucide-sparkles class="mr-3" />
          Features
        </RouterLink>
        <RouterLink
          class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
          to="/download"
        >
          <icon-lucide-download class="mr-3" />
          Download
        </RouterLink>
        <RouterLink
          class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
          to="/pricing"
        >
          <icon-lucide-gem class="mr-3" />
          Pricing
        </RouterLink>
        <RouterLink
          class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
          to="/changelog"
        >
          <icon-lucide-scroll-text class="mr-3" />
          Changelog
        </RouterLink>
      </div>
    </div>
    <RouterLink
      to="/solutions"
      class="px-2 py-1 mb-4 text-sm rounded-lg text-zinc-200 transition hover:text-zinc-50"
    >
      Solutions
    </RouterLink>
    <div
      class="relative flex flex-col pb-4 mb-4 space-y-4 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20"
    >
      <div class="mx-2 font-semibold tracking-tight text-zinc-400">For</div>
      <div class="flex flex-col">
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/solutions/developers"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-box class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Developers
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Build and test APIs faster with the complete toolkit.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/solutions/teams"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-package class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Teams
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Build and scale your API program with confidence.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/solutions/enterprises"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-building-2 class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Enterprises
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Accelerate your business with the modern API platform.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/solutions/education"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-graduation-cap class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Education
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Empower students and educators with API technology.
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div
      class="relative flex flex-col pb-4 mb-4 space-y-4 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20"
    >
      <div class="mx-2 font-semibold tracking-tight text-zinc-400">
        Use Cases
      </div>
      <div class="flex flex-col">
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/solutions/cloud"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-cloudy class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Cloud
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Seamless collaboration, effortless scalability.
            </div>
          </div>
        </RouterLink>
        <RouterLink
          class="flex items-center p-3 rounded-lg transition group hover:bg-zinc-800/50"
          to="/solutions/self-host"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-full text-zinc-400 bg-gradient-to-r from-zinc-950 to-zinc-950/80"
          >
            <icon-lucide-server class="w-5 h-5" />
          </div>
          <div class="flex flex-col">
            <div
              class="text-base font-semibold text-zinc-100 transition group-hover:text-zinc-50"
            >
              Self-Host
            </div>
            <div
              class="text-sm text-zinc-400 transition group-hover:text-zinc-300"
            >
              Harness the full potential of APIs with complete control.
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div
      class="relative flex pb-4 mb-4 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20"
    >
      <div class="flex-1 grid grid-cols-2">
        <a
          class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
          href="https://docs.hoppscotch.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <icon-lucide-file-text class="mr-3" />
          Documentation
        </a>
        <a
          class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-300 transition hover:text-zinc-50 hover:bg-zinc-800/50"
          href="https://docs.hoppscotch.io/documentation/self-host/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          <icon-lucide-github class="mr-3" />
          GitHub
        </a>
      </div>
    </div>
    <RouterLink
      to="/company"
      class="px-2 py-1 mb-4 text-sm rounded-lg text-zinc-200 transition hover:text-zinc-50"
    >
      Company
    </RouterLink>
    <div
      class="relative flex flex-col pb-4 mb-4 after:-z-10 after:absolute after:h-px after:inset-x-0 after:bottom-0 after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20"
    >
      <RouterLink
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        to="/about"
      >
        <icon-lucide-user-circle class="mr-3" />
        About
      </RouterLink>
      <RouterLink
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        to="/blog"
      >
        <icon-lucide-file-text class="mr-3" />
        Blog
      </RouterLink>
      <RouterLink
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        to="/careers"
      >
        <icon-lucide-briefcase class="mr-3" />
        Careers
      </RouterLink>
      <RouterLink
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        to="/contact"
      >
        <icon-lucide-mail class="mr-3" />
        Contact
      </RouterLink>
    </div>
    <RouterLink
      to="/resources"
      class="px-2 py-1 mb-4 text-sm rounded-lg text-zinc-200 transition hover:text-zinc-50"
    >
      Resources
    </RouterLink>
    <div class="flex flex-col pb-4 mb-4">
      <a
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        href="https://docs.hoppscotch.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-lucide-file-text class="mr-3" />
        Documentation
      </a>
      <RouterLink
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        to="/community"
      >
        <icon-lucide-heart class="mr-3" />
        Community
      </RouterLink>
      <RouterLink
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        to="/brand"
      >
        <icon-lucide-palette class="mr-3" />
        Brand
      </RouterLink>
      <a
        class="flex items-center px-3 py-2 text-sm rounded-lg text-zinc-400 transition hover:text-zinc-200 hover:bg-zinc-800/50"
        href="https://shop.hoppscotch.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-lucide-shopping-bag class="mr-3" />
        Shop
      </a>
    </div>
  </div> -->
</template>
