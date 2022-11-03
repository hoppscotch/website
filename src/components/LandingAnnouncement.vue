<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16">
    <div class="relative flex items-center justify-center flex-1">
      <RouterLink
        to="/company/blog/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem"
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex items-center justify-center rounded-lg bg-primary transition group dark:bg-primaryDark"
      >
        <SmartGradient animate />
        <lucide-megaphone class="hidden h-6 ml-4 md:flex" />
        <span class="px-4 py-3 border-r border-divider text-secondaryDark">
          <span class="md:hidden">
            {{ t("home.announcement.short_description") }}
          </span>
          <span class="hidden md:inline">
            {{ t("home.announcement.long_description") }}
          </span>
        </span>
        <span
          class="flex items-center justify-center px-4 py-3 font-semibold text-accent transition group-hover:text-accentDark"
        >
          <span class="md:hidden">
            {{ t("home.announcement.short_link_text") }}
          </span>
          <span class="hidden md:inline">
            {{ t("home.announcement.long_link_text") }}
          </span>
          <lucide-arrow-right class="ml-4" />
        </span>
      </RouterLink>
    </div>
  </div>
</template>
