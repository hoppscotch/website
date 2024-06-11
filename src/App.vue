<script setup lang="ts">
import { useRoute } from "vue-router"

const isDark = usePreferredDark()
const favicon = computed(() =>
  isDark.value ? "favicon-dark.ico" : "favicon-light.ico",
)
const route = useRoute()
const isReleasesRoute = computed(() => route.path.startsWith("/releases/"))

useFavicon(favicon)
</script>

<template>
  <div :class="{ 'releases-container': isReleasesRoute }">
    <RouterView />
  </div>
</template>

<style>
.releases-container {
  position: relative;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 8rem;
  padding-bottom: 6rem;
}

@media (min-width: 640px) {
  .releases-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
