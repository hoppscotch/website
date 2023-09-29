<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border h-80 rounded-2xl border-violet-500/25 bg-gradient-to-b from-violet-600/5 to-violet-500/5 backdrop-blur-md"
    >
      <img
        loading="lazy"
        src="/images/globe.png"
        class="max-w-none h-[560px] w-[560px] brightness-110 bg-gradient-to-tr from-violet-400/5 to-violet-500/10 shadow-[0_56px_88px_theme(colors.violet.950)_inset] mt-80 rounded-full animate-[spin_600s_linear_infinite]"
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
