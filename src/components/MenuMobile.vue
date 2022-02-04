<script setup lang="ts">
import { mobileNavigation } from '~/assets/data/mobileNavigation'
const { t } = useI18n()
</script>

<template>
  <nav
    class="flex flex-col rounded-lg space-y-4"
  >
    <div
      v-for="(category, categoryIndex) in mobileNavigation"
      :key="`category-${categoryIndex}`"
      class="flex flex-col"
    >
      <p class="p-4 font-medium uppercase text-secondaryLight">
        {{ t(category.name) }}
      </p>
      <div class="grid grid-cols-2">
        <SmartItem
          v-for="(item, itemIndex) in category.links"
          :key="`item-${itemIndex}`"
          :to="item.link"
          :icon="item.icon"
          :label="t(item.name)"
        />
      </div>
    </div>
    <div class="flex flex-col">
      <SmartItem
        to="/pricing"
        :label="t('header.menu.pricing.title')"
        icon="chevron_right"
        class="my-4"
        reverse
      />
      <div class="flex justify-center p-4 rounded-lg transition bg-primaryDark">
        <ButtonSecondary to="/" :label="t('button.open-app')" rounded />
      </div>
    </div>
  </nav>
</template>
