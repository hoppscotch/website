<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols.grpc.title"
        :description="protocols.grpc.description"
        :link="protocols.grpc.link"
        hero
      />
      <ProtocolAssetBlock
        :title="protocols.grpc.title"
        :image="protocols.grpc.image"
      />
    </div>
    <div v-for="(method,index) in protocols.grpc.methods" :key="index" class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
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
