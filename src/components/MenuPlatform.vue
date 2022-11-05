<script setup lang="ts">
import { platforms } from '~/assets/data/menuPlatform'
import { guides } from '~/assets/data/menuGuides'
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-1">
      <SmartItem
        v-for="(item, itemIndex) in platforms"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
        :description="t(item.description)"
        :disabled="item.disabled"
        :tag="item.tag ? t(item.tag) : false"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 rounded bg-primaryDark">
      <div class="flex items-center mb-2">
        <h4 class="font-semibold text-secondaryDark">
          {{ t('header.menu.guide.title') }}
        </h4>
      </div>
      <ul class="flex flex-col space-y-2 text-xs">
        <li v-for="(guide, guideIndex) in guides" :key="`guide-${guideIndex}`">
          <SmartLink blank :to="guide.link" class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark">
            {{ t(guide.title) }}
            <lucide-arrow-right class="ml-2" />
          </SmartLink>
        </li>
        <li>
          <SmartLink blank to="https://aviyel.com/projects/5/hoppscotch/resources/discussion" class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark">
            {{ t('header.menu.guide.read_more') }}
            <lucide-arrow-right class="ml-2" />
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>
