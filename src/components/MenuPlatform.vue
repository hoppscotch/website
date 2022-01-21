<script setup lang="ts">
import { platform } from '~/assets/data/menuPlatform'
import { guides } from '~/assets/data/menuGuides'
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-2">
      <SmartItem
        v-for="(item, itemIndex) in platform"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
        :description="t(item.description)"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 transition rounded-lg bg-primaryDark">
      <h4 class="mb-2 font-medium border-b-1 border-dividerDark pb-2 rounded-sm">
        {{ t('header.menu.guide.title') }}
      </h4>
      <ul class="flex flex-col space-y-3">
        <li v-for="(guide, guideIndex) in guides" :key="`guide-${guideIndex}`" >
          <router-link :to="guide.link" class="group inline-flex items-center">
            <span class="mr-2 group-hover:text-secondaryDark">
              {{ t(guide.title) }}
            </span>
            <span class="transition group-hover:text-accent">
              <lucide-arrow-right />
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="https://docs.kooli.tech/guides" class="group inline-flex items-center">
            <span class="mr-2 group-hover:text-secondaryDark">
              {{ t('header.menu.guide.read_more') }}
            </span>
           <span class="transition group-hover:text-accent">
              <lucide-arrow-right />
           </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
