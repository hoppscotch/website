<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-16 px-8">
    <form
      action="https://launchaco.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f"
      method="post"
      target="_blank"
      validate
    >
      <label for="mce-EMAIL" class="flex font-bold flex-1 mb-8 text-2xl justify-center">{{ t('newsletter.title') }}</label>
      <div class="flex flex-col space-y-2 justify-center md:(space-x-2 space-y-0 flex-row) ">
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
    </form>
  </div>
</template>

<style scoped>
.form-input {
  @apply flex;
  @apply px-4;
  @apply py-2;
  @apply rounded-lg;
  @apply text-secondaryDark;
  @apply bg-primaryLight;
  @apply outline-none;
  @apply focus:(outline-none bg-primaryDark) ;
  @apply hover:bg-primaryDark;
  @apply transition-all;
}

.form-button {
  @apply px-4;
  @apply py-2;
  @apply rounded-lg;
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
