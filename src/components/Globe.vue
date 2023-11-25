<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border border-gray-800 h-80 rounded-2xl bg-gradient-to-b from-gray-800/10 to-gray-400/10"
    >
      <img
        loading="lazy"
        src="/images/globe.png"
        class="max-w-none border border-gray-600/50 h-[560px] w-[560px] brightness-110 bg-gradient-to-tr from-gray-400/5 via-transparent to-gray-400/5 shadow-[0_0_64px_32px_theme(colors.gray.900)_inset] mt-80 rounded-full animate-[spin_600s_linear_infinite]"
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
