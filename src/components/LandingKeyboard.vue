<script setup lang="ts">
const { t } = useI18n()
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
              {{ t("home.platforms.title") }}
            </h1>
            <p
              class="max-w-md my-4 text-2xl tracking-tighter text-center md:w-2/3"
            >
              {{ t("home.platforms.description") }}
            </p>
          </div>
        </div>
        <div class="relative flex max-w-6xl mx-auto md:rounded-lg h-50 lg:h-80">
          <div class="flex items-center justify-center flex-1">
            <div class="keyboard">
              <div class="row">
                <div class="key esc key--md left">esc</div>
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
                <div class="key delete key--md right">delete</div>
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
                  caps
                  <input id="caps" type="checkbox" checked />
                  <label for="caps"></label>
                </div>
                <div class="key a">A</div>
                <div class="key s">S</div>
                <div class="key d">D</div>
                <div class="key">F</div>
                <div class="key">G</div>
                <div class="key">H</div>
                <div class="key">J</div>
                <div class="key">K</div>
                <div class="key">L</div>
                <div class="key"><span>:</span>;</div>
                <div class="key"><span>"</span>'</div>
                <div class="key caps right">return</div>
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
                <div class="key"><span>></span>.</div>
                <div class="key"><span>?</span>/</div>
                <div class="key shift right">shift</div>
              </div>
              <div class="row">
                <div class="key fn left">🌐</div>
                <div class="key control right">control</div>
                <div class="key option right">option</div>
                <div class="key command right">command</div>
                <div class="key space"></div>
                <div class="key command left">command</div>
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
  @apply -mt-90 lg:-mt-100;
  margin-left: calc(-50vw + 50%);
}

.conic-divider2 {
  @apply relative;
  @apply w-screen;
  @apply -mb-90 lg:-mb-100;
  margin-left: calc(-50vw + 50%);
  transform: rotate(180deg);
}

.grad1 {
  width: 50vw;
  @apply h-180 lg:h-200;
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
  @apply h-180 lg:h-200;
  background-image: conic-gradient(
    from 280deg at 25% 50%,
    transparent,
    transparent,
    var(--color-conicTeal)
  );
}

.keyboard {
  height: 100%;
  background-color: var(--color-primaryLight);
  border-radius: 0.77vw;

  @apply shadow-md;
  display: flex;
  flex-flow: column;
  padding: 0.55vw;
  position: relative;
}
.keyboard .row {
  flex-grow: 1;
  display: flex;
  height: 3.1428571429vw;
  font-size: 0.616vw;
  font-size: 0.88vw;
}
.keyboard .row:not(:first-of-type) {
  padding: 0.55vw 0 0 0;
}
.keyboard .row .key {
  background-color: var(--color-primary);
  color: var(--color-secondaryLight);
  border-radius: 0.22vw;
  min-width: 3.19vw;
  margin: 0 0.55vw 0 0;
  @apply shadow;
  position: relative;
}
.keyboard .row .key:last-of-type {
  margin-right: 0;
}
.keyboard .row .key:hover {
  @apply shadow-md;
  transform: scale(0.99);
}
.keyboard .row .key span {
  opacity: 0.8;
  transform: scale(0.8);
  margin-bottom: 0.44vw;
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
  justify-content: flex-end;
  font-size: 0.616vw;
}

.row .key.command {
  min-width: 4.147vw;
  width: 4.147vw;
}

.key--md {
  min-width: 5.104vw;
  width: 5.104vw;
}

.row .key.caps {
  min-width: 6.061vw;
  width: 6.061vw;
}

.row .key.shift {
  min-width: 7.975vw;
  width: 7.975vw;
}

.row .key.left {
  align-items: flex-start;
}

.row .key.right {
  align-items: flex-end;
}

.row .key {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.44vw;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.row .key.option:before {
  content: "⌥";
  position: absolute;
  top: 0.319vw;
}
.row .key.command:before {
  content: "⌘";
  position: absolute;
  top: 0.319vw;
}
.row .key.control:before {
  content: "⌃";
  position: absolute;
  top: 0.319vw;
}
.row .key.fn:before {
  content: "fn";
  position: absolute;
  top: 0.319vw;
}
.row .key.space {
  flex-grow: 1;
}

.key.caps input {
  display: none;
}
.key.caps input + label {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}
.key.caps input + label:before {
  content: "";
  position: absolute;
  top: 0.638vw;
  left: 0.4785vw;
  background-color: rgba(0, 0, 0, 0.5);
  width: 0.2552vw;
  height: 0.2552vw;
  border-radius: 3.19vw;
}
.key.caps input:checked + label:before {
  background-color: rgba(50, 205, 50, 0.7);
}

.key.arrow:before {
  content: "";
  width: 0;
  height: 0;
  border: solid 0.22vw;
  border-right-width: 0.44vw;
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
  display: flex;
  flex-flow: column;
  margin-right: 0.55vw;
}
.row .arrows > .key {
  margin: 0;
  flex-grow: 1;
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
