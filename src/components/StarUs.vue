<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border h-80 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <div
        class="absolute bg-center inset-0 h-full w-full bg-[linear-gradient(to_right,theme(colors.neutral.400)1A_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.neutral.400)1A_1px,transparent_1px)] bg-[size:128px_128px]"
      ></div>
      <div class="flex flex-col items-center justify-center">
        <div
          class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul class="flex items-center justify-center animate-infinite-scroll">
            <a
              v-for="index in 12"
              :key="index"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
              class="table mx-8 truncate items-center text-center animate-background-shine bg-[linear-gradient(110deg,transparent,45%,theme(colors.neutral.300),55%,transparent)] bg-[length:200%_100%] bg-clip-text font-bold font-jakarta text-transparent"
              ><h1>Star us on GitHub</h1>
            </a>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start animate-infinite-scroll"
            aria-hidden="true"
          >
            <a
              v-for="index in 12"
              :key="index"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
              class="table mx-8 truncate items-center text-center animate-background-shine bg-[linear-gradient(110deg,transparent,45%,theme(colors.neutral.300),55%,transparent)] bg-[length:200%_100%] bg-clip-text font-bold font-jakarta text-transparent"
            >
              <h1>Star us on GitHub</h1>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
