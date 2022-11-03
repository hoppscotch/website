<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
</script>

<template>
  <div class="flex flex-col divide-y divide-divider">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols.realtime.title"
        :description="protocols.realtime.description"
        :link="protocols.realtime.link"
        hero
      />
      <ProtocolAssetBlock
        :title="protocols.realtime.title"
        :image="protocols.realtime.image"
      />
    </div>
    <div v-for="(method, index) in protocols.realtime.methods" :key="index" class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="method.title"
        :description="method.description"
        :link="method.link"
      />
      <ProtocolAssetBlock
        :title="method.title"
        :image="method.image"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
