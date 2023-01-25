<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: "Hoppscotch - Not found",
})
</script>

<template>
  <div class="flex flex-col items-center justify-center flex-1">
    {{ t("error.404") }}
  </div>
</template>
