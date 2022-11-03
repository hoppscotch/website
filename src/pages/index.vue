<script setup lang="ts"></script>

<template>
  <div class="flex flex-col divide-y divide-divider">
    <LandingHero />
    <LandingUsers />
    <LandingPlatforms />
    <LandingFeatures />
    <LandingContributors />
    <LandingTestimonials />
    <LandingCTA />
    <LandingSocial />
    <LandingNewsletter />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
