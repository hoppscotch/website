<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
import { footerNavigation } from '~/assets/data/footerNavigation'
const { t } = useI18n()
</script>

<template>
  <footer class="flex flex-col px-8 py-16">
    <nav class="grid grid-cols-2 gap-4 md:grid-cols-5">
      <div class="flex flex-col space-y-2">
        <h5 class="flex my-2 text-sm font-bold text-secondaryLight">
          {{ t("logo") }}
        </h5>
        <div>
          <button class="inline-flex mx-2 outline-none" @click="toggleDark()">
            <lucide-moon v-if="isDark" />
            <lucide-sun v-else />
          </button>
        </div>
      </div>
      <div
        v-for="(category, categoryIndex) in footerNavigation" :key="`category-${categoryIndex}`"
        class="flex flex-col space-y-2"
      >
        <h5 class="flex my-2 text-sm font-bold text-secondaryLight">
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
              class="flex text-xs text-secondaryLight hover:text-secondaryDark transition"
            >
              {{ t(item.name) }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>
