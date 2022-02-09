<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
import book from '~icons/lucide/book-open'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col divide-y divide-dividerLight">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols.realtime.title"
        :description="protocols.realtime.description"
        :icon="protocols.realtime.icon"
        :link="protocols.realtime.link"
        hero
      />
      <div class="w-full h-auto sm:w-150 my-15">
        <ProtocolAssetBlock
          :title="protocols.realtime.title"
          :image-dark="protocols.realtime.imageDark"
          :image-light="protocols.realtime.imageLight"
        />
      </div>
    </div>

    <div class="flex flex-col items-center px-8 py-10 gap-10">
      <h2 class="text-2xl text-center sm:text-3xl">
        {{ t(protocols.realtime.title2) }}
      </h2>
      <div class="flex flex-col items-center justify-between w-full py-10 sm:flex-row gap-10 ">
        <div class="basis-1/2 lg:basis-1/4">
          <div class="grid grid-cols-2 gap-8">
            <p v-for="communicationProtocol in protocols.realtime.communicationProtocols" :key="communicationProtocol.title" class="flex items-center space-x-2">
              <i v-if="communicationProtocol.icon" class="p-1 rounded-full text-md text-accent">
                <component :is="communicationProtocol.icon" />
              </i>
              <span class="text-lg">{{ t(communicationProtocol.title) }}</span>
            </p>
          </div>
        </div>
        <div class="basis-1/2 ">
          <ProtocolAssetBlock
            :title="protocols.realtime.title"
            image-dark="https://docs.hoppscotch.io/Realtime/socketio-dark.png"
            image-light="https://docs.hoppscotch.io/Realtime/socketio-light.png"
          />
        </div>
      </div>
    </div>

    <div v-if="protocols.realtime.methods" class="flex flex-col px-8 py-16">
      <div v-for="(method,index) in protocols.realtime.methods" :key="index" class="flex flex-col items-start justify-between my-20 gap-20" :class="index%2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'">
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
            :video-link="method.videoLink"
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
