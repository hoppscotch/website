<script setup lang="ts">
import { platforms } from "~/assets/data/menuPlatform"
import { guides } from "~/assets/data/menuGuides"

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="max-w-sm grid grid-cols-1">
      <SmartItem
        v-for="(item, itemIndex) in platforms"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
        :description="t(item.description)"
        :disabled="item.disabled"
        :tag="item.tag ? t(item.tag) : ''"
        :icon-style="item.iconStyle"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 rounded-lg bg-primaryDark">
      <div class="flex items-center mb-2">
        <div class="font-semibold text-secondaryDark">
          {{ t("header.menu.guide.title") }}
        </div>
      </div>
      <ul class="flex flex-col space-y-2">
        <li v-for="(guide, guideIndex) in guides" :key="`guide-${guideIndex}`">
          <SmartLink
            blank
            :to="guide.link"
            class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark"
          >
            {{ guide.title }}
          </SmartLink>
        </li>
        <li>
          <SmartLink
            blank
            to="https://docs.hoppscotch.io/guides/articles"
            class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark"
          >
            {{ t("header.menu.guide.read_more") }}
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>
