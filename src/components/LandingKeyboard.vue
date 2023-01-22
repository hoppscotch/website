<script setup lang="ts">
import { shortcuts } from "~/assets/data/landingKeyboard"
const { t } = useI18n()

const commandKeyRight = ref(false)
const commandKeyLeft = ref(false)
const kKey = ref(false)
const slashKey = ref(false)
const returnKey = ref(false)
const sKey = ref(false)
const jKey = ref(false)
const dotKey = ref(false)
const questionmarkKey = ref(false)
const shiftRightKey = ref(false)
const escKey = ref(false)

const setActiveKeys = (keys: string[]) => {
  commandKeyRight.value = false
  commandKeyLeft.value = false
  kKey.value = false
  slashKey.value = false
  returnKey.value = false
  sKey.value = false
  jKey.value = false
  dotKey.value = false
  questionmarkKey.value = false
  shiftRightKey.value = false
  escKey.value = false

  if (keys.includes("commandKeyRight")) 
commandKeyRight.value = true
  if (keys.includes("commandKeyLeft")) 
commandKeyLeft.value = true
  if (keys.includes("kKey")) 
kKey.value = true
  if (keys.includes("slashKey")) 
slashKey.value = true
  if (keys.includes("returnKey")) 
returnKey.value = true
  if (keys.includes("sKey")) 
sKey.value = true
  if (keys.includes("jKey")) 
jKey.value = true
  if (keys.includes("dotKey")) 
dotKey.value = true
  if (keys.includes("questionmarkKey")) 
questionmarkKey.value = true
  if (keys.includes("shiftRightKey")) 
shiftRightKey.value = true
  if (keys.includes("escKey")) 
escKey.value = true
}

let count = 0

function cycleArray() {
  shortcuts.forEach((item: any, index: number) => {
    if (index === count) {
      item.active = true
      setActiveKeys(item.keys)
    } else {
      item.active = false
    }
  })
  count++
  if (count === shortcuts.length) {
    count = 0
  }
}

