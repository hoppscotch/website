<script setup lang="ts">
import { mobileNavigation } from '~/assets/data/mobileNavigation'
const { t } = useI18n()
</script>

<template>
  <nav
    class="divide-y divide-dashed divide-divider rounded-lg flex flex-col space-y-4"
  >
    <div
      v-for="(category, categoryIndex) in mobileNavigation"
      :key="`category-${categoryIndex}`"
      class="flex flex-col"
    >
      <p class="font-medium text-secondaryLight p-4 uppercase">
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
        :label="t('header.pricing')"
        icon="chevron_right"
        class="my-4"
        reverse
      />
      <div class="bg-primaryDark rounded-lg flex p-4 transition justify-center">
        <ButtonPrimary to="/" :label="t('header.open')" rounded />
      </div>
    </div>
  </nav>
</template>
