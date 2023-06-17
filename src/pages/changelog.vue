<template>
  <ChangeLogs />
  <Newsletter />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Changelog • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "New updates and improvements to Hoppscotch.",
    },
  ],
})
</script>
