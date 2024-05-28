<template>
  <img
    class="mb-4 mt-12 w-full rounded-lg border border-zinc-800 shadow-lg"
    :src="imageSource"
    alt=""
  />
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true,
    },
  },
}
</script>
