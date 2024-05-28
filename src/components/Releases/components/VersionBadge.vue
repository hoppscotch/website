<template>
  <div class="mb-3 flex flex-row gap-3">
    <a
      :href="`#${version}`"
      class="text-md inline-flex items-center rounded-md border border-zinc-800 bg-zinc-500/10 px-2 text-zinc-400"
    >
      <span class="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
      {{ version }}
    </a>
    <p class="text-xl font-light">{{ date }}</p>
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
