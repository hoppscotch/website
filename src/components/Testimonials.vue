<script setup lang="ts">
import TestimonialImg01 from "/images/testimonial-01.jpeg"
import TestimonialImg02 from "/images/testimonial-02.jpeg"
import TestimonialImg03 from "/images/testimonial-03.jpeg"

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

const active = ref<number>(0)
const autorotate = ref<boolean>(true)
const autorotateTiming = ref<number>(7000)

const items = ref<Testimonial[]>([
  {
    img: TestimonialImg01,
    quote:
      "Hoppscotch is the future of API development infrastructure, and the future is here.",
    name: "Joseph Jacks",
    role: "Founder, OSS Capital",
  },
  {
    img: TestimonialImg02,
    quote: "Hoppscotch which gives me all of the functions I need.",
    name: "Jason McFeetors",
    role: "Automation Evangelist, n8n",
  },
  {
    img: TestimonialImg03,
    quote: "Our team loves Hoppscotch. Saved us a lot of time.",
    name: "Rakshit Arora",
    role: "Founder, MoonlightDevs",
  },
])

onMounted(() => {
  if (autorotate.value) {
    setInterval(() => {
      active.value = (active.value + 1) % items.value.length
    }, autorotateTiming.value)
  }
})
</script>

<template>
  <section>
    <div class="mx-auto max-w-4xl px-4 sm:px-6">
      <div class="relative pb-12 md:pb-16">
        <!-- Particles animation -->
        <div
          class="absolute left-1/2 top-0 -z-10 -mt-6 h-80 w-80 -translate-x-1/2"
        >
          <ClientOnly>
            <Particles
              class="absolute inset-0 -z-10"
              :quantity="10"
              :staticity="30"
            />
          </ClientOnly>
        </div>
        <!-- Carousel -->
        <div class="text-center">
          <!-- Testimonial image -->
          <div
            class="relative h-32 [mask-image:_linear-gradient(0deg,_transparent,_theme(colors.zinc.500)_40%,_theme(colors.zinc.500))]"
          >
            <div
              class="before: pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full before:absolute before:inset-0 before:-z-20 before:rounded-full before:bg-gradient-to-b before:from-zinc-500/20 before:to-20% after:absolute after:inset-0 after:-z-20 after:m-px after:rounded-full after:bg-zinc-950"
            >
              <TransitionGroup
                enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 order-first"
                enter-from-class="opacity-0 -rotate-[60deg]"
                enter-to-class="opacity-100 rotate-0"
                leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500"
                leave-from-class="opacity-100 rotate-0"
                leave-to-class="opacity-0 rotate-[60deg]"
              >
                <template v-for="(item, index) in items" :key="index">
                  <div
                    v-if="active === index"
                    class="absolute inset-0 -z-10 h-full"
                  >
                    <img
                      loading="lazy"
                      class="slatescale relative left-1/2 top-11 h-16 w-16 -translate-x-1/2 rounded-full border border-zinc-500/20 p-1 filter"
                      :src="item.img"
                      :alt="item.name"
                    />
                  </div>
                </template>
              </TransitionGroup>
            </div>
          </div>
          <!-- Text -->
          <div class="relative mb-10 flex flex-col items-center">
            <TransitionGroup
              enter-active-class="order-first transition duration-500 delay-200"
              enter-from-class="opacity-0 -translate-x-4"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="absolute transition duration-500 delay-300"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 translate-x-4"
            >
              <template v-for="(item, index) in items" :key="index">
                <div
                  v-if="active === index"
                  class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-xl font-semibold text-transparent"
                >
                  {{ item.quote }}
                </div>
              </template>
            </TransitionGroup>
          </div>
          <!-- Buttons -->
          <div class="-m-1.5 flex flex-wrap justify-center">
            <template v-for="(item, index) in items" :key="index">
              <button
                class="relative m-1.5 inline-flex items-center justify-center rounded-full border border-transparent px-3 py-1 text-xs text-zinc-200 transition [background:linear-gradient(theme(colors.zinc.950),_theme(colors.zinc.950))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-zinc-950/10"
                :class="
                  active === index
                    ? 'opacity-100 shadow-xl shadow-zinc-950/50'
                    : 'opacity-50 hover:opacity-80'
                "
                @click="
                  () => {
                    active = index
                  }
                "
              >
                <span class="relative">
                  <span class="text-zinc-50">{{ item.name }}</span>
                  <span class="ml-2 text-zinc-500">{{ item.role }}</span>
                </span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
