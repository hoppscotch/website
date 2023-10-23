<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="relative flex items-center justify-center px-8 overflow-hidden border h-80 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <div class="lines">
        <div class="line">
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-laptop class="mr-2" />
            Home
          </span>
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-folder class="mr-2" />
            Collections
          </span>
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-settings class="mr-2" />
            Settings
          </span>
        </div>
        <div class="line">
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-monitor class="mr-2" />
            Office
          </span>
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-users class="mr-2" />
            Teams
          </span>
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-cable class="mr-2" />
            Requests
          </span>
        </div>
        <div class="line">
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-tablet class="mr-2" />
            Personal
          </span>
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
          >
            <icon-lucide-layers class="mr-2" />
            Environments
          </span>
          <span
            class="relative z-10 inline-flex px-3 py-2 mt-4 text-xs border -translate-x-1/2 rounded-md border-neutral-400/20 bg-neutral-400/10 backdrop-blur-md"
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
      @apply bg-neutral-400/10;

      &::after {
        content: "";
        @apply block;
        @apply absolute;
        @apply h-full;
        @apply w-full;
        @apply bg-gradient-to-t;
        @apply from-neutral-50;
        @apply via-neutral-400/10;
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
