<script setup lang="ts">
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

<template>
  <CompanyHero />
  <CompanyAchievements />
  <CompanyTimeline />
  <TeamMembers />
  <Investors />
  <Cta />
</template>
