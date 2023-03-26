<template>
  <div class="flex flex-col">
    <LandingHero />
    <LandingBanner />
    <LandingUsers />
    <AreaLight style="--color: var(--purple)" />
    <LandingFeatures />
    <AreaLight style="--color: var(--pink)" />
    <LandingPlatforms />
    <AreaLight style="--color: var(--emerald)" />
    <LandingRepositories />
    <AreaLight style="--color: var(--blue)" />
    <LandingTestimonials />
    <LandingSocial />
    <LandingNewsletter />
    <LandingCTA />
  </div>
</template>

<style lang="scss">
:root {
  --purple: theme("colors.purple.600");
  --pink: theme("colors.pink.600");
  --emerald: theme("colors.emerald.600");
  --blue: theme("colors.blue.600");
}
</style>
