<script setup lang="ts">
import { platform } from '~/assets/data/menuPlatform'
import { guides } from '~/assets/data/menuGuides'
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-1">
      <SmartItem
        v-for="(item, itemIndex) in platform"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
        :description="t(item.description)"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 rounded-lg bg-primaryDark">
      <h4 class="mb-2 font-medium">
        {{ t('header.menu.guide.title') }}
      </h4>
      <ul class="flex flex-col space-y-2">
        <li v-for="(guide, guideIndex) in guides" :key="`guide-${guideIndex}`">
          <router-link :to="guide.link" class="inline-flex items-center">
            <span class="mr-2">
              {{ t(guide.title) }}
            </span>
            <lucide-arrow-right />
          </router-link>
        </li>
        <li>
          <router-link to="https://docs.kooli.tech/guides" class="inline-flex items-center">
            <span class="mr-2">
              {{ t('header.menu.guide.read_more') }}
            </span>
            <lucide-arrow-right />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
