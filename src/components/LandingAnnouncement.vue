<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex items-center justify-center flex-1 py-16">
    <div class="relative">
      <SmartGradient />
      <router-link
        to="/manifesto"
        class="relative flex items-center justify-center px-4 py-3 rounded-lg bg-primary transition group dark:bg-primaryDark"
      >
        <lucide-lightbulb class="hidden h-6 mr-4 md:flex" />
        <span class="text-secondaryDark">
          <span class="md:hidden"> {{ t('home.announcement.short_description') }} </span>
          <span class="hidden md:inline">
            {{ t('home.announcement.long_description') }}
          </span>
        </span>
        <span
          class="flex items-center justify-center pl-4 ml-4 font-semibold border-l border-divider text-accent transition group-hover:text-accentDark"
        >
          <span class="md:hidden"> {{ t("home.announcement.short_link_text") }} </span>
          <span class="hidden md:inline"> {{ t("home.announcement.long_link_text") }} </span>
          <lucide-arrow-right class="ml-4" />
        </span>
      </router-link>
    </div>
  </div>
</template>
