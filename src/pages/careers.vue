<template>
  <TeamLocations />
  <Roles />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Careers • Hoppscotch",
  meta: [
    {
      name: "description",
      content:
        "Hoppscotch is hiring! Join us in building the best API development tools.",
    },
  ],
})
</script>
