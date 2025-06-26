<template>
  <div class="max-w-2xl">
    <h5 class="flex items-center">
      <icon-lucide-sparkles class="mr-3" />
      Added
    </h5>
    <ul
      class="mb-8 mt-4 list-disc space-y-2 pl-4 text-zinc-400/80 marker:text-green-500"
    >
      <slot> </slot>
    </ul>
  </div>
</template>
