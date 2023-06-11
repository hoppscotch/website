<template>
  <router-view />
</template>

<script setup>
import AOS from "aos"
import { onMounted } from "vue"

onMounted(() => {
  AOS.init({
    once: true,
    disable: "phone",
    duration: 500,
    easing: "ease-out-cubic",
  })
})
</script>
