<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative flex items-center justify-center flex-1">
      <a
        href="https://company.hoppscotch.io/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem"
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex items-center justify-center px-4 py-3 rounded-lg transition bg-primary group dark:bg-primaryDark"
      >
        <SmartGradient animate />
        <lucide-megaphone class="hidden h-6 mr-4 md:flex" />
        <span class="pr-4 border-r text-secondaryDark border-divider">
          <span class="md:hidden"> {{ t('home.announcement.short_description') }} </span>
          <span class="hidden md:inline">
            {{ t('home.announcement.long_description') }}
          </span>
        </span>
        <span
          class="flex items-center justify-center ml-4 font-semibold transition text-accent group-hover:text-accentDark"
        >
          <span class="md:hidden"> {{ t("home.announcement.short_link_text") }} </span>
          <span class="hidden md:inline"> {{ t("home.announcement.long_link_text") }} </span>
          <lucide-arrow-right class="ml-4" />
        </span>
      </a>
    </div>
  </div>
</template>
