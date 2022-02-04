<script setup lang="ts">
import { mobileNavigation } from '~/assets/data/mobileNavigation'
const { t } = useI18n()
</script>

<template>
  <nav
    class="flex flex-col space-y-4 divide-y rounded-lg divide-dashed divide-divider"
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
        :label="t('header.pricing')"
        icon="chevron_right"
        class="my-4"
        reverse
      />
      <div class="flex justify-center p-4 transition rounded-lg bg-primaryDark">
        <ButtonPrimary to="/" :label="t('header.open')" rounded />
      </div>
    </div>
  </nav>
</template>
