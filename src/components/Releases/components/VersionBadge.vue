<template>
  <div class="mb-3 flex flex-row gap-3">
    <span
      class="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-xs text-zinc-400"
    >
      <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
      {{ version }}
    </span>
    <p class="text-sm font-light">{{ date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
}
</script>
