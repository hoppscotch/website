<template>
  <HeroAbout />
  <AboutAchievements />
  <Team />
  <Cta />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "Company • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "We're the humans behind Hoppscotch.",
    },
  ],
})
</script>
