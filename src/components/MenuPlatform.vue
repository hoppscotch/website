<script setup lang="ts">
import { platform } from '~/assets/data/menuPlatform'
import { guides } from '~/assets/data/menuGuides'
// const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-1">
      <SmartItem
        v-for="(item, itemIndex) in platform"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="item.name"
        :description="item.description"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 transition rounded-lg bg-primaryDark">
      <h4 class="mb-2 font-semibold">
        Pupular guides
      </h4>
      <ul class="flex flex-col space-y-2">
        <li v-for="(guide, guideIndex) in guides" :key="`guide-${guideIndex}`">
          <router-link :to="guide.link" class="link">
            {{ guide.title }}
            <i class="material-icons">chevron_right</i>
          </router-link>
        </li>
        <li>
          <router-link to="https://docs.kooli.tech/guides" class="link">
            View all guides <i class="material-icons">chevron_right</i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
