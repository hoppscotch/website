<script setup lang="ts">
const props = defineProps<{
  role: string;
}>()
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col py-8">
    <div>{{ t("careers.form.heading") }}</div>
    <form
      method="POST"
      action="/company/careers/success"
      netlify
      data-netlify="true"
      class="flex flex-col space-y-6"
      name="Careers"
    >
      <input type="hidden" name="form-name" value="Careers" />
      <input
        id="role"
        type="text"
        name="role"
        :value="props.role"
        readonly
        class="pointer-events-none form-input"
      />
      <label class="flex flex-col" for="name">
        <strong>
          {{ t("careers.form.name.label") }}
          <span class="required">*</span>
        </strong>
        <input
          id="name"
          class="form-input"
          type="text"
          name="name"
          :placeholder="t('careers.form.name.placeholder')"
          required
        />
      </label>
      <label class="flex flex-col" for="email">
        <strong>
          {{ t("careers.form.email.label") }}
          <span class="required">*</span>
        </strong>
        <input
          id="email"
          class="form-input"
          type="email"
          name="email"
          :placeholder="t('careers.form.email.placeholder')"
          required
        />
      </label>
      <label class="flex flex-col" for="resume">
        <strong>
          {{ t("careers.form.resume.label") }}
        </strong>
        <input
          id="resume"
          type="file"
          name="resume"
          class="p-1 border cursor-pointer transition border-dividerDarkfile:border text-secondaryLight file:border-dividerLight form-input file:transition file:cursor-pointer file:rounded file:text-secondary file:bg-primaryLight file:mr-2 file:py-1 file:px-4 hover:text-secondaryDark hover:file:text-secondaryDark hover:file:bg-primaryDark"
        />
      </label>
      <label class="flex flex-col" for="linked">
        <strong>
          {{ t("careers.form.linkedin.label") }}
        </strong>
        <input
          id="linkedin"
          class="form-input"
          type="url"
          name="linkedin"
          :placeholder="t('careers.form.linkedin.placeholder')"
        />
      </label>
      <label class="flex flex-col" for="github">
        <strong>
          {{ t("careers.form.github.label") }}
        </strong>
        <input
          id="github"
          class="form-input"
          type="url"
          name="github"
          :placeholder="t('careers.form.github.placeholder')"
        />
      </label>
      <label class="flex flex-col" for="message">
        <strong>
          {{ t("careers.form.message.label") }}
          <span class="required">*</span>
        </strong>
        <textarea
          id="message"
          name="message"
          :placeholder="t('careers.form.message.placeholder')"
          required
          rows="6"
          class="form-input"
        />
      </label>
      <input
        type="submit"
        :value="t('careers.form.submit')"
        class="form-button"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.required {
  @apply text-red-500;
  @apply font-bold;
  @apply mr-2;
}

.form-input {
  @apply mt-2;
  @apply transition;
  @apply rounded;
  @apply text-secondary;
  @apply bg-primaryLight;
  @apply py-2;
  @apply px-4;
  @apply border-none;
  @apply outline-none;
  @apply hover:text-secondaryDark;
  @apply hover:bg-primaryDark;
  @apply focus-visible:outline-accent;
}

.form-button {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply px-4;
  @apply py-2;
  @apply rounded;
  @apply font-bold;
  @apply text-accentContrast;
  @apply bg-accent;
  @apply outline-none;
  @apply focus:bg-accentDark;
  @apply focus:outline-none;
  @apply hover:bg-accentDark;
  @apply transition-all;
  @apply cursor-pointer;
  @apply my-4;
}
</style>
