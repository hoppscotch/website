<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { isDark } from "~/composables"
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative py-32">
      <AnimatedGrid />
      <AnimatedComponent animation-type="zoom">
        <div
          class="bg-gradient-to-br rounded flex p-0.2 relative md:rounded-lg"
          :class="gradients.accent"
        >
          <SmartGradient animate :blur="64" />
          <img
            class="object-contain object-center w-full h-full rounded transition md:rounded-lg"
            :src="`/assets/images/screenshots/${
              isDark ? 'dark' : 'light'
            }-banner.png`"
            alt="Screenshot"
            loading="lazy"
          />
        </div>
      </AnimatedComponent>
    </div>
  </div>
</template>
