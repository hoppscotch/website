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
                <router-link class="block" to="/" aria-label="Cruip">
                  <img
                    src="../images/logo.svg"
                    width="38"
                    height="38"
                    alt="Stellar"
                  />
                </router-link>
              </div>
              <div class="text-sm text-slate-300">
                &copy; Cruip.com <span class="text-slate-500">-</span> All
                rights reserved.
              </div>
            </div>
            <!-- Social links -->
            <ul class="flex">
              <li>
                <a
                  class="flex items-center justify-center text-purple-500 transition duration-150 ease-in-out hover:text-purple-400"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    class="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                    />
                  </svg>
                </a>
              </li>
              <li class="ml-2">
                <a
                  class="flex items-center justify-center text-purple-500 transition duration-150 ease-in-out hover:text-purple-400"
                  href="#0"
                  aria-label="Dev.to"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                  >
                    <path
                      class="w-8 h-8 fill-current"
                      d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z"
                    />
                  </svg>
                </a>
              </li>
              <li class="ml-2">
                <a
                  class="flex items-center justify-center text-purple-500 transition duration-150 ease-in-out hover:text-purple-400"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    class="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Products</h6>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Features</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Integrations</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Pricing & Plans</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Changelog</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Our method</a
              >
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Company</h6>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >About us</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Diversity & Inclusion</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Blog</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Careers</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Financial statements</a
              >
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Resources</h6>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Community</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Terms of service</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Report a vulnerability</a
              >
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="mb-2 text-sm font-medium text-slate-50">Legals</h6>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Refund policy</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Terms & Conditions</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Privacy policy</a
              >
            </li>
            <li>
              <a
                class="transition duration-150 ease-in-out text-slate-400 hover:text-slate-200"
                href="#0"
                >Brand Kit</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
