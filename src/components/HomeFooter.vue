<script setup lang="ts">
import { isDark, toggleDark } from "~/composables"
import { navigation } from "~/assets/data/footerNavigation"
const { t } = useI18n()
</script>

<template>
  <footer class="flex flex-col py-16 px-8">
    <nav class="grid gap-4 grid-cols-2 md:gap-8 md:grid-cols-5">
      <div
        v-for="(category, categoryIndex) in navigation"
        :key="`category-${categoryIndex}`"
        class="flex flex-col space-y-2"
      >
        <h5 class="flex font-bold my-2 text-secondaryLight opacity-75">
          {{ t(category.name) }}
        </h5>
        <ul class="space-y-2">
          <li
            v-for="(item, itemIndex) in category.links"
            :key="`item-${itemIndex}`"
            class="flex"
          >
            <SmartLink
              :to="item.link"
              class="flex text-secondaryLight transition hover:text-secondaryDark"
            >
              {{ t(item.name) }}
            </SmartLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col space-y-2">
        <h5 class="flex font-bold my-2 text-secondaryLight opacity-75">
          {{ t("logo") }}
        </h5>
        <div>
          <button
            v-tippy="{
              theme: 'tooltip',
              content: isDark ? t('action.light') : t('action.dark'),
              placement: 'bottom',
            }"
            class="outline-none mx-2 text-secondaryLight inline-flex hover:text-secondaryDark"
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
