<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border space-x-4 h-80 rounded-2xl border-violet-500/25 bg-gradient-to-b from-violet-600/5 to-violet-500/5"
    >
      <div
        class="absolute inset-0 h-full w-full bg-[radial-gradient(theme(colors.violet.950)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      ></div>
      <icon-lucide-globe
        class="z-10 w-16 h-16 p-3 mb-4 border rounded-xl border-violet-400/20 bg-violet-400/10 backdrop-blur-md"
      />
      <img
        loading="lazy"
        class="z-10 p-3 mb-4 border rounded-xl border-violet-400/20 bg-violet-400/10 backdrop-blur-md"
        src="/images/download-apple.svg"
        width="64"
        height="64"
        alt="Icon 01"
      />
      <img
        loading="lazy"
        class="z-10 p-3 mb-4 border rounded-xl border-violet-400/20 bg-violet-400/10 backdrop-blur-md"
        src="/images/download-windows.svg"
        width="64"
        height="64"
        alt="Icon 01"
      />
      <icon-lucide-terminal
        class="z-10 w-16 h-16 p-3 mb-4 border rounded-xl border-violet-400/20 bg-violet-400/10 backdrop-blur-md"
      />
    </div>
  </div>
</template>
