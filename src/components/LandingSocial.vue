<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <a
        class="inline-flex flex-col p-8 transition bg-gradient-to-r rounded-xl from-indigo-800 to-indigo-600/20 text-accentContrast group dark:to-indigo-900/20"
        href="https://hoppscotch.io/twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-twitter class="transition origin-center transform group-hover:rotate-12" />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold tracking-tighter">
            {{ t('home.social.twitter.title') }}
          </h2>
          <p class="flex w-4/5 transition opacity-50 group-hover:opacity-75 tracking-tight">
            {{ t('home.social.twitter.description') }}
          </p>
        </div>
      </a>
      <a
        class="inline-flex flex-col p-8 transition bg-gradient-to-r rounded-xl from-gray-800 to-gray-600/20 text-accentContrast group dark:to-gray-800/20"
        href="https://hoppscotch.io/discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-discord-icon class="transition origin-center transform group-hover:rotate-12" />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold tracking-tighter">
            {{ t('home.social.discord.title') }}
          </h2>
          <p class="flex w-4/5 transition opacity-50 group-hover:opacity-75 tracking-tight">
            {{ t('home.social.discord.description') }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
