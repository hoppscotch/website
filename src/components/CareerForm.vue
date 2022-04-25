<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import CheckCircle from '~icons/lucide/check-circle'

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
  console.log('user-details', user)
  formSubmit.value = true
}

</script>

<template>
  <div v-if="!formSubmit" class="flex flex-col py-5">
    <h2>
      Apply
    </h2>
    <form ref="formRef" class="max-w-xl" netlify @submit.prevent="handleFormSubmit">
      <SmartInput
        v-model="user.name"
        label="Name"
        placeholder="Your name"
        name="name"
        type="text"
        required
      />
      <SmartInput
        v-model="user.email"
        label="Email"
        placeholder="Your email"
        name="email"
        type="email"
        required
      />
      <SmartInput
        v-model="user.resume"
        label="Resume"
        name="resume"
        type="file"
      />
      <SmartInput
        v-model="user.linkedin"
        label="LinkedIn profile"
        placeholder="Your LinkedIn profile"
        name="linkedin"
        type="url"
      />
      <SmartInput
        v-model="user.github"
        label="GitHub profile"
        placeholder="Your GitHub profile"
        name="github"
        type="url"
      />
      <SmartInput
        v-model="user.message"
        label="What is most important to you in your next role?"
        placeholder="Type here"
        name="message"
        rows="6"
        required
      />
      <input value="Submit Application" :disabled="!isCompleted" class="form-button" type="submit">
    </form>
  </div>
  <div v-if="formSubmit" class="flex flex-col items-center justify-center my-8 py-10 border-2 border-accent border-solid rounded">
    <CheckCircle class="text-3xl my-5 text-accent" />
    <h1>Application has been submitted</h1>
    <p>We will be in touch with you shortly.</p>
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
