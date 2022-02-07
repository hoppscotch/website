
<script setup lang="ts">
import { features } from '~/assets/data/featuresList'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl font-black leading-none text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("features.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-lg text-center md:w-3/5">
        {{ t("features.hero.subheading") }}
      </p>
    </div>
    <div
      class="flex flex-col mx-auto mt-8 grid-cols-9 md:grid"
    >
      <div
        v-for="(feature, index) in features" :key="`feature-${index}`"
        class="flex md:contents"
        :class="{'flex-row-reverse': feature.placement === 'left'}"
      >
        <div
          class=""
          :class="feature.placement === 'left'
            ? 'bg-blue-500 col-start-1 col-end-5 p-8 rounded-xl my-4 ml-auto shadow-md'
            : 'col-start-5 col-end-6 mr-8 md:mx-auto relative'"
        >
          <FeatureCard v-if="feature.placement === 'left'" :feature="feature" />
          <FeaturePointer v-else />
        </div>
        <div
          class=""
          :class="feature.placement === 'left'
            ? 'col-start-5 col-end-6 md:mx-auto relative mr-8'
            : 'bg-blue-500 col-start-6 col-end-10 p-8 rounded-xl my-4 mr-auto shadow-md'"
        >
          <FeaturePointer v-if="feature.placement === 'left'" />
          <FeatureCard v-else :feature="feature" />
        </div>
      </div>
    </div>
  </div>
</template>
