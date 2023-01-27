<script setup lang="ts">
import CheckCircle from "~icons/lucide/check-circle"

const { t } = useI18n()

useHead({
  title: "Hoppscotch - Careers | Application Submitted",
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center py-10 mx-auto my-8 text-center rounded-lg"
  >
    <CheckCircle class="my-8 text-3xl text-accent" />
    <div>{{ t("careers.form.success_message") }}</div>
    <div class="my-2 text-secondaryLight">
      {{ t("careers.form.success_message_subheading") }}
    </div>
  </div>
</template>
