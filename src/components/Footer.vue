<template>
  <footer>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <!-- Blocks -->
      <div class="py-8 grid gap-8 sm:grid-cols-12 md:py-12">
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
              <div class="text-sm text-slate-300">
                &copy; Hoppscotch
                <span class="text-slate-500">•</span>
                All rights reserved.
              </div>
            </div>
            <!-- Social links -->
            <ul class="flex">
              <li>
                <a
                  class="flex items-center justify-center rounded-full transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                  href="https://hoppscotch.io/twitter"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <icon-lucide-twitter class="w-8 h-8 p-2" />
                </a>
              </li>
              <li class="ml-2">
                <a
                  class="flex items-center justify-center rounded-full transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                  href="https://hoppscotch.io/github"
                  aria-label="Github"
                  target="_blank"
                >
                  <icon-lucide-github class="w-8 h-8 p-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Solutions</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                API Design
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                API Documentation
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                API Testing
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                API Monitoring
              </a>
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Products</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Download
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Changelog
              </a>
            </li>
            <li>
              <RouterLink
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                to="/pricing"
              >
                Pricing & Plans
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Company</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                About us
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Resources</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Community
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                class="rounded transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="/"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
