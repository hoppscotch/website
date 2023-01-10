<script setup lang="ts">
import arrowLeft from "~icons/lucide/arrow-left"

defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="pb-16">
    <ButtonSecondary :icon="arrowLeft" fill :to="to" outline />
  </div>
</template>
