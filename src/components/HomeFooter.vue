<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
import { navigation } from '~/assets/data/footerNavigation'
const { t } = useI18n()
</script>

<template>
  <footer class="container flex flex-col flex-1 px-8 py-16 lg:max-w-4xl">
    <nav class="grid grid-cols-2 gap-4 md:grid-cols-5">
      <div
        v-for="(category, categoryIndex) in navigation" :key="`category-${categoryIndex}`"
        class="flex flex-col space-y-2"
      >
        <h5 class="flex my-2 font-bold opacity-50 text-secondaryLight">
          {{ t(category.name) }}
        </h5>
        <ul
          class="space-y-2"
        >
          <li
            v-for="(item, itemIndex) in category.links"
            :key="`item-${itemIndex}`"
            class="flex"
          >
            <router-link
              :to="item.link"
              class="flex text-xs transition text-secondaryLight hover:text-secondaryDark"
            >
              {{ t(item.name) }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex flex-col space-y-2">
        <h5 class="flex my-2 font-bold opacity-50 text-secondaryLight">
          {{ t("logo") }}
        </h5>
        <div>
          <button
            v-tippy="{ theme: 'tooltip', content: isDark ? t('button.light') : t('button.dark'), placement: 'bottom' }"
            class="inline-flex mx-2 outline-none text-secondaryLight hover:text-secondaryDark"

            @click="toggleDark()"
          >
            <lucide-moon v-if="isDark" />
            <lucide-sun v-else />
          </button>
        </div>
      </div>
    </nav>
  </footer>
</template>
