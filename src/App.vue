<script setup lang="ts">
  import AOS from "aos"

  onMounted(() => {
    AOS.init()
  })
</script>

<template>
  <RouterView />
</template>
