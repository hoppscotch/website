<template>
  <p class="mb-4 mt-12 text-3xl font-medium text-zinc-200 sm:text-2xl">
    {{ title }}
  </p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
