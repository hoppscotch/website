<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { isDark } from "./composables"

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Hoppscotch - Open source API development ecosystem",
  meta: [
    { name: "description", content: "Open source API development ecosystem" },
    { name: "theme-color", content: isDark.value ? "#0f0f0f" : "#ffffff" },
  ],
})
</script>

<template>
  <RouterView />
</template>
