<script setup lang="ts">
import { platforms } from "~/assets/data/menuPlatform"
import { guides } from "~/assets/data/menuGuides"
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
        :tag="item.tag ? t(item.tag) : ''"
      />
    </div>
    <div class="bg-primaryDark rounded flex flex-col mt-2 p-4">
      <div class="flex mb-2 items-center">
        <h4 class="font-semibold text-secondaryDark">
          {{ t("header.menu.guide.title") }}
        </h4>
      </div>
      <ul class="flex flex-col space-y-2">
        <li v-for="(guide, guideIndex) in guides" :key="`guide-${guideIndex}`">
          <SmartLink
            blank
            :to="guide.link"
            class="text-secondaryLight transition inline-flex items-center hover:text-secondaryDark"
          >
            {{ t(guide.title) }}
            <lucide-arrow-right class="ml-2" />
          </SmartLink>
        </li>
        <li>
          <SmartLink
            blank
            to="https://aviyel.com/projects/5/hoppscotch/resources/discussion"
            class="text-secondaryLight transition inline-flex items-center hover:text-secondaryDark"
          >
            {{ t("header.menu.guide.read_more") }}
            <lucide-arrow-right class="ml-2" />
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>
