<script setup lang="ts">
import { gradients } from '~/assets/data/gradients'

const { t } = useI18n()
</script>

<template>
  <form
    action="https://launchaco.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f"
    method="post"
    target="_blank"
    validate
    class="flex flex-col flex-1 px-8 py-16 mx-auto lg:max-w-4xl"
  >
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col">
        <div
          class="flex mb-2 text-2xl bg-clip-text bg-gradient-to-br font-semibold tracking-tight text-transparent"
          :class="gradients.gray"
        >
          {{ t("newsletter.title") }}
        </div>
        <div class="text-secondaryLight">
          {{ t("newsletter.description") }}
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="inline-flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
        >
          <input
            id="mce-EMAIL"
            name="EMAIL"
            class="form-input"
            type="email"
            :placeholder="t('newsletter.email')"
            required
          />
          <input
            id="mc-embedded-subscribe"
            type="submit"
            :value="t('newsletter.subscribe')"
            name="subscribe"
            class="form-button"
          />
        </div>
        <div class="mt-4 opacity-50 text-secondaryLight">
          {{ t("newsletter.prompt") }}
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form-input {
  @apply inline-flex;
  @apply flex-1;
  @apply px-6;
  @apply py-4;
  @apply rounded-lg;
  @apply text-secondaryDark;
  @apply bg-primaryLight;
  @apply outline-none;
  @apply focus:(outline-none bg-primaryDark);
  @apply hover:bg-primaryDark;
  @apply transition-all;
}

.form-button {
  @apply inline-flex;
  @apply px-6;
  @apply py-4;
  @apply rounded-lg;
  @apply font-bold;
  @apply text-accentContrast;
  @apply bg-primaryDark;
  @apply outline-none;
  @apply focus:(outline-none bg-accentDark);
  @apply hover:bg-accentDark;
  @apply transition-all;
  @apply cursor-pointer;
}
</style>
