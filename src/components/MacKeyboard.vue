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
        }
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
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="flex items-start justify-start px-8 overflow-hidden border h-80 rounded-2xl border-gray-500/25 bg-gradient-to-b from-gray-800/10 to-gray-600/10"
    >
      <div
        ref="target"
        class="flex flex-col p-2 mx-auto -mt-8 text-xs border shadow-lg space-y-2 keyboard brightness-110 rounded-3xl border-gray-400/20 bg-gray-600/10"
      >
        <div class="flex h-12 space-x-2">
          <button
            data-key="192"
            class="items-center justify-center w-12 key !rounded-tl-2xl"
          >
            <span class="flex self-center">~</span>
            <span class="flex self-center">`</span>
          </button>
          <button data-key="49" class="items-center justify-center w-12 key">
            <span class="flex self-center">!</span>
            <span class="flex self-center">1</span>
          </button>
          <button data-key="50" class="items-center justify-center w-12 key">
            <span class="flex self-center">@</span>
            <span class="flex self-center">2</span>
          </button>
          <button data-key="51" class="items-center justify-center w-12 key">
            <span class="flex self-center">#</span>
            <span class="flex self-center">3</span>
          </button>
          <button data-key="52" class="items-center justify-center w-12 key">
            <span class="flex self-center">$</span>
            <span class="flex self-center">4</span>
          </button>
          <button data-key="53" class="items-center justify-center w-12 key">
            <span class="flex self-center">%</span>
            <span class="flex self-center">5</span>
          </button>
          <button data-key="54" class="items-center justify-center w-12 key">
            <span class="flex self-center">^</span>
            <span class="flex self-center">6</span>
          </button>
          <button data-key="55" class="items-center justify-center w-12 key">
            <span class="flex self-center">&</span>
            <span class="flex self-center">7</span>
          </button>
          <button data-key="56" class="items-center justify-center w-12 key">
            <span class="flex self-center">*</span>
            <span class="flex self-center">8</span>
          </button>
          <button data-key="57" class="items-center justify-center w-12 key">
            <span class="flex self-center">(</span>
            <span class="flex self-center">9</span>
          </button>
          <button data-key="48" class="items-center justify-center w-12 key">
            <span class="flex self-center">)</span>
            <span class="flex self-center">0</span>
          </button>
          <button data-key="189" class="items-center justify-center w-12 key">
            <span class="flex self-center">_</span>
            <span class="flex self-center">-</span>
          </button>
          <button data-key="187" class="items-center justify-center w-12 key">
            <span class="flex self-center">+</span>
            <span class="flex self-center">=</span>
          </button>
          <button
            data-key="8"
            class="items-end justify-end flex-1 key text-[9px] !rounded-tr-2xl"
          >
            delete
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            data-key="9"
            class="items-start justify-end flex-1 text-left text-[9px] key"
          >
            tab
          </button>
          <button data-char="Q" class="items-center justify-center w-12 key">
            Q
          </button>
          <button data-char="W" class="items-center justify-center w-12 key">
            W
          </button>
          <button data-char="E" class="items-center justify-center w-12 key">
            E
          </button>
          <button data-char="R" class="items-center justify-center w-12 key">
            R
          </button>
          <button data-char="T" class="items-center justify-center w-12 key">
            T
          </button>
          <button data-char="Y" class="items-center justify-center w-12 key">
            Y
          </button>
          <button data-char="U" class="items-center justify-center w-12 key">
            U
          </button>
          <button data-char="I" class="items-center justify-center w-12 key">
            I
          </button>
          <button data-char="O" class="items-center justify-center w-12 key">
            O
          </button>
          <button data-char="P" class="items-center justify-center w-12 key">
            P
          </button>
          <button
            data-key="219"
            data-char="{["
            class="items-center justify-center w-12 key"
          >
            <span class="flex self-center">{</span>
            <span class="flex self-center">[</span>
          </button>
          <button
            data-key="221"
            data-char="}]"
            class="items-center justify-center w-12 key"
          >
            <span class="flex self-center">}</span>
            <span class="flex self-center">]</span>
          </button>
          <button
            data-key="220"
            data-char="|\"
            class="items-center justify-center w-12 key"
          >
            <span class="flex self-center">|</span>
            <span class="flex self-center">\</span>
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            data-key="20"
            class="items-start justify-center flex-1 text-left text-[9px] key"
          >
            <span class="flex self-start">•</span>
            <span class="flex self-start"> caps lock </span>
          </button>
          <button data-char="A" class="items-center justify-center w-12 key">
            A
          </button>
          <button data-char="S" class="items-center justify-center w-12 key">
            S
          </button>
          <button data-char="D" class="items-center justify-center w-12 key">
            D
          </button>
          <button data-char="F" class="items-center justify-center w-12 key">
            F
          </button>
          <button data-char="G" class="items-center justify-center w-12 key">
            G
          </button>
          <button data-char="H" class="items-center justify-center w-12 key">
            H
          </button>
          <button data-char="J" class="items-center justify-center w-12 key">
            J
          </button>
          <button data-char="K" class="items-center justify-center w-12 key">
            K
          </button>
          <button data-char="L" class="items-center justify-center w-12 key">
            L
          </button>
          <button data-key="186" class="items-center justify-center w-12 key">
            <span class="flex self-center">:</span>
            <span class="flex self-center">;</span>
          </button>
          <button data-key="222" class="items-center justify-center w-12 key">
            <span class="flex self-center">"</span>
            <span class="flex self-center">'</span>
          </button>
          <button
            data-key="13"
            class="items-end justify-end flex-1 text-[9px] key"
          >
            return
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            data-key="16"
            class="items-start text-[9px] justify-end flex-1 text-left key"
          >
            shift
          </button>
          <button data-char="Z" class="items-center justify-center w-12 key">
            Z
          </button>
          <button data-char="X" class="items-center justify-center w-12 key">
            X
          </button>
          <button data-char="C" class="items-center justify-center w-12 key">
            C
          </button>
          <button data-char="V" class="items-center justify-center w-12 key">
            V
          </button>
          <button data-char="B" class="items-center justify-center w-12 key">
            B
          </button>
          <button data-char="N" class="items-center justify-center w-12 key">
            N
          </button>
          <button data-char="M" class="items-center justify-center w-12 key">
            M
          </button>
          <button data-key="188" class="items-center justify-center w-12 key">
            <span class="flex self-center">&lt;</span>
            <span class="flex self-center">,</span>
          </button>
          <button data-key="190" class="items-center justify-center w-12 key">
            <span class="flex self-center"></span>
            <span class="flex self-center">.</span>
          </button>
          <button data-key="191" class="items-center justify-center w-12 key">
            <span class="flex self-center">?</span>
            <span class="flex self-center">/</span>
          </button>
          <button
            data-key="16-R"
            class="items-end justify-end flex-1 text-[9px] key"
          >
            shift
          </button>
        </div>
        <div class="flex h-12 space-x-2">
          <button
            class="items-center justify-center w-12 text-left key !rounded-bl-2xl"
          >
            <span class="flex self-end text-[9px]">fn</span>
            <span class="flex self-start">🌐</span>
          </button>
          <button data-key="17" class="items-center justify-center w-12 key">
            <span class="flex self-end">⌃</span>
            <span class="flex self-end text-[9px]">control</span>
          </button>
          <button data-key="18" class="items-center justify-center w-12 key">
            <span class="flex self-end">⌥</span>
            <span class="flex self-end text-[9px]">option</span>
          </button>
          <button data-key="91" class="items-center justify-center flex-1 key">
            <span class="flex self-end">⌘</span>
            <span class="flex self-end text-[9px]">command</span>
          </button>
          <button
            data-key="32"
            data-char=" "
            class="flex-col key items-center justify-center w-[272px]"
          ></button>
          <button
            data-key="93-R"
            class="items-center justify-center flex-1 key"
          >
            <span class="flex self-start">⌘</span>
            <span class="flex self-start text-[9px]">command</span>
          </button>
          <button data-key="18-R" class="items-center justify-center w-12 key">
            <span class="flex self-start">⌥</span>
            <span class="flex self-start text-[9px]">option</span>
          </button>
          <button
            data-key="37"
            class="items-center justify-center h-6 self-end text-[7px] w-12 key"
          >
            ◀
          </button>
          <div class="flex flex-col">
            <button
              data-key="38"
              class="items-center justify-center text-[7px] w-12 h-6 !rounded-b-none key"
            >
              ▲
            </button>
            <button
              data-key="40"
              class="items-center justify-center text-[7px] w-12 h-6 !rounded-t-none key"
            >
              ▼
            </button>
          </div>
          <button
            data-key="39"
            class="items-center justify-center text-[7px] h-6 self-end w-12 key !rounded-br-2xl"
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
      @apply text-gray-200;
      @apply text-opacity-80;
      @apply bg-gradient-to-b;
      @apply from-gray-950/5;
      @apply to-gray-600/10;
      @apply border border-gray-400/5;
      @apply ring-1 ring-gray-950;
      @apply focus:outline-none;
    }

    &:has([data-pressed="on"]) {
      .key {
        @apply text-opacity-0;
        @apply to-gray-950/5;

        &[data-pressed="on"] {
          @apply text-opacity-80;
          @apply to-gray-400/5;
        }
      }
    }
  }
</style>
