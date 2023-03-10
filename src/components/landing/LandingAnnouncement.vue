<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16">
    <div class="relative flex items-center justify-center flex-1">
      <SmartLink
        to="/company/blog/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem"
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex items-center justify-center py-2 transition border rounded-full bg-primary border-divider text-secondaryLight group hover:bg-primaryLight hover:border-dividerDark hover:text-secondaryDark"
      >
        <lucide-megaphone class="hidden h-6 ml-4 md:flex" />
        <span class="px-4 py-1 border-r rounded-l-full border-divider">
          <span class="md:hidden">
            {{ t("home.announcement.short_description") }}
          </span>
          <span class="hidden md:inline">
            {{ t("home.announcement.long_description") }}
          </span>
        </span>
        <span
          class="flex items-center justify-center px-4 font-semibold transition rounded-r-full text-accentLight group-hover:text-accent"
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
