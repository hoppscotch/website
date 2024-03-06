<script setup lang="ts">
const isDark = usePreferredDark()
const favicon = computed(() =>
  isDark.value ? "favicon-dark.ico" : "favicon-light.ico",
)

useFavicon(favicon)
</script>

<template>
  <RouterView />
</template>
