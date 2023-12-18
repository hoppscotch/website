<template>
  <!-- Blocks -->
  <div class="py-4 grid gap-8 sm:grid-cols-12 md:py-8">
    <!-- Block -->
    <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 class="mb-4">
        <RouterLink
          to="/products"
          class="text-sm rounded text-zinc-200 transition hover:text-zinc-100"
        >
          Products
        </RouterLink>
      </h6>
      <ul class="text-sm space-y-2">
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/products/cloud"
          >
            Cloud
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/products/Enterprise"
          >
            Enterprise
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/products/self-host"
          >
            Self-Host
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/products/cli"
          >
            CLI
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- Block -->
    <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 class="mb-4">
        <RouterLink
          to="/explore"
          class="text-sm rounded text-zinc-200 transition hover:text-zinc-100"
        >
          Explore
        </RouterLink>
      </h6>
      <ul class="text-sm space-y-2">
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/features"
          >
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/download"
          >
            Download
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/pricing"
          >
            Pricing
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/changelog"
          >
            Changelog
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- Block -->
    <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 class="mb-4">
        <RouterLink
          to="/solutions"
          class="text-sm rounded text-zinc-200 transition hover:text-zinc-100"
        >
          Solutions
        </RouterLink>
      </h6>
      <ul class="text-sm space-y-2">
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/solutions/developers"
          >
            Developers
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/solutions/teams"
          >
            Teams
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/solutions/enterprise"
          >
            Enterprise
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/solutions/education"
          >
            Education
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/solutions/cloud"
          >
            Cloud
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/solutions/self-host"
          >
            Self-Host
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- Block -->
    <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 class="mb-4">
        <RouterLink
          to="/company"
          class="text-sm rounded text-zinc-200 transition hover:text-zinc-100"
        >
          Company
        </RouterLink>
      </h6>
      <ul class="text-sm space-y-2">
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/about"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/blog"
          >
            Blog
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/careers"
          >
            Careers
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/contact"
          >
            Contact
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- Block -->
    <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 class="mb-4">
        <RouterLink
          to="/resources"
          class="text-sm rounded text-zinc-200 transition hover:text-zinc-100"
        >
          Resources
        </RouterLink>
      </h6>
      <ul class="text-sm space-y-2">
        <li>
          <a
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            href="https://docs.hoppscotch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/community"
          >
            Community
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/brand"
          >
            Brand
          </RouterLink>
        </li>
        <li>
          <a
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            href="https://shop.hoppscotch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>
        </li>
      </ul>
    </div>
    <!-- Block -->
    <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 class="mb-4">
        <RouterLink
          to="/legal"
          class="text-sm rounded text-zinc-200 transition hover:text-zinc-100"
        >
          Legal
        </RouterLink>
      </h6>
      <ul class="text-sm space-y-2">
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/privacy"
          >
            Privacy Policy
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded transition text-zinc-400/80 hover:text-zinc-100"
            to="/terms"
          >
            Terms of Service
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
