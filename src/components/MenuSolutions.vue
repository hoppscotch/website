<script setup lang="ts">
import { solutions } from '~/assets/data/menuSolutions'
import lightbulb from '~icons/lucide/lightbulb'
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid max-w-2xl grid-cols-2">
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
        :label="t('header.menu.solutions.api')"
        :icon="lightbulb"
        to="https://docs.kooli.tech/api"
      />
      <SmartItem
        :label="t('header.menu.solutions.guides')"
        :icon="lightbulb"
        to="https://docs.kooli.tech/guides"
      />
      <SmartItem
        :label="t('header.menu.solutions.contact')"
        :icon="lightbulb"
        to="/about/contact"
      />
    </div>
  </div>
</template>
