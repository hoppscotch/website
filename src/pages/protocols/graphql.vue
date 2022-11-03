<script setup lang="ts">
import { protocols } from '~/assets/data/protocolsList'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
      <ProtocolDetailBlock
        :title="protocols.graphql.title"
        :description="protocols.graphql.description"
        :link="protocols.graphql.link"
        hero
      />
      <ProtocolAssetBlock
        :title="protocols.graphql.title"
        :image="protocols.graphql.image"
      />
    </div>
    <div v-for="(method, index) in protocols.graphql.methods" :key="index" class="flex flex-col items-center justify-between px-8 py-16 lg:flex-row">
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
