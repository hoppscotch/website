<template>
  <div v-motion-fade class="mb-16">
    <div
      class="relative inline-flex before:absolute before:inset-0 before:bg-violet-500/50 before:rounded-full before:blur-md"
    >
      <RouterLink
        class="text-xs inline-flex items-center justify-center border border-transparent rounded-full px-3 py-1 text-slate-200 hover:text-white transition group [background:linear-gradient(theme(colors.violet.500),_theme(colors.violet.500))_padding-box,_linear-gradient(theme(colors.violet.500),_theme(colors.violet.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/50 before:rounded-full before:pointer-events-none shadow"
        to="/products/enterprise"
      >
        <span class="relative inline-flex items-center">
          <span
            class="inline-flex items-center justify-center px-2 py-1 mr-2 -ml-2 border rounded-full shadow border-violet-500 bg-violet-500/50 backdrop-blur-sm"
          >
            <icon-lucide-sparkles class="mr-1" />
            New
          </span>
          Introducing Hoppscotch Enterprise
          <span
            class="text-violet-500 group-hover:translate-x-0.5 transition-transform ml-1"
          >
            <icon-lucide-arrow-right />
          </span>
        </span>
      </RouterLink>
    </div>
  </div>
</template>
