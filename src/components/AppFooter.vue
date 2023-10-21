<template>
  <footer class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-violet-500 rounded-full blur-[120px] opacity-5"
        ></div>
      </div>
    </div>
    <Newsletter />
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <!-- Blocks -->
      <div class="py-4 grid gap-8 sm:grid-cols-12 md:py-8">
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/products"
              class="text-sm rounded transition text-violet-200 hover:text-violet-100"
            >
              Products
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/products/cloud"
              >
                Cloud
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/products/Enterprise"
              >
                Enterprise
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/products/self-host"
              >
                Self-Host
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/products/cli"
              >
                CLI
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/explore"
              class="text-sm rounded transition text-violet-200 hover:text-violet-100"
            >
              Explore
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/features"
              >
                Features
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/download"
              >
                Download
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/pricing"
              >
                Pricing
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/changelog"
              >
                Changelog
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/solutions"
              class="text-sm rounded transition text-violet-200 hover:text-violet-100"
            >
              Solutions
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/solutions/developers"
              >
                Developers
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/solutions/teams"
              >
                Teams
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/solutions/enterprise"
              >
                Enterprise
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/solutions/education"
              >
                Education
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/solutions/cloud"
              >
                Cloud
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/solutions/self-host"
              >
                Self-Host
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/company"
              class="text-sm rounded transition text-violet-200 hover:text-violet-100"
            >
              Company
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/about"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/blog"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/careers"
              >
                Careers
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/contact"
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/resources"
              class="text-sm rounded transition text-violet-200 hover:text-violet-100"
            >
              Resources
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <a
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/community"
              >
                Community
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/brand"
              >
                Brand
              </RouterLink>
            </li>
            <li>
              <a
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                href="https://shop.hoppscotch.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li>
          </ul>
        </div>
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/compliances"
              class="text-sm rounded transition text-violet-200 hover:text-violet-100"
            >
              Compliances
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/"
              >
                ISO 27001
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/"
              >
                SOC 2
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/privacy"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-violet-200/50 hover:text-violet-100"
                to="/terms"
              >
                Terms of Service
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-4 grid gap-8 sm:grid-cols-12 md:py-8">
        <!-- block -->
        <div class="col-span-12">
          <div
            class="flex flex-col justify-between h-full sm:flex-row lg:flex-col"
          >
            <div class="mb-4 sm:mb-0">
              <div class="mb-4">
                <!-- Logo -->
                <RouterLink
                  class="inline-flex items-center justify-center p-1 border rounded-full outline-none transition border-violet-500/50 hover:border-violet-500/80 hover:scale-110"
                  to="/"
                  aria-label="Hoppscotch"
                >
                  <img
                    loading="lazy"
                    src="/images/logo.svg"
                    alt="Hoppscotch"
                    class="w-8 h-8"
                  />
                </RouterLink>
              </div>
              <div class="text-xs text-violet-200/50">
                &copy; 2023 Hoppscotch Limited
              </div>
            </div>
            <!-- Social links -->
            <div class="flex items-center justify-between space-x-4">
              <a
                href="https://status.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-xs rounded transition text-violet-200/50 hover:text-violet-100"
              >
                <div class="w-1 h-1 mr-2 bg-green-500 rounded-full"></div>
                All systems operational.
              </a>
              <ul class="flex">
                <li>
                  <a
                    class="flex items-center justify-center rounded-full transition text-violet-200/50 hover:text-violet-100"
                    href="https://hoppscotch.io/twitter"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <icon-lucide-twitter class="w-8 h-8 p-2" />
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center justify-center rounded-full transition text-violet-200/50 hover:text-violet-100"
                    href="https://hoppscotch.io/github"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <icon-lucide-github class="w-8 h-8 p-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
