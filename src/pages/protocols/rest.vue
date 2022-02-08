<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
import book from '~icons/lucide/book-open'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col divide-y divide-dividerLight">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols[0].title"
        :description="protocols[0].description"
        :icon="protocols[0].icon"
        :link="protocols[0].link"
        hero
      />
      <div class="w-full h-auto sm:w-150 my-15">
        <ProtocolAssetBlock
          :title="protocols[0].title"
          :image-dark="protocols[0].imageDark"
          :image-light="protocols[0].imageLight"
        />
      </div>
    </div>

    <div class="py-10 px-8 flex flex-col items-center gap-10">
      <h2 class="text-3xl text-center">
        {{ t(protocols[0].title2) }}
      </h2>
      <div class="flex flex-col sm:flex-row justify-between items-center w-full gap-10 py-10 ">
        <div class="basis-1/2 lg:basis-1/4">
          <div class="grid grid-cols-2 gap-5">
            <p v-for="httpMethod in protocols[0].httpMethods" :key="httpMethod.title" class="flex items-center space-x-2">
              <i v-if="httpMethod.icon" class="p-1 text-md rounded-full text-accent">
                <component :is="httpMethod.icon" />
              </i>
              <span class="text-lg">{{ t(httpMethod.title) }}</span>
            </p>
          </div>
        </div>
        <div class="basis-1/2 ">
          <ProtocolAssetBlock
            :title="protocols[0].title"
            image-dark="https://docs.hoppscotch.io/api/method-dark.png"
            image-light="https://docs.hoppscotch.io/api/method-light.png"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col px-8 py-16">
      <div v-for="(method,index) in protocols[0].methods" :key="index" class="flex flex-col items-start justify-between my-20 gap-20" :class="index%2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'">
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
