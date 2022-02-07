<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
const { t } = useI18n()
const router = useRouter()
const props = defineProps<{ id: string }>()
const singleProtocol = protocols.find(protocol => t(protocol.slug).toLocaleLowerCase().replaceAll(' ', '-') === props.id.toLocaleLowerCase())
</script>

<template>
  <div v-if="singleProtocol" class="flex flex-col divide-y divide-dividerLight">
    <FeatureHero :title="singleProtocol?.title" :description="singleProtocol?.description" :image-dark="singleProtocol?.imageDark" :image-light="singleProtocol?.imageLight" :video-link="singleProtocol?.videoLink" :link="singleProtocol?.link" :icon="singleProtocol?.icon" />
    <FeatureExplanation :methods="singleProtocol?.methods" :link="singleProtocol?.link" />
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
