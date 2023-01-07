<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <a
        class="bg-gradient-to-br rounded-xl flex-col from-indigo-800 to-indigo-600/20 text-accentContrast p-8 transition inline-flex group dark:to-indigo-900/20"
        href="https://hoppscotch.io/twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-twitter
            class="transform origin-center transition group-hover:rotate-12"
          />
        </i>
        <div class="flex-grow">
          <h2 class="flex font-semibold mt-4 text-lg mb-2 tracking-tighter">
            {{ t("home.social.twitter.title") }}
          </h2>
          <p
            class="flex text-sm tracking-tight opacity-50 transition w-4/5 group-hover:opacity-75"
          >
            {{ t("home.social.twitter.description") }}
          </p>
        </div>
      </a>
      <a
        class="bg-gradient-to-br rounded-xl flex-col from-gray-800 to-gray-600/20 text-accentContrast p-8 transition inline-flex group dark:to-gray-800/20"
        href="https://hoppscotch.io/discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="text-3xl">
          <logos-discord-icon
            class="transform origin-center transition group-hover:rotate-12"
          />
        </i>
        <div class="flex-grow">
          <h2 class="flex font-semibold mt-4 text-lg mb-2 tracking-tighter">
            {{ t("home.social.discord.title") }}
          </h2>
          <p
            class="flex text-sm tracking-tight opacity-50 transition w-4/5 group-hover:opacity-75"
          >
            {{ t("home.social.discord.description") }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
