<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols.rest.title"
        :description="protocols.rest.description"
        :link="protocols.rest.link"
        hero
      />
      <ProtocolAssetBlock
        :title="protocols.rest.title"
        :image="protocols.rest.image"
      />
    </div>
    <div v-for="(method, index) in protocols.rest.methods" :key="index" class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
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
