<template>
  <div class="max-w-2xl">
    <h5 class="flex items-center">
      <icon-lucide-badge-check class="mr-3" />
      Changed
    </h5>
    <ul
      class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
    >
      <slot> </slot>
    </ul>
  </div>
</template>
