<template>
  <div class="mb-8" data-aos="fade-down">
    <div
      class="relative inline-flex before:absolute before:inset-0 before:bg-violet-500 before:rounded-full before:blur-md"
    >
      <RouterLink
        class="text-xs font-medium inline-flex items-center justify-center border border-transparent rounded-full px-3 py-1 text-slate-200 hover:text-white transition group [background:linear-gradient(theme(colors.violet.500),_theme(colors.violet.500))_padding-box,_linear-gradient(theme(colors.violet.500),_theme(colors.violet.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/50 before:rounded-full before:pointer-events-none shadow"
        to="/products/enterprise"
      >
        <span class="relative inline-flex items-center">
          Audit logs, SSO, admin dashboard + more
          <icon-lucide-sparkle class="mx-2 opacity-50" />
          Enterprise
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
