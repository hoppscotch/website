<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <footer>
    <Newsletter />
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <!-- Footer links -->
      <!-- <FooterLinks /> -->
      <div class="grid gap-8 py-4 sm:grid-cols-12 md:py-8">
        <!-- Block -->
        <div class="col-span-12">
          <div
            class="flex h-full flex-col justify-between sm:flex-row lg:flex-col"
          >
            <div class="mb-4 sm:mb-0">
              <div class="mb-4">
                <!-- Logo -->
                <RouterLink
                  class="inline-flex items-center justify-center rounded-full border border-zinc-500/50 p-2 outline-none transition hover:scale-110 hover:border-zinc-500/80"
                  to="/"
                  aria-label="Hoppscotch"
                >
                  <img
                    loading="lazy"
                    src="/images/logo.svg"
                    alt="Hoppscotch"
                    class="h-6 w-6"
                  />
                </RouterLink>
              </div>
              <div class="text-xs text-zinc-400/80">
                &copy; {{ new Date().getFullYear() }} Hoppscotch Limited. All
                rights reserved.
              </div>
            </div>
            <!-- Social links -->
            <div class="flex items-center justify-between gap-x-4">
              <ul class="flex items-center">
                <li>
                  <a
                    href="https://status.hoppscotch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center rounded text-xs text-zinc-400/80 transition hover:text-zinc-100"
                  >
                    <div class="mr-2 h-1 w-1 rounded-full bg-green-500"></div>
                    All systems operational.
                  </a>
                </li>
              </ul>
              <ul
                class="flex items-center overflow-hidden rounded-full border border-zinc-800"
              >
                <li class="border-r border-zinc-800">
                  <button
                    class="flex items-center justify-center rounded-full text-zinc-400/80 transition hover:text-zinc-100"
                    @click="toggleDark()"
                  >
                    <icon-lucide-moon v-if="isDark" class="h-8 w-8 p-2" />
                    <icon-lucide-sun v-else class="h-8 w-8 p-2" />
                  </button>
                </li>
                <li>
                  <a
                    class="flex items-center justify-center rounded-full text-zinc-400/80 transition hover:text-zinc-100"
                    href="https://twitter.com/hoppscotch_io"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <icon-lucide-twitter class="h-8 w-8 p-2" />
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center justify-center rounded-full text-zinc-400/80 transition hover:text-zinc-100"
                    href="https://www.linkedin.com/company/hoppscotch"
                    aria-label="Discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <icon-lucide-linkedin class="h-8 w-8 p-2" />
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center justify-center rounded-full text-zinc-400/80 transition hover:text-zinc-100"
                    href="https://github.com/hoppscotch/hoppscotch"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <icon-lucide-github class="h-8 w-8 p-2" />
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
