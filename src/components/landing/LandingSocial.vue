<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <a
        class="inline-flex flex-col p-8 text-white transition rounded-lg bg-gradient-to-br from-indigo-800 to-indigo-600/20 group dark:to-indigo-900/20"
        href="https://hoppscotch.io/twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-twitter
            class="transition origin-center transform group-hover:rotate-12"
          />
        </i>
        <div class="flex-grow">
          <div class="flex mt-4 mb-2 text-lg font-semibold tracking-tight">
            {{ t("home.social.twitter.title") }}
          </div>
          <div
            class="flex w-4/5 text-sm tracking-tight transition opacity-50 group-hover:opacity-75"
          >
            {{ t("home.social.twitter.description") }}
          </div>
        </div>
      </a>
      <a
        class="inline-flex flex-col p-8 text-white transition rounded-lg bg-gradient-to-br from-gray-800 to-gray-600/20 group dark:to-gray-800/20"
        href="https://hoppscotch.io/discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-discord-icon
            class="transition origin-center transform group-hover:rotate-12"
          />
        </i>
        <div class="flex-grow">
          <div class="flex mt-4 mb-2 text-lg font-semibold tracking-tight">
            {{ t("home.social.discord.title") }}
          </div>
          <div
            class="flex w-4/5 text-sm tracking-tight transition opacity-50 group-hover:opacity-75"
          >
            {{ t("home.social.discord.description") }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
