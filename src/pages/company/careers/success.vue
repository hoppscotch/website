<script setup lang="ts">
import CheckCircle from '~icons/lucide/check-circle'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center max-w-md py-10 mx-auto my-8 text-center rounded">
    <CheckCircle class="my-8 text-3xl text-accent" />
    <h1>{{ t("careers.form.success_message") }}</h1>
    <p class="my-2 text-xs text-secondaryLight">
      {{ t("careers.form.success_message_subheading") }}
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
