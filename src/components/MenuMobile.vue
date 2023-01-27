<script setup lang="ts">
import { navigation } from "~/assets/data/mobileNavigation"
import gem from "~icons/lucide/gem"

const { t } = useI18n()
</script>

<template>
  <div
    class="border-b shadow-lg transition border-dividerLight bg-primary md:hidden"
  >
    <nav class="flex flex-col rounded divide-y divide-dividerLight">
      <div
        v-for="(category, categoryIndex) in navigation"
        :key="`category-${categoryIndex}`"
        class="flex flex-col px-8 pb-4 transition"
      >
        <div class="py-4 font-semibold uppercase text-secondaryLight">
          {{ t(category.name) }}
        </div>
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
      <div class="flex flex-col px-8 py-4 transition">
        <SmartItem
          to="/pricing"
          :label="t('header.menu.pricing.title')"
          :icon="gem"
          class="mb-4"
        />
        <div
          class="flex justify-center p-4 rounded space-x-4 transition bg-primaryDark"
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
