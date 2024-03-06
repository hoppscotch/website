<script setup lang="ts">
const target = ref<HTMLDivElement | null>(null)
const targetIsVisible = ref(false)

let keydownListener: (() => void) | null = null
let keyupListener: (() => void) | null = null

watch(targetIsVisible, (isVisible) => {
  if (isVisible) {
    keydownListener = useEventListener(
      document,
      "keydown",
      (e: KeyboardEvent) => {
        const key = getKey(e)
        if (!key) {
          return console.warn("No key for", e.keyCode)
        }
        key.setAttribute("data-pressed", "on")
      },
    )

    keyupListener = useEventListener(document, "keyup", () => {
      document.querySelectorAll("[data-pressed]").forEach((key) => {
        key.removeAttribute("data-pressed")
      })
    })
  } else {
    cleanupKeydown()
    cleanupKeyup()
  }
})

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting
})

const getKey = (e: KeyboardEvent): HTMLElement | null => {
  const location = e.location
  let selector
  if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    selector = `[data-key="${e.keyCode}-R"]`
  } else {
    const code = e.keyCode || e.which
    selector = [
      `[data-key="${code}"]`,
      `[data-char="${encodeURIComponent(String.fromCharCode(code))}"]`,
    ].join(",")
  }
  return document.querySelector(selector as string)
}

const cleanupKeydown = () => {
  if (keydownListener) {
    keydownListener()
    keydownListener = null
  }
}

const cleanupKeyup = () => {
  if (keyupListener) {
    keyupListener()
    keyupListener = null
  }
}

onBeforeUnmount(() => {
  cleanupKeydown()
  cleanupKeyup()
})
</script>

