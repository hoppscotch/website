<template>
  <RouterView />
</template>
<script setup>
import AOS from "aos"
import { onMounted } from "vue"
onMounted(() => {
  AOS.init()
})
</script>
