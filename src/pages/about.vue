<template>
  <HeroAbout />
  <AboutStory />
  <TeamLocations />
  <OpenPositions />
  <TeamMembers />
  <Investors />
  <Cta />
  <Newsletter />
</template>
<script setup>
import { useHead } from "unhead"
useHead({
  title: "About • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "We're the humans behind Hoppscotch.",
    },
  ],
})
</script>
