<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border h-80 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
    >
      <div
        class="absolute bg-center inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.400)1A_1px,transparent_1px)] [background-size:18px_18px]"
      ></div>
      <RouterLink
        to="/download"
        class="relative inline-flex items-center px-8 py-4 mx-auto overflow-hidden rounded-full transition transform bg-gray-800/80 hover:scale-110 group"
      >
        <div
          class="absolute inset-0 flex items-center [container-type:inline-size]"
        >
          <div
            class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,theme(colors.gray.50)_0deg,transparent_60deg,transparent_300deg,theme(colors.gray.50)_360deg)] transition duration-300 [animation-duration:3s]"
          ></div>
        </div>
        <div class="absolute inset-0.5 rounded-full bg-gray-950"></div>
        <div
          class="absolute bottom-0 w-4/5 bg-gray-900 rounded-full opacity-50 transition-all duration-500 -translate-x-1/2 left-1/2 h-1/3 blur-md group-hover:h-2/3 group-hover:opacity-100"
        ></div>
        <span
          class="relative text-lg font-medium text-transparent transition-all duration-200 font-mona bg-gradient-to-b from-gray-200/25 to-gray-50 bg-clip-text"
        >
          Download App
        </span>
      </RouterLink>
    </div>
  </div>
</template>
