<script setup lang="ts">
import { navigation } from "~/assets/data/mobileNavigation"
const { t } = useI18n()
</script>

<template>
  <div class="shadow-lg bg-primary transition md:hidden">
    <nav class="flex flex-col rounded divide-y divide-dividerLight">
      <div
        v-for="(category, categoryIndex) in navigation"
        :key="`category-${categoryIndex}`"
        class="flex flex-col px-6 pb-4 transition"
      >
        <p class="px-2 py-4 font-semibold uppercase text-secondaryLight">
          {{ t(category.name) }}
        </p>
        <div class="grid grid-cols-2">
          <SmartItem
            v-for="(item, itemIndex) in category.links"
            :key="`item-${itemIndex}`"
            :to="item.link"
            :icon="item.icon"
            :label="t(item.name)"
            :disabled="item.disabled"
          />
        </div>
      </div>
      <div class="flex flex-col p-4 transition">
        <SmartItem
          to="/pricing"
          :label="t('header.menu.pricing.title')"
          icon="chevron_right"
          class="mb-4"
          reverse
        />
        <div
          class="flex justify-center p-4 rounded bg-primaryDark space-x-4 transition"
        >
          <ButtonSecondary
            to="https://github.com/hoppscotch/hoppscotch"
            label="GitHub"
            outline
            fill
          />
          <ButtonPrimary
            to="https://hoppscotch.io"
            :label="t('action.open_app')"
            outline
          />
        </div>
      </div>
    </nav>
  </div>
</template>
