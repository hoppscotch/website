<script setup lang="ts">
  const isDark = useDark({})
  const toggleDark = useToggle(isDark)
</script>

<template>
  <footer>
    <Newsletter />
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <!-- Footer links -->
      <!-- <FooterLinks /> -->
      <div class="py-4 grid gap-8 sm:grid-cols-12 md:py-8">
        <!-- Block -->
        <div class="col-span-12">
          <div
            class="flex flex-col justify-between h-full sm:flex-row lg:flex-col"
          >
            <div class="mb-4 sm:mb-0">
              <div class="mb-4">
                <!-- Logo -->
                <RouterLink
                  class="inline-flex items-center justify-center p-2 border rounded-full outline-none transition border-neutral-500/50 hover:border-neutral-500/80 hover:scale-110"
                  to="/"
                  aria-label="Hoppscotch"
                >
                  <img
                    loading="lazy"
                    src="/images/logo.svg"
                    alt="Hoppscotch"
                    class="w-6 h-6"
                  />
                </RouterLink>
              </div>
              <div class="text-xs text-neutral-200/50">
                &copy; 2023 Hoppscotch Limited
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
                    class="flex items-center text-xs rounded transition text-neutral-200/50 hover:text-secondary"
                  >
                    <div class="w-1 h-1 mr-2 bg-green-500 rounded-full"></div>
                    All systems operational.
                  </a>
                </li>
                <li>
                  <button
                    v-tippy="{
                      content: isDark ? 'Light mode' : 'Dark mode',
                      theme: 'tooltip',
                    }"
                    class="flex items-center justify-center rounded-full transition text-neutral-200/50 hover:text-secondary"
                    @click="toggleDark()"
                  >
                    <icon-lucide-moon v-if="isDark" class="w-8 h-8 p-2" />
                    <icon-lucide-sun v-else class="w-8 h-8 p-2" />
                  </button>
                </li>
              </ul>
              <ul class="flex items-center">
                <li>
                  <a
                    class="flex items-center justify-center rounded-full transition text-neutral-200/50 hover:text-secondary"
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
                    class="flex items-center justify-center rounded-full transition text-neutral-200/50 hover:text-secondary"
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
