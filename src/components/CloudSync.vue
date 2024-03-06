<template>
  <div class="relative w-full overflow-hidden p-2">
    <div
      class="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 px-8"
    >
      <div class="lines">
        <div class="line">
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-laptop class="mr-2" />
            Home
          </span>
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-folder class="mr-2" />
            Collections
          </span>
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-settings class="mr-2" />
            Settings
          </span>
        </div>
        <div class="line">
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-monitor class="mr-2" />
            Office
          </span>
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-users class="mr-2" />
            Teams
          </span>
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-cable class="mr-2" />
            Requests
          </span>
        </div>
        <div class="line">
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-tablet class="mr-2" />
            Personal
          </span>
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-layers class="mr-2" />
            Environments
          </span>
          <span
            class="relative z-10 mt-4 inline-flex -translate-x-1/2 rounded-md border border-zinc-400/20 bg-zinc-400/10 px-3 py-2 text-xs backdrop-blur-md"
          >
            <icon-lucide-history class="mr-2" />
            History
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lines {
  @apply absolute;
  @apply inset-0;
  @apply flex;
  @apply items-start;
  @apply justify-center;
  @apply flex-col;

  .line {
    @apply flex;
    @apply items-start;
    @apply justify-center;
    @apply flex-col;
    @apply w-px;
    @apply absolute;
    @apply top-0;
    @apply bottom-0;
    @apply left-1/2;
    @apply bg-zinc-400/10;

    &::after {
      content: "";
      @apply block;
      @apply absolute;
      @apply h-full;
      @apply w-full;
      @apply bg-gradient-to-t;
      @apply from-zinc-50;
      @apply via-zinc-400/10;
      @apply -top-1/2 left-0;

      animation: drop 6s ease-in-out infinite forwards;
    }

    &:nth-child(1) {
      margin-left: -25%;

      &::after {
        animation-delay: 1s;
      }
    }

    &:nth-child(3) {
      margin-left: 25%;

      &::after {
        animation-delay: 1.5s;
      }
    }
  }
}

@keyframes drop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
