<script setup lang="ts">
import { isDark, toggleDark } from "~/composables"
import { navigation } from "~/assets/data/footerNavigation"
import moon from "~icons/lucide/moon"
import sun from "~icons/lucide/sun"

const { t } = useI18n()
</script>

<template>
  <footer class="flex flex-col px-8 py-16">
    <nav class="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-5">
      <div
        v-for="(category, categoryIndex) in navigation"
        :key="`category-${categoryIndex}`"
        class="flex flex-col items-start space-y-2"
      >
        <div class="flex my-2 font-bold opacity-75 text-secondaryLight">
          {{ t(category.name) }}
        </div>
        <ul class="space-y-2">
          <li
            v-for="(item, itemIndex) in category.links"
            :key="`item-${itemIndex}`"
            class="flex"
          >
            <SmartLink
              :to="item.link"
              class="flex transition text-secondaryLight hover:text-secondaryDark"
            >
              {{ t(item.name) }}
            </SmartLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-start space-y-2">
        <div class="flex my-2 font-bold opacity-75 text-secondaryLight">
          {{ t("logo") }}
        </div>
        <ButtonSecondary
          v-tippy="{
            theme: 'tooltip',
            content: isDark ? t('action.light') : t('action.dark'),
            placement: 'bottom',
          }"
          :icon="isDark ? moon : sun"
          outline
          @click="toggleDark()"
        />
      </div>
    </nav>
  </footer>
</template>
