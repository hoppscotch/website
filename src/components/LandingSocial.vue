<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <a
        class="inline-flex flex-col p-8 rounded-xl text-accentContrast bg-gradient-to-r from-indigo-800 to-indigo-200 dark:to-transparent group"
        href="https://hoppscotch.io/twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-twitter class="transition origin-center transform group-hover:rotate-12" />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold">
            {{ t('home.social.twitter.title') }}
          </h2>
          <p class="flex w-4/5 transition opacity-60 group-hover:opacity-80">
            {{ t('home.social.twitter.description') }}
          </p>
        </div>
      </a>
      <a
        class="inline-flex flex-col p-8 rounded-xl text-accentContrast bg-gradient-to-r from-gray-800 to-gray-200 dark:to-transparent group"
        href="https://hoppscotch.io/discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-discord-icon class="transition origin-center transform group-hover:rotate-12" />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold">
            {{ t('home.social.discord.title') }}
          </h2>
          <p class="flex w-4/5 transition opacity-60 group-hover:opacity-80">
            {{ t('home.social.discord.description') }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
