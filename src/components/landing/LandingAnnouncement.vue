<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16">
    <div class="relative flex items-center justify-center flex-1">
      <div
        class="relative z-1 overflow-hidden rounded-full p-[1px] animated-border"
      >
        <SmartLink
          to="https://docs.hoppscotch.io/documentation/self-host/getting-started"
          blank
          class="relative z-10 flex items-center justify-center py-2 rounded-full transition bg-primary text-secondaryLight group hover:bg-primaryLight hover:text-secondaryDark"
        >
          <icon-lucide-megaphone class="hidden h-6 ml-4 md:flex" />
          <span class="px-4 py-1 border-r rounded-l-full border-divider">
            <span class="md:hidden">
              {{ t("home.announcement.short_description") }}
            </span>
            <span class="hidden md:inline">
              {{ t("home.announcement.long_description") }}
            </span>
          </span>
          <span
            class="flex items-center justify-center px-4 font-semibold rounded-r-full transition text-accentLight group-hover:text-accent"
          >
            <span class="md:hidden">
              {{ t("home.announcement.short_link_text") }}
            </span>
            <span class="hidden md:inline">
              {{ t("home.announcement.long_link_text") }}
            </span>
            <icon-lucide-arrow-right class="ml-2" />
          </span>
        </SmartLink>
      </div>
    </div>
  </div>
</template>
