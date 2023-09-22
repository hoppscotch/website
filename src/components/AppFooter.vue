<template>
  <footer class="mt-16 bg-gray-950">
    <Newsletter />
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blocks -->
      <div class="py-4 grid gap-8 sm:grid-cols-12 md:py-8">
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/products"
              class="text-sm rounded transition text-slate-200 hover:text-slate-50"
            >
              Products
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/products/cloud"
              >
                Cloud
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/products/Enterprise"
              >
                Enterprise
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/products/self-host"
              >
                Self-Host
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
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
              class="text-sm rounded transition text-slate-200 hover:text-slate-50"
            >
              Explore
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/features"
              >
                Features
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/download"
              >
                Download
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/pricing"
              >
                Pricing
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
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
              class="text-sm rounded transition text-slate-200 hover:text-slate-50"
            >
              Solutions
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/solutions/developers"
              >
                Developers
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/solutions/teams"
              >
                Teams
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/solutions/enterprise"
              >
                Enterprise
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/solutions/education"
              >
                Education
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/solutions/cloud"
              >
                Cloud
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
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
              class="text-sm rounded transition text-slate-200 hover:text-slate-50"
            >
              Company
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/about"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/blog"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/careers"
              >
                Careers
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
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
              class="text-sm rounded transition text-slate-200 hover:text-slate-50"
            >
              Resources
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <a
                class="rounded transition text-slate-500 hover:text-slate-300"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/community"
              >
                Community
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/brand"
              >
                Brand
              </RouterLink>
            </li>
            <li>
              <a
                class="rounded transition text-slate-500 hover:text-slate-300"
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
              class="text-sm rounded transition text-slate-200 hover:text-slate-50"
            >
              Compliances
            </RouterLink>
          </h6>
          <ul class="text-sm space-y-2">
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/"
              >
                ISO 27001
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/"
              >
                SOC 2
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
                to="/privacy"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="rounded transition text-slate-500 hover:text-slate-300"
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
                  class="inline-block rounded-full"
                  to="/"
                  aria-label="Hoppscotch"
                >
                  <img
                    src="/images/logo.svg"
                    width="32"
                    height="32"
                    alt="Hoppscotch"
                  />
                </RouterLink>
              </div>
              <div class="text-xs text-slate-400">
                &copy; 2023 Hoppscotch Limited
              </div>
            </div>
            <!-- Social links -->
            <div class="flex items-center justify-between space-x-4">
              <a
                href="https://status.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-xs rounded transition text-slate-500 hover:text-slate-300"
              >
                <div class="w-1 h-1 mr-2 bg-green-500 rounded-full"></div>
                All systems operational.
              </a>
              <ul class="flex">
                <li>
                  <a
                    class="flex items-center justify-center rounded-full transition text-slate-500 hover:text-slate-300"
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
                    class="flex items-center justify-center rounded-full transition text-slate-500 hover:text-slate-300"
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
