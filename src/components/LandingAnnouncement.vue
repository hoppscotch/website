<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16">
    <div class="flex flex-1 relative items-center justify-center">
      <SmartLink
        to="/company/blog/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-primary border border-divider rounded-full flex text-secondaryLight py-2 transition relative items-center justify-center group dark:bg-primary hover:border-dividerDark hover:text-secondaryDark"
      >
        <lucide-megaphone class="h-6 ml-4 hidden md:flex" />
        <span class="border-r border-divider rounded-l-full py-1 px-4">
          <span class="md:hidden">
            {{ t("home.announcement.short_description") }}
          </span>
          <span class="hidden md:inline">
            {{ t("home.announcement.long_description") }}
          </span>
        </span>
        <span
          class="rounded-r-full flex font-semibold text-accentLight px-4 transition items-center justify-center group-hover:text-accent"
        >
          <span class="md:hidden">
            {{ t("home.announcement.short_link_text") }}
          </span>
          <span class="hidden md:inline">
            {{ t("home.announcement.long_link_text") }}
          </span>
          <lucide-arrow-right class="ml-2" />
        </span>
      </SmartLink>
    </div>
  </div>
</template>
