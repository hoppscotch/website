<template>
  <ContactForm />
  <Newsletter />
</template>
<script setup>
import { useHead } from "@unhead/vue"
useHead({
  title: "Contact • Hoppscotch",
  meta: [
    {
      name: "description",
      content: "Contact Hoppscotch",
    },
  ],
})
</script>
