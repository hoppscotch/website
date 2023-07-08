<template>
  <footer>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div
        class="h-px bg-gradient-to-r from-slate-950 via-slate-600 to-slate-950"
      ></div>
      <!-- Blocks -->
      <div class="grid gap-8 py-8 sm:grid-cols-12 md:py-12">
        <!-- block -->
        <div class="order-1 sm:col-span-12 lg:col-span-4 lg:order-none">
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
                <span class="text-slate-500">•</span>
                All rights reserved.
              </div>
            </div>
            <!-- Social links -->
            <div class="flex items-center justify-between space-x-4">
              <a
                href="https://status.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-xs transition rounded text-slate-500 hover:text-slate-300"
              >
                <div class="w-1 h-1 mr-2 bg-green-500 rounded-full"></div>
                All systems operational.
              </a>
              <ul class="flex">
                <li>
                  <a
                    class="flex items-center justify-center transition rounded-full text-slate-500 hover:text-slate-300"
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
                    class="flex items-center justify-center transition rounded-full text-slate-500 hover:text-slate-300"
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
        <!-- block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/products"
              class="text-sm font-medium transition rounded text-slate-200 hover:text-slate-50"
            >
              Products
            </RouterLink>
          </h6>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/features"
              >
                Features
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/download"
              >
                Download
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/pricing"
              >
                Pricing
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
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
              to="/company"
              class="text-sm font-medium transition rounded text-slate-200 hover:text-slate-50"
            >
              Company
            </RouterLink>
          </h6>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/about"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/blog"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/careers"
              >
                Careers
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
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
              class="text-sm font-medium transition rounded text-slate-200 hover:text-slate-50"
            >
              Resources
            </RouterLink>
          </h6>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                class="transition rounded text-slate-500 hover:text-slate-300"
                href="https://docs.hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/community"
              >
                Community
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/brand"
              >
                Brand
              </RouterLink>
            </li>
            <li>
              <a
                class="transition rounded text-slate-500 hover:text-slate-300"
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
              class="text-sm font-medium transition rounded text-slate-200 hover:text-slate-50"
            >
              Compliances
            </RouterLink>
          </h6>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                ISO 27001
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                SOC 2
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/privacy"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/terms"
              >
                Terms of Service
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
