<template>
  <footer>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blocks -->
      <div class="grid gap-8 py-8 sm:grid-cols-12 md:py-12">
        <!-- 1st block -->
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
                    src="../images/logo.svg"
                    width="38"
                    height="38"
                    alt="Stellar"
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
                class="flex items-center text-xs rounded text-slate-500"
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
        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2">
            <RouterLink
              to="/solutions"
              class="text-sm font-medium transition rounded text-slate-200 hover:text-slate-50"
            >
              Solutions
            </RouterLink>
          </h6>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                API Design
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                API Documentation
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                API Testing
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                API Monitoring
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- 3rd block -->
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
                to="/changelog"
              >
                Changelog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/pricing"
              >
                Pricing & Plans
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- 4th block -->
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
                to="/"
              >
                About us
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                Careers
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                Contact us
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- 5th block -->
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
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                Documentation
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                Community
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="transition rounded text-slate-500 hover:text-slate-300"
                to="/"
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
