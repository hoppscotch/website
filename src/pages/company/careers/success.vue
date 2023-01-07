<script setup lang="ts">
import CheckCircle from "~icons/lucide/check-circle"

const { t } = useI18n()
</script>

<template>
  <div
    class="rounded flex flex-col mx-auto max-w-md my-8 text-center py-10 items-center justify-center"
  >
    <CheckCircle class="my-8 text-accent text-3xl" />
    <h1>{{ t("careers.form.success_message") }}</h1>
    <p class="my-2 text-secondaryLight">
      {{ t("careers.form.success_message_subheading") }}
    </p>
  </div>
</template>
