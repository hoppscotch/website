<script setup lang="ts">
import { solutions } from '~/assets/data/menuSolutions'
// const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid max-w-2xl grid-cols-2">
      <SmartItem
        v-for="(item, itemIndex) in solutions"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="item.name"
        :description="item.description"
      />
    </div>
    <div class="flex mt-2 transition rounded-lg bg-primaryDark">
      <SmartItem
        label="API"
        icon="layers"
        to="https://docs.kooli.tech/api"
      />
      <SmartItem
        label="Guides"
        icon="local_library"
        to="https://docs.kooli.tech/guides"
      />
      <SmartItem
        label="Contact"
        icon="contact_support"
        to="/about/contact"
      />
    </div>
  </div>
</template>
