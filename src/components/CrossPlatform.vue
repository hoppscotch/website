<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border h-80 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <!-- <div
        class="absolute bg-center inset-0 h-full w-full bg-[linear-gradient(to_right,theme(colors.neutral.400)1A_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.400)1A_1px,transparent_1px)] bg-[size:20px_20px]"
      ></div> -->
      <div
        class="absolute bg-center inset-0 h-full w-full bg-[radial-gradient(theme(colors.neutral.400)1A_1px,transparent_1px)] [background-size:18px_18px]"
      ></div>
      <div
        class="relative inline-flex items-center px-8 py-4 mx-auto overflow-hidden rounded-full transition transform bg-neutral-800/80 hover:scale-110 group"
      >
        <div
          class="absolute inset-0 flex items-center [container-type:inline-size]"
        >
          <div
            class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,theme(colors.neutral.50)_0deg,transparent_60deg,transparent_300deg,theme(colors.neutral.50)_360deg)] transition duration-300 [animation-duration:3s]"
          ></div>
        </div>
        <div class="absolute inset-0.5 rounded-full bg-neutral-950"></div>
        <div
          class="absolute bottom-0 w-4/5 rounded-full opacity-50 transition-all duration-500 -translate-x-1/2 left-1/2 h-1/3 bg-neutral-900 blur-md group-hover:h-2/3 group-hover:opacity-100"
        ></div>
        <span
          class="relative text-lg font-medium text-transparent transition-all duration-200 font-mona bg-gradient-to-b from-neutral-200/25 to-neutral-50 bg-clip-text"
        >
          Comming Soon
        </span>
      </div>
    </div>
  </div>
</template>
