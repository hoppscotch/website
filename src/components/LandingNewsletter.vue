<script setup lang="ts">
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
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="flex flex-col">
        <h4 class="flex mb-2 text-2xl font-semibold tracking-tighter text-secondaryDark">
          {{ t('newsletter.title') }}
        </h4>
        <p class="text-secondaryLight">
          {{ t('newsletter.description') }}
        </p>
      </div>
      <div class="flex flex-col">
        <div class="inline-flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
          <input
            id="mce-EMAIL"
            name="EMAIL"
            class="form-input"
            type="email"
            :placeholder="t('newsletter.email')"
            required
          >
          <input
            id="mc-embedded-subscribe"
            type="submit"
            :value="t('newsletter.subscribe')"
            name="subscribe"
            class="form-button"
          >
        </div>
        <p class="mt-4 text-xs text-secondaryLight">
          {{ t('newsletter.prompt') }}
        </p>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form-input {
  @apply inline-flex;
  @apply flex-1;
  @apply px-4;
  @apply py-2;
  @apply rounded;
  @apply text-secondaryDark;
  @apply bg-primaryLight;
  @apply outline-none;
  @apply focus:(outline-none bg-primaryDark) ;
  @apply hover:bg-primaryDark;
  @apply transition-all;
}

.form-button {
  @apply inline-flex;
  @apply px-4;
  @apply py-2;
  @apply rounded;
  @apply font-bold;
  @apply text-accentContrast;
  @apply bg-accentLight;
  @apply outline-none;
  @apply focus:(outline-none bg-accentDark) ;
  @apply hover:bg-accentDark;
  @apply transition-all;
  @apply cursor-pointer;
}
</style>
