<script setup lang="ts">
import { features } from "~/assets/data/featuresList"
const { t } = useI18n()
const router = useRouter()
const props = defineProps<{ id: string }>()
const singleFeature = features.find(feature => t(feature.title).toLocaleLowerCase().replaceAll(" ", "-") === props.id.toLocaleLowerCase())
</script>

<template>
  <div v-if="singleFeature" class="flex flex-col divide-y divide-dividerLight">
    <FeatureHero :title="singleFeature?.title" :description="singleFeature?.description" :image-dark="singleFeature?.imageDark" :image-light="singleFeature?.imageLight" :video-link="singleFeature?.videoLink" :link="singleFeature?.link" :icon="singleFeature?.icon" />
    <FeatureExplanation :methods="singleFeature?.methods" :link="singleFeature?.link" />
  </div>
  <div v-else class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div>
      <p class="my-8 text-4xl">
        <lucide-lightbulb class="inline-block" />
      </p>
    </div>
    <div class="my-8">
      <ButtonSecondary
        :label="t('action.back')"
        @click="router.back()"
      />
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: home
</route>
