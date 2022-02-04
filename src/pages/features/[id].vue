<script setup lang="ts">
import { features } from '~/assets/data/landingFeatures'
const { t } = useI18n()
const router = useRouter()

const props = defineProps<{ id: string }>()

const singleFeature = features.find(feature => t(feature.title).toLocaleLowerCase().replaceAll(' ', '-') === props.id.toLocaleLowerCase())
console.log(singleFeature)

</script>

<template>
  <div v-if="singleFeature" class="flex flex-col divide-y divide-dividerLight">
    <FeatureHero :title="singleFeature?.title" :description="singleFeature?.description" :image-dark="singleFeature?.imageDark" :image-light="singleFeature?.imageLight" :icon="singleFeature?.icon" />
    <FeatureExplanation :feature-list="singleFeature?.featureList" :description2="singleFeature.description2" />
  </div>
  <div v-else class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div>
      <p class="text-4xl my-8">
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
