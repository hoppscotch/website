<script setup lang="ts"></script>

<template>
  <div class="flex flex-col divide-y divide-dividerLight">
    <LandingHero />
    <LandingUsers />
    <LandingFeatures />
    <LandingContributors />
    <LandingSocial />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
