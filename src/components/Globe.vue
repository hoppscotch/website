<template>
  <div class="relative w-full overflow-hidden p-2">
    <div
      class="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 px-8"
    >
      <img
        loading="lazy"
        src="/images/globe.png"
        class="mt-80 h-[560px] w-[560px] max-w-none animate-[spin_600s_linear_infinite] rounded-full border border-zinc-600/50 bg-gradient-to-tr from-zinc-400/5 via-transparent to-zinc-400/5 shadow-[0_0_64px_32px_theme(colors.zinc.900)_inset] brightness-110"
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
