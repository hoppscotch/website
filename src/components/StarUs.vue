<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border border-zinc-800 h-80 rounded-2xl bg-gradient-to-b from-zinc-800/10 to-zinc-400/10"
    >
      <div
        class="absolute bg-center inset-0 h-full w-full bg-[linear-gradient(to_right,theme(colors.zinc.400)1A_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.zinc.400)1A_1px,transparent_1px)] bg-[size:128px_128px]"
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
              class="items-center table mx-8 text-6xl font-semibold leading-normal tracking-tight text-center truncate text-zinc-400 font-jakarta"
            >
              Star us on GitHub
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
              class="items-center table mx-8 text-6xl font-semibold leading-normal tracking-tight text-center truncate text-zinc-400 font-jakarta"
            >
              Star us on GitHub
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
