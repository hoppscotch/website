<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div
        class="inline-flex flex-col p-8 border border-divider bg-gradient-to-r from-cyan-400 to-teal-400 rounded"
      >
        <i class="text-3xl text-accentContrast">
          <lucide-github />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold text-secondaryDark">
            {{ t('home.social.github.title') }}
          </h2>
          <p class="flex">
            {{ t('home.social.github.description') }}
          </p>
          <p class="mt-2">
            <router-link to="https:hoppscotch.io/github" class="inline-flex items-center transition text-accent hover:text-accentDark">
              <span class="mr-2">
                {{ t('home.social.github.cta') }}
              </span>
              <lucide-arrow-right />
            </router-link>
          </p>
        </div>
      </div>
      <div
        class="inline-flex flex-col p-8 border border-divider bg-gradient-to-r from-cyan-400 to-blue-500 rounded"
      >
        <i class="text-3xl text-accentContrast">
          <lucide-twitter />
        </i>
        <div class="flex-grow">
          <h2 class="flex mt-4 mb-2 text-lg font-semibold text-secondaryDark">
            {{ t('home.social.twitter.title') }}
          </h2>
          <p class="flex">
            {{ t('home.social.twitter.description') }}
          </p>
          <p class="mt-2">
            <router-link to="https:hoppscotch.io/twitter" class="inline-flex items-center transition text-accent hover:text-accentDark">
              <span class="mr-2">
                {{ t('home.social.twitter.cta') }}
              </span>
              <lucide-arrow-right />
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
