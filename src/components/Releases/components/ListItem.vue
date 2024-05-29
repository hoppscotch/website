<template>
  <li class="pl-4">
    {{ content }}
  </li>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
