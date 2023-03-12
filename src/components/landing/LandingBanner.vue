<script setup lang="ts">
import { isDark } from "~/composables"
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative py-32">
      <AnimatedGrid />
      <AnimatedComponent animation-type="zoom">
        <div
          class="bg-gradient-to-br rounded md:rounded-lg flex p-0.2 relative"
        >
          <SmartGradient animate :blur="128" />
          <img
            class="object-contain object-center w-full h-full max-w-6xl rounded transition md:rounded-lg"
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
