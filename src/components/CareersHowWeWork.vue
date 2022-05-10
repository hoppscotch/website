<script setup lang="ts">
import { howWeWorks } from '~/assets/data/careersHowWeWork'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-5">
    <div class="py-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(workBlock, workIndex) in howWeWorks" :key="`work-${workIndex}`" class="flex flex-col grid gap-4 grid-cols-1"
        :class="{
          'flex md:hidden lg:flex': workIndex === 2,
        }"
      >
        <SmartCard v-for="(work, index) in workBlock" :key="index" :title="t(work.title)" :description="t(work.description)" :icon="work.icon" />
      </div>
    </div>
  </div>
</template>
