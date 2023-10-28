<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border h-80 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <img
        loading="lazy"
        src="/images/globe.png"
        class="max-w-none border border-neutral-600/50 h-[560px] w-[560px] brightness-110 bg-gradient-to-tr from-neutral-400/5 via-transparent to-neutral-400/5 shadow-[0_0_64px_32px_theme(colors.neutral.900)_inset] mt-80 rounded-full animate-[spin_600s_linear_infinite]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @keyframes identifier {
    100% {
      transform: translateZ(0) translate(-50%) rotate(1turn);
    }
  }
</style>
