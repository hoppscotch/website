<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
import book from '~icons/lucide/book-open'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col divide-y divide-dividerLight">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols[1].title"
        :description="protocols[1].description"
        :icon="protocols[1].icon"
        :link="protocols[1].link"
        hero
      />
      <div class="w-full h-auto sm:w-150 my-15">
        <ProtocolAssetBlock
          :title="protocols[1].title"
          :video-link="protocols[1].videoLink"
        />
      </div>
    </div>

    <div v-if="protocols[1].methods" class="flex flex-col px-8 py-16">
      <div v-for="(method,index) in protocols[1].methods" :key="index" class="flex flex-col items-start justify-between my-20 gap-20" :class="index%2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'">
        <div class="w-full basis-1/2">
          <ProtocolDetailBlock
            :title="method.title"
            :description="method.description"
            :link="method.link"
          />
        </div>
        <div class="w-full basis-1/2">
          <ProtocolAssetBlock
            :title="method.title"
            :image-dark="method.imageDark"
            :image-light="method.imageLight"
          />
        </div>
      </div>
      <div class="flex items-center justify-center gap-4 py-5">
        <ButtonPrimary label="Open App" blank to="https://www.hoppscotch.io" />
        <ButtonSecondary label="See Documentation" :icon="book" blank :to="link" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
