<script setup lang="ts">
import { solutions } from '~/assets/data/menuSolutions'
import book from '~icons/lucide/book-open'
import guides from '~icons/lucide/graduation-cap'
import support from '~icons/lucide/life-buoy'
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="max-w-2xl grid grid-cols-2">
      <SmartItem
        v-for="(item, itemIndex) in solutions"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
        :description="t(item.description)"
      />
    </div>
    <div class="mt-2 rounded-lg bg-primaryDark">
      <SmartItem
        :label="t('header.menu.solutions.documentation')"
        :icon="book"
        to="https://docs.hoppscotch.io"
      />
      <SmartItem
        :label="t('header.menu.solutions.guides')"
        :icon="guides"
        to="https://docs.hoppscotch.io/guides"
      />
      <SmartItem
        :label="t('header.menu.solutions.support')"
        :icon="support"
        to="/about/contact"
      />
    </div>
  </div>
</template>
