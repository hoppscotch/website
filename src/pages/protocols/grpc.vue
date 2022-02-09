<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
import book from '~icons/lucide/book-open'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col divide-y divide-dividerLight">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols.grpc.title"
        :description="protocols.grpc.description"
        :icon="protocols.grpc.icon"
        :link="protocols.grpc.link"
        hero
      />
      <div class="w-full h-auto sm:w-150 my-15">
        <ProtocolAssetBlock
          :title="protocols.grpc.title"
          :image-dark="protocols.grpc.imageDark"
          :image-light="protocols.grpc.imageLight"
        />
      </div>
    </div>

    <div class="flex flex-col px-8 py-16">
      <div v-for="(method,index) in protocols.rest.methods" :key="index" class="flex flex-col items-start justify-between my-20 gap-20" :class="index%2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'">
        <div class=" basis-1/2">
          <ProtocolDetailBlock
            :title="method.title"
            :description="method.description"
            :link="method.link"
          />
        </div>
        <div class="basis-1/2">
          <ProtocolAssetBlock
            :title="method.title"
            :image-dark="method.imageDark"
            :image-light="method.imageLight"
          />
        </div>
      </div>
      <div class="flex items-center justify-center py-5 gap-4">
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