setInterval(cycleArray, 3000)
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="relative overflow-x-visible overflow-y-clip">
      <div class="conic-divider1">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
      <div class="absolute inset-0 z-1">
        <div class="flex flex-col px-8 pt-32 pb-16">
          <div class="flex flex-col items-center">
            <h1
              class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
            >
              {{ t("home.keyboard.title") }}
            </h1>
            <p
              class="max-w-md my-4 text-2xl tracking-tighter text-center md:w-2/3"
            >
              {{ t("home.keyboard.description") }}
            </p>
          </div>
        </div>
        <div class="relative flex flex-col mx-auto md:rounded-lg h-50 lg:h-128">
          <div class="flex items-center justify-center">
            <div class="keyboard">
              <div class="row">
                <div
                  class="key esc key--md left"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      escKey,
                  }"
                >
                  esc
                </div>
                <div class="key f">F1</div>
                <div class="key f">F2</div>
                <div class="key f">F3</div>
                <div class="key f">F4</div>
                <div class="key f">F5</div>
                <div class="key f">F6</div>
                <div class="key f">F7</div>
                <div class="key f">F8</div>
                <div class="key f">F9</div>
                <div class="key f">F10</div>
                <div class="key f">F11</div>
                <div class="key f">F12</div>
                <div class="key f">=</div>
              </div>
              <div class="row">
                <div class="key squig"><span>~</span>`</div>
                <div class="key 1"><span>!</span>1</div>
                <div class="key 2"><span>@</span>2</div>
                <div class="key 3"><span>#</span>3</div>
                <div class="key 4"><span>$</span>4</div>
                <div class="key 1"><span>%</span>5</div>
                <div class="key 2"><span>^</span>6</div>
                <div class="key 3"><span>&</span>7</div>
                <div class="key 4"><span>*</span>8</div>
                <div class="key 1"><span>(</span>9</div>
                <div class="key 2"><span>)</span>0</div>
                <div class="key 3"><span>_</span>-</div>
                <div class="key 4"><span>+</span>=</div>
                <div class="key delete key--md right">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;delete
                </div>
              </div>
              <div class="row">
                <div class="key tab key--md left">tab</div>
                <div class="key q">Q</div>
                <div class="key w">W</div>
                <div class="key">E</div>
                <div class="key">R</div>
                <div class="key">T</div>
                <div class="key">Y</div>
                <div class="key">U</div>
                <div class="key">I</div>
                <div class="key">O</div>
                <div class="key">P</div>
                <div class="key"><span>{</span>[</div>
                <div class="key"><span>}</span>]</div>
                <div class="key"><span>|</span>\</div>
              </div>
              <div class="row">
                <div class="key caps left">
                  caps lock
                  <input id="caps" type="checkbox" checked />
                  <label for="caps"></label>
                </div>
                <div class="key a">A</div>
                <div
                  class="key s"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark': sKey,
                  }"
                >
                  S
                </div>
                <div class="key d">D</div>
                <div class="key">F</div>
                <div class="key">G</div>
                <div class="key">H</div>
                <div
                  class="key"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark': jKey,
                  }"
                >
                  J
                </div>
                <div
                  class="key k"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark': kKey,
                  }"
                >
                  K
                </div>
                <div class="key">L</div>
                <div class="key"><span>:</span>;</div>
                <div class="key"><span>"</span>'</div>
                <div
                  class="key caps right"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      returnKey,
                  }"
                >
                  return
                </div>
              </div>
              <div class="row">
                <div class="key shift left">shift</div>
                <div class="key z">Z</div>
                <div class="key x">X</div>
                <div class="key c">C</div>
                <div class="key">V</div>
                <div class="key">B</div>
                <div class="key">N</div>
                <div class="key">M</div>
                <div class="key"><span>&lt;</span>,</div>
                <div
                  class="key"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      dotKey,
                  }"
                >
                  <span>></span>.
                </div>
                <div
                  class="key"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      slashKey || questionmarkKey,
                  }"
                >
                  <span>?</span>/
                </div>
                <div
                  class="key shift right"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      shiftRightKey,
                  }"
                >
                  shift
                </div>
              </div>
              <div class="row">
                <div class="key fn left">🌐</div>
                <div class="key control right">control</div>
                <div class="key option right">option</div>
                <div
                  class="key command right"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      commandKeyRight,
                  }"
                >
                  command
                </div>
                <div class="key space"></div>
                <div
                  class="key command left"
                  :class="{
                    '!shadow-md ring-1 ring-teal-500 !text-secondaryDark':
                      commandKeyLeft,
                  }"
                >
                  command
                </div>
                <div class="key option left">option</div>
                <div class="key arrow arrow--left"></div>
                <div class="arrows">
                  <div class="key arrow arrow--up"></div>
                  <div class="key arrow arrow--down"></div>
                </div>
                <div class="key arrow arrow--right"></div>
              </div>
            </div>
          </div>
          <div class="mt-10 grid grid-cols-4 gap-2">
            <div
              v-for="(shortcut, index) in shortcuts"
              :key="index"
              class="flex items-center justify-between flex-1 h-16 px-6 border rounded opacity-50 transition text-secondaryLight bg-primaryLight border-dividerDark"
              :class="{
                '!text-secondaryDark shadow-md border-teal-500 !opacity-100 !bg-primary':
                  shortcut.active,
              }"
            >
              {{ shortcut.description }}
              <component :is="shortcut.icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="conic-divider2">
        <div class="flex">
          <div class="flex grad1"></div>
          <div class="flex grad2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conic-divider1 {
  @apply relative;
  @apply w-screen;
  @apply -mt-90 lg:-mt-128;
  margin-left: calc(-50vw + 50%);
}

.conic-divider2 {
  @apply relative;
  @apply w-screen;
  @apply -mb-90 lg:-mb-128;
  margin-left: calc(-50vw + 50%);
  transform: rotate(180deg);
}

.grad1 {
  width: 50vw;
  @apply h-180 lg:h-256;
  background-image: conic-gradient(
    from 280deg at 25% 50%,
    transparent,
    transparent,
    var(--color-conicTeal)
  );
  transform: scaleX(-1);
}

.grad2 {
  width: 50vw;
  @apply h-180 lg:h-256;
  background-image: conic-gradient(
    from 280deg at 25% 50%,
    transparent,
    transparent,
    var(--color-conicTeal)
  );
}

.keyboard {
  @apply flex flex-col;
  @apply bg-primaryLight;
  @apply rounded-lg;
  @apply p-2;
  @apply shadow-md;
  @apply transition;
  @apply space-y-2;
}

.keyboard .row {
  @apply flex flex-1;
  @apply space-x-2;
}

.keyboard .row .key {
  @apply flex flex-col;
  @apply items-center;
  @apply justify-center;
  @apply p-2;
  @apply relative;
  @apply bg-primary;
  @apply text-xs;
  @apply text-secondaryLight;
  @apply rounded;
  @apply transition;
  @apply shadow;
  @apply min-w-12;
  @apply leading-none;
}

.keyboard .row .key span {
  @apply mb-1;
}

.row .key.option,
.row .key.shift,
.row .key.caps,
.row .key.command,
.row .key.f,
.row .key.esc,
.row .key.delete,
.row .key.tab,
.row .key.fn,
.row .key.control,
.key--text {
  @apply justify-end;
}

.key--md {
  @apply flex-1;
}

.row .key.caps {
  @apply flex-1;
}

.row .key.shift {
  @apply flex-1;
}

.row .key.left {
  @apply items-start;
}

.row .key.right {
  @apply items-end;
}

.row .key.option:before {
  content: "⌥";
  @apply absolute;
  @apply top-2;
}

.row .key.command:before {
  content: "⌘";
  @apply absolute;
  @apply top-2;
}

.row .key.control:before {
  content: "⌃";
  @apply absolute;
  @apply top-2;
}

.row .key.fn:before {
  content: "fn";
  @apply absolute;
  @apply top-2;
}

.row .key.space {
  @apply flex-1;
}

.key.caps input {
  @apply hidden;
}

.key.caps input + label {
  @apply block;
  @apply absolute;
  @apply inset-0;
}

.key.caps input + label:before {
  @apply absolute;
  @apply content-DEFAULT;
  @apply rounded-full;
  @apply top-2;
  @apply left-2;
  @apply h-1;
  @apply w-1;
  @apply bg-gray-500;
}

.key.caps input:checked + label:before {
  @apply bg-green-500;
}

.key.arrow:before {
  @apply content-DEFAULT;
  @apply w-0;
  @apply h-0;
  border: solid 4px;
  border-right-width: 4px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}

.key.arrow.arrow--up:before {
  transform: rotate(90deg);
}

.key.arrow.arrow--right:before {
  transform: rotate(180deg);
}

.key.arrow.arrow--down:before {
  transform: rotate(-90deg);
}

.row .arrows {
  @apply flex flex-col;
}

.row .arrows > .key {
  @apply flex-1;
  @apply m-0;
  @apply py-1.6;
}

.row .arrows > .key.arrow--up {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: solid 0.2rem rgba(0, 0, 0, 0.2);
}

.row .arrows > .key.arrow--down {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
