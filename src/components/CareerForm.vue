<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import CheckCircle from '~icons/lucide/check-circle'

const { t } = useI18n()

const route = useRoute()
const formRef = ref(null)
const formSubmit = ref(false)

const user = reactive({
  name: '',
  email: '',
  resume: '',
  linkedin: '',
  github: '',
  message: '',
  role: route.fullPath.split('/').pop(),
})

const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const validateMessage = (message: string) => {
  return message.length > 10
}

const isCompleted = computed(() => (
  user.name && validateEmail(user.email) && validateMessage(user.message) && user.role
))

const handleFormSubmit = () => {
  formSubmit.value = true
}

</script>

<template>
  <div v-if="!formSubmit" class="flex flex-col py-5">
    <h2>
      {{t("careers.form.heading")}}
    </h2>
    <form ref="formRef" class="max-w-xl" netlify @submit.prevent="handleFormSubmit">
      <SmartInput
        v-model="user.name"
        :label="t('careers.form.name.label')"
        :placeholder="t('careers.form.name.placeholder')"
        name="name"
        type="text"
        required
      />
      <SmartInput
        v-model="user.email"
        :label="t('careers.form.email.label')"
        :placeholder="t('careers.form.email.placeholder')"
        name="email"
        type="email"
        required
      />
      <SmartInput
        v-model="user.resume"
        :label="t('careers.form.resume.label')"
        name="resume"
        type="file"
      />
      <SmartInput
        v-model="user.linkedin"
        :label="t('careers.form.linkedin.label')"
        :placeholder="t('careers.form.linkedin.placeholder')"
        name="linkedin"
        type="url"
      />
      <SmartInput
        v-model="user.github"
        :label="t('careers.form.github.label')"
        :placeholder="t('careers.form.github.placeholder')"
        name="github"
        type="url"
      />
      <SmartInput
        v-model="user.message"
        :label="t('careers.form.message.label')"
        :placeholder="t('careers.form.message.placeholder')"
        name="message"
        rows="6"
        required
      />
      <input :value="t('careers.form.submit_btn')" :disabled="!isCompleted" class="form-button" type="submit">
    </form>
  </div>
  <div v-if="formSubmit" class="flex flex-col items-center justify-center my-8 py-10 border-2 border-accent border-solid rounded">
    <CheckCircle class="text-3xl my-8 text-accent" />
    <h1>{{t("careers.form.success_message")}}</h1>
    <p>{{t("careers.form.success_message_subheading")}}</p>
  </div>
</template>

<style>
.form-button {
  @apply inline-flex;
  @apply px-4;
  @apply py-2;
  @apply rounded-lg;
  @apply font-bold;
  @apply text-accentContrast;
  @apply bg-accent;
  @apply outline-none;
  @apply focus:(outline-none bg-accentDark);
  @apply hover:bg-accentDark;
  @apply transition-all;
  @apply cursor-pointer;
  @apply my-4;
}
.form-button:disabled {
  @apply cursor-not-allowed opacity-50 hover: bg-accent;
}
</style>