<template>
  <div class="relative w-full overflow-hidden p-2">
    <div
      class="flex h-80 items-start justify-start overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 px-8"
    >
      <div
        ref="target"
        class="keyboard mx-auto -mt-8 flex flex-col space-y-2 rounded-3xl border border-zinc-400/20 bg-zinc-600/10 p-2 text-xs shadow-lg brightness-110"
      >
        <div class="flex h-12 space-x-2">
          <button
            data-key="192"
            class="key w-12 items-center justify-center !rounded-tl-2xl"
          >
            <span class="flex self-center">~</span>
            <span class="flex self-center">`</span>
          </button>
          <button data-key="49" class="key w-12 items-center justify-center">
            <span class="flex self-center">!</span>
            <span class="flex self-center">1</span>
          </button>
          <button data-key="50" class="key w-12 items-center justify-center">
            <span class="flex self-center">@</span>
            <span class="flex self-center">2</span>
          </button>
          <button data-key="51" class="key w-12 items-center justify-center">
            <span class="flex self-center">#</span>
            <span class="flex self-center">3</span>
          </button>
          <button data-key="52" class="key w-12 items-center justify-center">
            <span class="flex self-center">$</span>
            <span class="flex self-center">4</span>
          </button>
          <button data-key="53" class="key w-12 items-center justify-center">
            <span class="flex self-center">%</span>
            <span class="flex self-center">5</span>
          </button>
          <button data-key="54" class="key w-12 items-center justify-center">
            <span class="flex self-center">^</span>
            <span class="flex self-center">6</span>
          </button>
          <button data-key="55" class="key w-12 items-center justify-center">
            <span class="flex self-center">&</span>
            <span class="flex self-center">7</span>
          </button>
          <button data-key="56" class="key w-12 items-center justify-center">
            <span class="flex self-center">*</span>
            <span class="flex self-center">8</span>
          </button>
          <button data-key="57" class="key w-12 items-center justify-center">
            <span class="flex self-center">(</span>
            <span class="flex self-center">9</span>
          </button>
          <button data-key="48" class="key w-12 items-center justify-center">
            <span class="flex self-center">)</span>
            <span class="flex self-center">0</span>
          </button>
          <button data-key="189" class="key w-12 items-center justify-center">
            <span class="flex self-center">_</span>
            <span class="flex self-center">-</span>
          </button>
          <button data-key="187" class="key w-12 items-center justify-center">
            <span class="flex self-center">+</span>
            <span class="flex self-center">=</span>
          </button>
          <button
            data-key="8"
            class="key flex-1 items-end justify-end !rounded-tr-2xl text-[9px]"
          >
            delete
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            data-key="9"
            class="key flex-1 items-start justify-end text-left text-[9px]"
          >
            tab
          </button>
          <button data-char="Q" class="key w-12 items-center justify-center">
            Q
          </button>
          <button data-char="W" class="key w-12 items-center justify-center">
            W
          </button>
          <button data-char="E" class="key w-12 items-center justify-center">
            E
          </button>
          <button data-char="R" class="key w-12 items-center justify-center">
            R
          </button>
          <button data-char="T" class="key w-12 items-center justify-center">
            T
          </button>
          <button data-char="Y" class="key w-12 items-center justify-center">
            Y
          </button>
          <button data-char="U" class="key w-12 items-center justify-center">
            U
          </button>
          <button data-char="I" class="key w-12 items-center justify-center">
            I
          </button>
          <button data-char="O" class="key w-12 items-center justify-center">
            O
          </button>
          <button data-char="P" class="key w-12 items-center justify-center">
            P
          </button>
          <button
            data-key="219"
            data-char="{["
            class="key w-12 items-center justify-center"
          >
            <span class="flex self-center">{</span>
            <span class="flex self-center">[</span>
          </button>
          <button
            data-key="221"
            data-char="}]"
            class="key w-12 items-center justify-center"
          >
            <span class="flex self-center">}</span>
            <span class="flex self-center">]</span>
          </button>
          <button
            data-key="220"
            data-char="|\"
            class="key w-12 items-center justify-center"
          >
            <span class="flex self-center">|</span>
            <span class="flex self-center">\</span>
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            data-key="20"
            class="key flex-1 items-start justify-center text-left text-[9px]"
          >
            <span class="flex self-start">•</span>
            <span class="flex self-start"> caps lock </span>
          </button>
          <button data-char="A" class="key w-12 items-center justify-center">
            A
          </button>
          <button data-char="S" class="key w-12 items-center justify-center">
            S
          </button>
          <button data-char="D" class="key w-12 items-center justify-center">
            D
          </button>
          <button data-char="F" class="key w-12 items-center justify-center">
            F
          </button>
          <button data-char="G" class="key w-12 items-center justify-center">
            G
          </button>
          <button data-char="H" class="key w-12 items-center justify-center">
            H
          </button>
          <button data-char="J" class="key w-12 items-center justify-center">
            J
          </button>
          <button data-char="K" class="key w-12 items-center justify-center">
            K
          </button>
          <button data-char="L" class="key w-12 items-center justify-center">
            L
          </button>
          <button data-key="186" class="key w-12 items-center justify-center">
            <span class="flex self-center">:</span>
            <span class="flex self-center">;</span>
          </button>
          <button data-key="222" class="key w-12 items-center justify-center">
            <span class="flex self-center">"</span>
            <span class="flex self-center">'</span>
          </button>
          <button
            data-key="13"
            class="key flex-1 items-end justify-end text-[9px]"
          >
            return
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            data-key="16"
            class="key flex-1 items-start justify-end text-left text-[9px]"
          >
            shift
          </button>
          <button data-char="Z" class="key w-12 items-center justify-center">
            Z
          </button>
          <button data-char="X" class="key w-12 items-center justify-center">
            X
          </button>
          <button data-char="C" class="key w-12 items-center justify-center">
            C
          </button>
          <button data-char="V" class="key w-12 items-center justify-center">
            V
          </button>
          <button data-char="B" class="key w-12 items-center justify-center">
            B
          </button>
          <button data-char="N" class="key w-12 items-center justify-center">
            N
          </button>
          <button data-char="M" class="key w-12 items-center justify-center">
            M
          </button>
          <button data-key="188" class="key w-12 items-center justify-center">
            <span class="flex self-center">&lt;</span>
            <span class="flex self-center">,</span>
          </button>
          <button data-key="190" class="key w-12 items-center justify-center">
            <span class="flex self-center"></span>
            <span class="flex self-center">.</span>
          </button>
          <button data-key="191" class="key w-12 items-center justify-center">
            <span class="flex self-center">?</span>
            <span class="flex self-center">/</span>
          </button>
          <button
            data-key="16-R"
            class="key flex-1 items-end justify-end text-[9px]"
          >
            shift
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            class="key w-12 items-center justify-center !rounded-bl-2xl text-left"
          >
            <span class="flex self-end text-[9px]">fn</span>
            <span class="flex self-start">🌐</span>
          </button>
          <button data-key="17" class="key w-12 items-center justify-center">
            <span class="flex self-end">⌃</span>
            <span class="flex self-end text-[9px]">control</span>
          </button>
          <button data-key="18" class="key w-12 items-center justify-center">
            <span class="flex self-end">⌥</span>
            <span class="flex self-end text-[9px]">option</span>
          </button>
          <button data-key="91" class="key flex-1 items-center justify-center">
            <span class="flex self-end">⌘</span>
            <span class="flex self-end text-[9px]">command</span>
          </button>
          <button
            data-key="32"
            data-char=" "
            class="key w-[272px] flex-col items-center justify-center"
          ></button>
          <button
            data-key="93-R"
            class="key flex-1 items-center justify-center"
          >
            <span class="flex self-start">⌘</span>
            <span class="flex self-start text-[9px]">command</span>
          </button>
          <button data-key="18-R" class="key w-12 items-center justify-center">
            <span class="flex self-start">⌥</span>
            <span class="flex self-start text-[9px]">option</span>
          </button>
          <button
            data-key="37"
            class="key h-6 w-12 items-center justify-center self-end text-[7px]"
          >
            ◀
          </button>
          <div class="flex flex-col">
            <button
              data-key="38"
              class="key h-6 w-12 items-center justify-center !rounded-b-none text-[7px]"
            >
              ▲
            </button>
            <button
              data-key="40"
              class="key h-6 w-12 items-center justify-center !rounded-t-none text-[7px]"
            >
              ▼
            </button>
          </div>
          <button
            data-key="39"
            class="key h-6 w-12 items-center justify-center self-end !rounded-br-2xl text-[7px]"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keyboard {
  .key {
    @apply p-2;
    @apply flex;
    @apply flex-col;
    @apply rounded-md;
    @apply transition;
    @apply text-zinc-200;
    @apply text-opacity-80;
    @apply bg-gradient-to-b;
    @apply from-zinc-950/5;
    @apply to-zinc-600/10;
    @apply border border-zinc-400/5;
    @apply ring-1 ring-zinc-950;
    @apply focus:outline-none;
  }

  &:has([data-pressed="on"]) {
    .key {
      @apply text-opacity-0;
      @apply to-zinc-950/5;

      &[data-pressed="on"] {
        @apply text-opacity-80;
        @apply to-zinc-400/5;
      }
    }
  }
}
</style>
