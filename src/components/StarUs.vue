<template>
  <div class="relative w-full overflow-hidden p-2">
    <div
      class="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 px-8"
    >
      <div
        class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,theme(colors.zinc.400)1A_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.zinc.400)1A_1px,transparent_1px)] bg-[size:128px_128px] bg-center"
      ></div>
      <div class="flex flex-col items-center justify-center">
        <div
          class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul class="flex animate-infinite-scroll items-center justify-center">
            <a
              v-for="index in 12"
              :key="index"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-8 table items-center truncate text-center font-jakarta text-6xl font-semibold leading-normal tracking-tight text-zinc-400"
            >
              Star us on GitHub
            </a>
          </ul>
          <ul
            class="flex animate-infinite-scroll items-center justify-center md:justify-start"
            aria-hidden="true"
          >
            <a
              v-for="index in 12"
              :key="index"
              href="https://github.com/hoppscotch/hoppscotch"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-8 table items-center truncate text-center font-jakarta text-6xl font-semibold leading-normal tracking-tight text-zinc-400"
            >
              Star us on GitHub
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
