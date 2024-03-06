<template>
  <div class="relative w-full overflow-hidden p-2">
    <div
      class="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 px-8"
    >
      <div
        class="absolute inset-0 h-full w-full bg-[radial-gradient(theme(colors.zinc.400)1A_1px,transparent_1px)] bg-center [background-size:18px_18px]"
      ></div>
      <RouterLink
        to="/download"
        class="group relative mx-auto inline-flex transform items-center overflow-hidden rounded-full bg-zinc-800/80 px-8 py-4 transition hover:scale-110"
      >
        <div
          class="absolute inset-0 flex items-center [container-type:inline-size]"
        >
          <div
            class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,theme(colors.zinc.50)_0deg,transparent_60deg,transparent_300deg,theme(colors.zinc.50)_360deg)] transition duration-300 [animation-duration:3s]"
          ></div>
        </div>
        <div class="absolute inset-0.5 rounded-full bg-zinc-950"></div>
        <div
          class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-zinc-900 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"
        ></div>
        <span
          class="font-mona relative bg-gradient-to-b from-zinc-200/25 to-zinc-50 bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
        >
          Download App
        </span>
      </RouterLink>
    </div>
  </div>
</template>
