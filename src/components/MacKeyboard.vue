<template>
  <div
    class="flex flex-col p-2 text-xs border shadow-lg space-y-2 backdrop-blur-md text-violet-200/60 rounded-3xl border-violet-400/20 bg-violet-400/10"
  >
    <div class="flex h-12 space-x-2">
      <button class="items-center justify-center w-12 key !rounded-tl-2xl">
        <span class="flex self-center">~</span>
        <span class="flex self-center">`</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">!</span>
        <span class="flex self-center">1</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">@</span>
        <span class="flex self-center">2</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">#</span>
        <span class="flex self-center">3</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">$</span>
        <span class="flex self-center">4</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">%</span>
        <span class="flex self-center">5</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">^</span>
        <span class="flex self-center">6</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">&</span>
        <span class="flex self-center">7</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">*</span>
        <span class="flex self-center">8</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">(</span>
        <span class="flex self-center">9</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">)</span>
        <span class="flex self-center">0</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">_</span>
        <span class="flex self-center">-</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">+</span>
        <span class="flex self-center">=</span>
      </button>
      <button
        class="items-end justify-end flex-1 key text-[9px] !rounded-tr-2xl"
      >
        delete
      </button>
    </div>
    <div class="flex h-12 space-x-2">
      <button class="items-start justify-end flex-1 text-left text-[9px] key">
        tab
      </button>
      <button class="items-center justify-center w-12 key">Q</button>
      <button class="items-center justify-center w-12 key">W</button>
      <button class="items-center justify-center w-12 key">E</button>
      <button class="items-center justify-center w-12 key">R</button>
      <button class="items-center justify-center w-12 key">T</button>
      <button class="items-center justify-center w-12 key">Y</button>
      <button class="items-center justify-center w-12 key">U</button>
      <button class="items-center justify-center w-12 key">I</button>
      <button class="items-center justify-center w-12 key">O</button>
      <button class="items-center justify-center w-12 key">P</button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">{</span>
        <span class="flex self-center">[</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">}</span>
        <span class="flex self-center">]</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">|</span>
        <span class="flex self-center">\</span>
      </button>
    </div>
    <div class="flex h-12 space-x-2">
      <button class="items-start justify-end flex-1 text-left text-[9px] key">
        caps lock
      </button>
      <button class="items-center justify-center w-12 key">A</button>
      <button class="items-center justify-center w-12 key">S</button>
      <button class="items-center justify-center w-12 key">D</button>
      <button class="items-center justify-center w-12 key">F</button>
      <button class="items-center justify-center w-12 key">G</button>
      <button class="items-center justify-center w-12 key">H</button>
      <button class="items-center justify-center w-12 key">J</button>
      <button class="items-center justify-center w-12 key">K</button>
      <button class="items-center justify-center w-12 key">L</button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">:</span>
        <span class="flex self-center">;</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">"</span>
        <span class="flex self-center">'</span>
      </button>
      <button class="items-end justify-end flex-1 text-[9px] key">
        return
      </button>
    </div>
    <div class="flex h-12 space-x-2">
      <button class="items-start text-[9px] justify-end flex-1 text-left key">
        shift
      </button>
      <button class="items-center justify-center w-12 key">Z</button>
      <button class="items-center justify-center w-12 key">X</button>
      <button class="items-center justify-center w-12 key">C</button>
      <button class="items-center justify-center w-12 key">V</button>
      <button class="items-center justify-center w-12 key">B</button>
      <button class="items-center justify-center w-12 key">N</button>
      <button class="items-center justify-center w-12 key">M</button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">&lt;</span>
        <span class="flex self-center">,</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center"></span>
        <span class="flex self-center">.</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-center">?</span>
        <span class="flex self-center">/</span>
      </button>
      <button class="items-end justify-end flex-1 text-[9px] key">shift</button>
    </div>
    <div class="flex h-12 space-x-2">
      <button
        class="items-center justify-center w-12 text-left key !rounded-bl-2xl"
      >
        <span class="flex self-end text-[9px]">fn</span>
        <span class="flex self-start">🌐</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-end">⌃</span>
        <span class="flex self-end text-[9px]">control</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-end">⌥</span>
        <span class="flex self-end text-[9px]">option</span>
      </button>
      <button class="items-center justify-center flex-1 key">
        <span class="flex self-end">⌘</span>
        <span class="flex self-end text-[9px]">command</span>
      </button>
      <button
        class="flex-col key items-center justify-center w-[272px]"
      ></button>
      <button class="items-center justify-center flex-1 key">
        <span class="flex self-start">⌘</span>
        <span class="flex self-start text-[9px]">command</span>
      </button>
      <button class="items-center justify-center w-12 key">
        <span class="flex self-start">⌥</span>
        <span class="flex self-start text-[9px]">option</span>
      </button>
      <button
        class="items-center justify-center h-6 self-end text-[7px] w-12 key"
      >
        ◀
      </button>
      <div class="flex flex-col">
        <button
          class="items-center justify-center text-[7px] w-12 h-6 !rounded-b-none key"
        >
          ▲
        </button>
        <button
          class="items-center justify-center text-[7px] w-12 h-6 !rounded-t-none key"
        >
          ▼
        </button>
      </div>
      <button
        class="items-center justify-center text-[7px] h-6 self-end w-12 key !rounded-br-2xl"
      >
        ▶
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .key {
    @apply p-2;
    @apply flex;
    @apply flex-col;
    @apply rounded-md;
    @apply bg-gradient-to-b;
    @apply from-violet-400/5;
    @apply to-violet-400/20;
    @apply border border-violet-400/5;
    @apply ring-1 ring-slate-950;
  }
</style>
