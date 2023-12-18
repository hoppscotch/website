<script setup lang="ts">
  useHead({
    title: "Developers • Hoppscotch",
    meta: [
      {
        name: "description",
        content: "The power to be your best.",
      },
    ],
  })
  class TextScramble {
    el: HTMLElement
    chars: string
    resolve: () => void
    frameRequest: number
    frame: number
    queue: {
      from: string
      to: string
      start: number
      end: number
      char?: string
    }[]

    constructor(el: HTMLElement) {
      this.el = el
      this.chars = "!<>-_\\/[]{}—=+*^?#________"
      this.resolve = () => {}
      this.frameRequest = 0
      this.frame = 0
      this.queue = []
      this.update = this.update.bind(this)
    }

    setText(newText: string) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise<void>((resolve) => (this.resolve = resolve))
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ""
        const to = newText[i] || ""
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }

    update() {
      let output = ""
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  const phrases = ["Developers"]

  const textElement = ref<HTMLElement | null>(null)
  const textScramble = ref<TextScramble | null>(null)

  let counter = 0

  const next = () => {
    if (textScramble.value) {
      textScramble.value.setText(phrases[counter]).then(() => {
        setTimeout(next, 3000)
      })
      counter = (counter + 1) % phrases.length
    }
  }

  onMounted(() => {
    if (textElement.value) {
      textScramble.value = new TextScramble(textElement.value)
      next()
    }
  })
</script>

<template>
  <section class="relative">
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <!-- Section header -->
      <div
        class="flex flex-col items-center justify-center h-screen max-w-4xl pt-32 pb-24 mx-auto text-center"
      >
        <h1
          class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
        >
          Hoppscotch for
          <div ref="textElement">&nbsp;</div>
        </h1>
      </div>
      <!-- Section content -->
      <div class="max-w-5xl mx-auto space-y-14">
        <!-- Section #1 -->
        <section>
          <div
            class="relative bg-black/50 backdrop-blur-md rounded-2xl border border-zinc-500/25 overflow-hidden transition-transform duration-700 ease-in-out z-[2]"
          >
            <div class="items-center justify-between md:flex">
              <div class="px-12 shrink-0 py-14 max-md:pb-0 md:pr-0">
                <div class="md:max-w-md">
                  <div
                    class="relative inline-flex items-end justify-center mb-2 text-xl text-indigo-500 font-nycd"
                  >
                    Interesting
                    <svg
                      class="absolute fill-indigo-500 opacity-40 -z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="88"
                      height="4"
                      viewBox="0 0 88 4"
                      aria-hidden="true"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999"
                      />
                    </svg>
                  </div>
                  <h1 class="mb-4 text-4xl font-extrabold text-zinc-50">
                    The modern way to find high-quality devs
                  </h1>
                  <p class="mb-6 text-zinc-400">
                    We're the world's largest marketplace of quality developers
                    for early-stage startups. Need a hand with development? Grab
                    one of ours!
                  </p>
                  <a
                    class="text-sm font-medium inline-flex items-center justify-center px-3 py-1.5 border border-zinc-500/25 rounded-lg tracking-normal transition text-zinc-300 hover:text-zinc-50 group"
                    href="#0"
                  >
                    Learn More
                    <span
                      class="text-zinc-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </a>
                </div>
              </div>
              <img
                class="mx-auto max-md:-translate-x-[5%]"
                src="/images/illustration-01.png"
                width="519"
                height="490"
                alt="Illustration 01"
              />
            </div>
            <div
              class="absolute bottom-0 flex items-center text-xs font-medium text-zinc-400 left-12 h-14"
            >
              01
            </div>
          </div>
        </section>
        <!-- Section #2 -->
        <section>
          <div
            class="relative bg-black/50 backdrop-blur-md rounded-2xl border border-zinc-500/25 overflow-hidden transition-transform duration-700 ease-in-out z-[1]"
          >
            <div class="items-center justify-between md:flex">
              <div class="px-12 shrink-0 py-14 max-md:pb-0 md:pr-0">
                <div class="md:max-w-md">
                  <div
                    class="relative inline-flex items-end justify-center mb-2 text-xl font-nycd text-sky-500"
                  >
                    Engaging
                    <svg
                      class="absolute fill-sky-500 opacity-40 -z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="88"
                      height="4"
                      viewBox="0 0 88 4"
                      aria-hidden="true"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999"
                      />
                    </svg>
                  </div>
                  <h1 class="mb-4 text-4xl font-extrabold text-zinc-50">
                    The modern way to find high-quality devs
                  </h1>
                  <p class="mb-6 text-zinc-400">
                    We're the world's largest marketplace of quality developers
                    for early-stage startups. Need a hand with development? Grab
                    one of ours!
                  </p>
                  <a
                    class="text-sm font-medium inline-flex items-center justify-center px-3 py-1.5 border border-zinc-500/25 rounded-lg tracking-normal transition text-zinc-300 hover:text-zinc-50 group"
                    href="#0"
                  >
                    Learn More
                    <span
                      class="text-zinc-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </a>
                </div>
              </div>
              <img
                class="mx-auto max-md:-translate-x-[5%]"
                src="/images/illustration-02.png"
                width="519"
                height="490"
                alt="Illustration 02"
              />
            </div>
            <div
              class="absolute bottom-0 flex items-center text-xs font-medium text-zinc-400 left-12 h-14"
            >
              02
            </div>
          </div>
        </section>
        <!-- Section #3 -->
        <section>
          <div
            class="relative z-0 overflow-hidden border border-zinc-800 transition-transform duration-700 ease-in-out bg-black/50 backdrop-blur-md rounded-2xl"
          >
            <div class="items-center justify-between md:flex">
              <div class="px-12 shrink-0 py-14 max-md:pb-0 md:pr-0">
                <div class="md:max-w-md">
                  <div
                    class="relative inline-flex items-end justify-center mb-2 text-xl text-teal-500 font-nycd"
                  >
                    Appealing
                    <svg
                      class="absolute fill-teal-500 opacity-40 -z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="88"
                      height="4"
                      viewBox="0 0 88 4"
                      aria-hidden="true"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999"
                      />
                    </svg>
                  </div>
                  <h1 class="mb-4 text-4xl font-extrabold text-zinc-50">
                    The modern way to find high-quality devs
                  </h1>
                  <p class="mb-6 text-zinc-400">
                    We're the world's largest marketplace of quality developers
                    for early-stage startups. Need a hand with development? Grab
                    one of ours!
                  </p>
                  <a
                    class="text-sm font-medium inline-flex items-center justify-center px-3 py-1.5 border border-zinc-500/25 rounded-lg tracking-normal transition text-zinc-300 hover:text-zinc-50 group"
                    href="#0"
                  >
                    Learn More
                    <span
                      class="text-zinc-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </a>
                </div>
              </div>
              <img
                class="mx-auto max-md:-translate-x-[5%]"
                src="/images/illustration-03.png"
                width="519"
                height="490"
                alt="Illustration 03"
              />
            </div>
            <div
              class="absolute bottom-0 flex items-center text-xs font-medium text-zinc-400 left-12 h-14"
            >
              03
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
